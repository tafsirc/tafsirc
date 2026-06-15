import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return createMetadata({
      title: "Project Not Found",
      description: "The requested project could not be found.",
      path: `/projects/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: project.title,
    description: project.overview,
    path: `/projects/${project.slug}`,
    keywords: [...project.technologies, "software project", "case study"],
  });
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.overview,
    url: project.live || absoluteUrl(`/projects/${project.slug}`),
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    keywords: project.technologies.join(", "),
    ...(project.github
      ? {
          codeRepository: project.github,
        }
      : {}),
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <JsonLd data={projectJsonLd} />
      <div className="mb-8 flex gap-4">
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; All Projects
        </Link>
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Home
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">
        {project.description}
      </p>

      {/* Project Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed text-justify">
            {project.overview}
          </p>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-primary font-bold mt-0.5">&#10003;</span>
                <span className="text-muted-foreground text-justify">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Technologies Used */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Technologies Used</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Links */}
      <div className="flex gap-4 flex-wrap">
        {project.github && (
          <Button asChild variant="outline">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </Button>
        )}
        {project.live && (
          <Button asChild>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </Button>
        )}
        <Button asChild variant="ghost">
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </div>
  );
}
