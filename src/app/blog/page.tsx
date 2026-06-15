import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchMediumArticles } from "@/lib/medium";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Articles",
  description:
    "Technical articles and insights by Tafsir Chowdhury on full stack development, AI integration, and modern web technologies.",
  path: "/blog",
  keywords: ["blog", "articles", "technical writing", "Medium"],
});

export default async function BlogPage() {
  const articles = await fetchMediumArticles();

  if (articles.length === 0) {
    notFound();
  }

  const blogDescription =
    "Technical articles and insights by Tafsir Chowdhury on full stack development, AI integration, and modern web technologies.";

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Articles by Tafsir Chowdhury",
    description: blogDescription,
    url: absoluteUrl("/blog"),
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    blogPost: articles.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: post.link,
      author: {
        "@type": "Person",
        name: siteConfig.author.name,
      },
      ...(post.coverImage ? { image: post.coverImage } : {}),
    })),
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <JsonLd data={blogJsonLd} />
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-center mb-4">Articles</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Sharing my knowledge and experiences in full stack development, backend
        architecture, and AI integration on{" "}
        <a
          href="https://medium.com/@tafsirc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Medium
        </a>
        .
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden">
            {post.coverImage ? (
              <div className="relative h-48 w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="h-48 w-full bg-muted" />
            )}
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <CardTitle className="text-lg leading-tight">
                {post.title}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read on Medium
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
