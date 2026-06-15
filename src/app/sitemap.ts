import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { fetchMediumArticles } from "@/lib/medium";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await fetchMediumArticles();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/projects"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoute: MetadataRoute.Sitemap =
    articles.length > 0
      ? [
          {
            url: absoluteUrl("/blog"),
            lastModified: new Date(articles[0].date),
            changeFrequency: "weekly",
            priority: 0.7,
          },
        ]
      : [];

  return [...staticRoutes, ...projectRoutes, ...blogRoute];
}
