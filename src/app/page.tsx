import { About } from "@/components/about";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { fetchMediumArticles } from "@/lib/medium";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import LeetCode from "@/components/leetCode";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

export default async function Home() {
  const articles = await fetchMediumArticles();

  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <LeetCode />
      <Skills />
      <Blog articles={articles} />
      <Education />
      <Contact />
    </div>
  );
}
