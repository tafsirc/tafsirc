import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type CreateMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = ""): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return path === "" || path === "/"
    ? siteConfig.url
    : `${siteConfig.url}${normalizedPath}`;
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage,
  noIndex = false,
}: CreateMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const image = ogImage ?? "/opengraph-image";

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.shortTitle,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@tafsirc",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
