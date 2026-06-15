import type { Metadata } from "next";
import { Poppins as Font } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollTracker from "@/components/scroll-tracker";
import { Analytics } from "@vercel/analytics/next";
import { fetchMediumArticles } from "@/lib/medium";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const font = Font({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/",
  }),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortTitle}`,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author.name,
  url: siteConfig.url,
  email: siteConfig.author.email,
  jobTitle: "Full Stack AI Engineer",
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.leetcode,
    siteConfig.social.medium,
  ],
  knowsAbout: [
    "TypeScript",
    "Node.js",
    "Next.js",
    "AWS",
    "Artificial Intelligence",
    "Distributed Systems",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.shortTitle,
  url: siteConfig.url,
  description: siteConfig.description,
  author: {
    "@type": "Person",
    name: siteConfig.author.name,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${absoluteUrl("/projects")}?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const articles = await fetchMediumArticles();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <JsonLd data={[personJsonLd, websiteJsonLd]} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollTracker />
          <div className="flex flex-col min-h-screen">
            <Navbar showBlog={articles.length > 0} />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
