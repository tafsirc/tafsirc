import { Button } from "@/components/ui/button";
import type { MediumArticle } from "@/lib/medium";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface BlogProps {
  articles: MediumArticle[];
}

export function Blog({ articles }: BlogProps) {
  if (articles.length === 0) return null;

  const [lead, ...rest] = articles.slice(0, 3);

  return (
    <section id="blog" className="py-16 max-w-5xl mx-auto px-4">
      <div className="section-rule">
        <span className="section-tag shrink-0">Arts &amp; Letters</span>
      </div>

      <div className="mb-8">
        <p className="font-serif text-2xl font-bold text-foreground mb-1">Latest Writing</p>
        <p className="text-muted-foreground text-sm font-sans italic">Published on Medium.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-border">
        {/* Lead article — spans 2 cols */}
        <div className="md:col-span-2 bg-background pr-8 pb-8">
          {lead.coverImage && (
            <div className="relative h-52 w-full overflow-hidden mb-5">
              <Image
                src={lead.coverImage}
                alt={lead.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          )}
          <p className="dateline mb-2">
            {new Date(lead.date).toLocaleDateString("en-US", {
              year: "numeric", month: "long", day: "numeric",
            })}
          </p>
          <h3 className="font-serif text-2xl font-bold text-foreground leading-snug mb-3 hover:text-emerald-400 transition-colors">
            <a href={lead.link} target="_blank" rel="noopener noreferrer">
              {lead.title}
            </a>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed font-sans mb-4 line-clamp-3">
            {lead.excerpt}
          </p>
          <a
            href={lead.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase font-sans font-semibold transition-colors"
            style={{ color: "#34d399" }}
          >
            Read Full Article <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Sidebar articles */}
        <div className="bg-background pl-6 pb-8 border-l border-border space-y-6">
          <p className="section-tag mb-4">Also in This Issue</p>
          {rest.map((post) => (
            <div key={post.id} className="border-b border-border pb-5 last:border-0 last:pb-0">
              <p className="dateline mb-1">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short", day: "numeric", year: "numeric",
                })}
              </p>
              <h4 className="font-serif text-base font-bold text-foreground leading-snug mb-2 hover:text-emerald-400 transition-colors">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </h4>
              <p className="text-muted-foreground text-xs leading-relaxed font-sans line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>

      {articles.length > 3 && (
        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="rounded-none border-foreground/30 hover:border-foreground/60 font-sans text-xs tracking-widest uppercase">
            <Link href="/blog">View All Issues</Link>
          </Button>
        </div>
      )}

      <div className="border-t border-foreground/10 mt-8" />
    </section>
  );
}
