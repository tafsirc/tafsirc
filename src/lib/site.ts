export const siteConfig = {
  name: "Tafsir Chowdhury",
  title: "Tafsir Chowdhury | Full Stack AI Engineer",
  shortTitle: "Tafsir Chowdhury",
  description:
    "Portfolio of Tafsir Chowdhury — Full Stack AI Engineer building multi-LLM pipelines, distributed systems, and production web apps with TypeScript, Node.js, Next.js, and AWS.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://tafsir.qom.bd",
  locale: "en_US",
  keywords: [
    "Tafsir Chowdhury",
    "Full Stack AI Engineer",
    "TypeScript",
    "Node.js",
    "Next.js",
    "AWS",
    "software engineer",
    "portfolio",
    "multi-LLM pipelines",
    "distributed systems",
  ],
  author: {
    name: "Tafsir Chowdhury",
    email: "tafsircy@gmail.com",
    url: "https://tafsir.qom.bd",
  },
  social: {
    github: "https://github.com/tafsirc",
    linkedin: "https://linkedin.com/in/tafsirc",
    leetcode: "https://leetcode.com/u/tafsirc",
    medium: "https://medium.com/@tafsirc",
  },
} as const;
