import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { MediumArticle } from "@/lib/medium";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface BlogProps {
  articles: MediumArticle[];
}

export function Blog({ articles }: BlogProps) {
  if (articles.length === 0) {
    return null;
  }

  const latestPosts = articles.slice(0, 3);

  return (
    <section id="blog" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Articles</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post) => (
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
              <div className="text-sm text-muted-foreground mb-1">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <CardTitle className="text-lg leading-tight">
                {post.title}
              </CardTitle>
              <CardDescription className="line-clamp-2">
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
      {articles.length > 3 && (
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
