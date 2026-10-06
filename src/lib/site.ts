export const siteConfig = {
  name: "Tafsir Chowdhury",
  title: "Tafsir Chowdhury | Full Stack AI Engineer",
  shortTitle: "Tafsir Chowdhury",
  description:
    "Portfolio of Tafsir Chowdhury — Full Stack AI Engineer building web products since 2022 with TypeScript, React, Node.js, Next.js, and applied AI. Explore research, ERP, staffing, sports, and commerce projects.",
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
    upwork: "https://www.upwork.com/freelancers/~01a150d13d45613490",
    leetcode: "https://leetcode.com/u/tafsirc",
    medium: "https://medium.com/@tafsirc",
  },
} as const;
