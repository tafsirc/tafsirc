import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import Link from "next/link";
import { createMetadata, absoluteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "All Projects",
  description:
    "Browse projects by Tafsir Chowdhury — Full Stack AI Engineer. Production SaaS, AI platforms, and full-stack applications.",
  path: "/projects",
  keywords: ["projects", "portfolio", "SaaS", "AI platforms"],
});

export default function AllProjectsPage() {
  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by Tafsir Chowdhury",
    description:
      "Production SaaS, AI platforms, and full-stack applications built by Tafsir Chowdhury.",
    url: absoluteUrl("/projects"),
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: absoluteUrl(`/projects/${project.slug}`),
      description: project.description,
    })),
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <JsonLd data={projectsJsonLd} />
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-center mb-4">All Projects</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Production platforms and side projects — from AI-powered SaaS and
        multi-tenant dashboards to ecommerce and developer tools.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.slug} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="list-disc pl-5 space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-justify text-sm text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between gap-2">
              {project.github ? (
                <Button asChild variant="outline" size="sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              ) : (
                <Button disabled variant="outline" size="sm">
                  GitHub
                </Button>
              )}
              <Button asChild size="sm" variant="outline">
                <Link href={`/projects/${project.slug}`}>Project Details</Link>
              </Button>
              {project.live ? (
                <Button asChild size="sm">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              ) : (
                <Button disabled size="sm">
                  Live Demo
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
