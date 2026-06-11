import { cache } from "react";

const MEDIUM_USERNAME = "tafsirc";
const MEDIUM_FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const FETCH_REVALIDATE_SECONDS = 3600;
const FETCH_TIMEOUT_MS = 5000;

export interface MediumArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  coverImage?: string;
}

function decodeCdata(content: string): string {
  const cdataMatch = content.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return cdataMatch ? cdataMatch[1] : content;
}

function extractTag(xml: string, tag: string): string | null {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = xml.match(regex);
  return match ? decodeCdata(match[1].trim()) : null;
}

function extractExcerpt(description: string): string {
  const snippetMatch = description.match(
    /class="medium-feed-snippet"[^>]*>([^<]*)/,
  );
  if (snippetMatch?.[1]) {
    return snippetMatch[1]
      .replace(/&#x2019;/g, "'")
      .replace(/&#x2014;/g, "—")
      .replace(/&#x2026;/g, "…")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .trim();
  }

  return description.replace(/<[^>]+>/g, "").trim().slice(0, 200);
}

function extractCoverImage(description: string): string | undefined {
  const imgMatch = description.match(/<img[^>]+src="([^"]+)"/);
  return imgMatch?.[1];
}

function parseMediumRss(xml: string): MediumArticle[] {
  const items = xml.split("<item>").slice(1);

  const articles: MediumArticle[] = [];

  for (const itemXml of items) {
    const block = itemXml.split("</item>")[0];
    const title = extractTag(block, "title");
    const link = extractTag(block, "link");
    const pubDate = extractTag(block, "pubDate");
    const guid = extractTag(block, "guid");
    const description = extractTag(block, "description") ?? "";

    if (!title || !link || !pubDate) {
      continue;
    }

    articles.push({
      id: guid ?? link,
      title: title
        .replace(/&#x2019;/g, "'")
        .replace(/&#x2014;/g, "—")
        .replace(/&#x2026;/g, "…")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"'),
      excerpt: extractExcerpt(description),
      date: new Date(pubDate).toISOString(),
      link: link.split("?")[0],
      coverImage: extractCoverImage(description),
    });
  }

  return articles;
}

async function fetchMediumArticlesUncached(): Promise<MediumArticle[]> {
  const startedAt = Date.now();

  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: FETCH_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
      },
    });

    if (!response.ok) {
      console.error("[medium] fetch failed", {
        durationMs: Date.now() - startedAt,
        status: response.status,
      });
      return [];
    }

    const xml = await response.text();
    const articles = parseMediumRss(xml);

    console.info("[medium] fetch succeeded", {
      durationMs: Date.now() - startedAt,
      count: articles.length,
    });

    return articles;
  } catch (error) {
    const reason =
      error instanceof Error
        ? `${error.name}: ${error.message}`
        : "Unknown fetch failure";

    console.error("[medium] fetch failed", {
      durationMs: Date.now() - startedAt,
      reason,
    });

    return [];
  }
}

export const fetchMediumArticles = cache(fetchMediumArticlesUncached);
