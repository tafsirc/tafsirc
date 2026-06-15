import { projects } from "@/data/projects";
import { fetchMediumArticles } from "@/lib/medium";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export async function generateLlmsTxt(): Promise<string> {
  const articles = await fetchMediumArticles();

  const lines: string[] = [
    `# ${siteConfig.shortTitle}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "Backend-first Full Stack AI Engineer at Standard Insights. This site is a personal portfolio with project case studies, technical articles, and contact information.",
    "",
    `- Email: ${siteConfig.author.email}`,
    `- GitHub: ${siteConfig.social.github}`,
    `- LinkedIn: ${siteConfig.social.linkedin}`,
    `- LeetCode: ${siteConfig.social.leetcode}`,
    `- Medium: ${siteConfig.social.medium}`,
    "",
    "## Main Pages",
    "",
    `- [Home](${absoluteUrl("/")}): Portfolio homepage with about, experience, projects, skills, and contact.`,
    `- [Projects](${absoluteUrl("/projects")}): Full list of production and side projects.`,
  ];

  if (articles.length > 0) {
    lines.push(
      `- [Articles](${absoluteUrl("/blog")}): Technical writing on full stack development and AI.`,
    );
  }

  lines.push("", "## Projects", "");

  for (const project of projects) {
    lines.push(
      `- [${project.title}](${absoluteUrl(`/projects/${project.slug}`)}): ${project.description}`,
    );
  }

  if (articles.length > 0) {
    lines.push("", "## Articles", "");
    for (const article of articles) {
      lines.push(`- [${article.title}](${article.link}): ${article.excerpt}`);
    }
  }

  lines.push(
    "",
    "## Optional",
    "",
    `- [Resume (PDF)](${absoluteUrl("/resume.pdf")}): Downloadable resume.`,
    `- [GitHub profile](${siteConfig.social.github}): Open-source work and contributions.`,
    `- [LinkedIn profile](${siteConfig.social.linkedin}): Professional background and experience.`,
    "",
    "## Discovery",
    "",
    `- [Sitemap](${absoluteUrl("/sitemap.xml")}): XML sitemap for search engines.`,
    `- [robots.txt](${absoluteUrl("/robots.txt")}): Crawler access rules.`,
  );

  return `${lines.join("\n")}\n`;
}
