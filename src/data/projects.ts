export interface Project {
  slug: string;
  title: string;
  description: string;
  overview: string;
  technologies: string[];
  features: string[];
  github: string;
  live: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "visual-source",
    title: "Visual Source",
    description: "Real-time soccer match operations and social graphic automation.",
    overview:
      "Visual Source is a multi-tenant platform for soccer clubs to manage matchday operations, generate dynamic graphics, and automate social media posting. Built as a production Turborepo monorepo with containerized deployment.",
    technologies: [
      "Next.js",
      "Turborepo",
      "Better Auth",
      "PostgreSQL",
      "Fabric.js",
      "Sharp",
      "Cloudflare R2",
      "Docker Compose",
      "Caddy",
    ],
    features: [
      "Architected a multi-tenant soccer club dashboard with isolated workspaces for multiple sports organizations.",
      "Engineered a headless canvas rendering pipeline with Fabric.js and Sharp, storing graphics in Cloudflare R2.",
      "Integrated Facebook, Instagram, and Twitter Graph APIs with polling and media chunking for automated matchday posting.",
      "Designed a Sportmonks API synchronizer using PostgreSQL advisory locks to prevent write collisions.",
      "Deployed a containerized stack with Docker Compose, PostgreSQL, Next.js, and Caddy for SSL and reverse proxying.",
    ],
    github: "",
    live: "https://my.visualsource.nl/",
    featured: true,
  },
  {
    slug: "everything-green",
    title: "Everything Green",
    description: "Digital sustainability and SEO platform.",
    overview:
      "Everything Green helps businesses measure digital sustainability and improve SEO performance. Features a RAG chatbot, AI-driven SEO recommendations, subscription billing, and interactive data visualizations.",
    technologies: [
      "Next.js",
      "MongoDB",
      "OpenAI",
      "RAG",
      "CatBoost",
      "Stripe",
      "PayPal",
      "D3.js",
    ],
    features: [
      "Designed a RAG chatbot with OpenAI embeddings, HTML scraping, semantic chunking, and context-aware query optimization.",
      "Built an AI SEO engine matching Google Ads suggestions to pages via cosine similarity, with CatBoost conversion classification.",
      "Implemented subscription billing with Stripe and PayPal, including customer portals, coupons, and webhook validation.",
      "Built a Next.js dashboard with interactive D3/Sankey visualizations for sustainability metrics.",
    ],
    github: "",
    live: "https://www.everythinggreen.org/",
    featured: true,
  },
  {
    slug: "career-dock",
    title: "Career Dock",
    description: "A modern job tracking application.",
    overview:
      "Career Dock is a job application tracker with AI-powered resume, LinkedIn, and cover letter generation using Gemini prompt-chaining workflows.",
    technologies: [
      "Next.js",
      "Express.js",
      "Clerk",
      "Lemon Squeezy",
      "Gemini API",
      "Vercel",
    ],
    features: [
      "Built an end-to-end Next.js and Express.js application with Clerk authentication, Lemon Squeezy billing, and CI/CD on Vercel.",
      "Integrated Gemini API prompt-chaining to generate tailored resumes, LinkedIn profiles, and cover letters from job descriptions.",
    ],
    github: "",
    live: "https://careerdock.app",
    featured: true,
  },
  {
    slug: "baby-care-store",
    title: "Baby Care Store",
    description: "An ecommerce web application for baby care accessories.",
    overview:
      "Baby Care Store is a full-featured ecommerce platform designed for baby care products and accessories. It provides a smooth shopping experience with product browsing, cart management, and checkout functionality. The platform includes separate dashboards for customers to track orders and for administrators to manage products, users, and order statuses.",
    technologies: [
      "Next.js",
      "React",
      "Redux",
      "TypeScript",
      "Tailwind",
      "ShadCN",
      "Prisma",
      "PostgreSQL",
    ],
    features: [
      "Implemented ecommerce features including view products, add to cart, and checkout. Dashboard for users to manage previous order and current order status.",
      "Implemented Dashboard for admin to manage products and users. Add new products. Manage all order status.",
    ],
    github: "https://github.com/ctafsiras/baby-care-store",
    live: "https://baby-care-store-three.vercel.app",
    featured: false,
  },
  {
    slug: "bake-n-treat",
    title: "Bake N Treat",
    description: "A bakery ecommerce website for delicious treats.",
    overview:
      "Bake N Treat is a visually appealing bakery ecommerce platform that enables customers to browse and purchase baked goods online. The application features a complete shopping experience with Stripe payment integration, user authentication through NextAuth.js, and a responsive design that showcases bakery products beautifully across all devices.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "MongoDB",
      "NextAuth.js",
    ],
    features: [
      "Implemented a full-featured ecommerce platform with product listings, shopping cart, and secure checkout using Stripe.",
      "Created a user authentication system with NextAuth.js for customer accounts and order history.",
      "Designed a responsive and visually appealing interface showcasing bakery products.",
    ],
    github: "https://github.com/ctafsiras/bake-n-treat",
    live: "https://bake-n-treat.vercel.app",
    featured: false,
  },
  {
    slug: "legal-fist-exam",
    title: "Legal Fist Exam",
    description: "A MCQ based exam taking web application for law students.",
    overview:
      "Legal Fist Exam is a specialized MCQ examination platform built for law students preparing for legal exams. The application supports timed exams with instant result display and comprehensive report cards for exam history. Deployed on DigitalOcean with Ubuntu, the platform has served over 440 students who have taken exams more than 3,000 times.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "GitHub",
      "Digital Ocean",
      "Ubuntu",
    ],
    features: [
      "Implemented an MCQ exam feature with a timer, instant result display, and a report card for exam history. Where almost 440 students gave exams over 3000 times.",
      "Deployed the application on Digital Ocean with an Ubuntu server, integrated with GitHub for continuous integration and deployment.",
    ],
    github: "",
    live: "https://exam.legalfist.com",
    featured: false,
  },
  {
    slug: "mind-the-blog",
    title: "Mind The Blog",
    description:
      "A smart reminder for the latest article of all of your favorite blog sites.",
    overview:
      "Mind The Blog is a productivity tool that keeps users updated with the latest articles from their favorite blog sites. Users can subscribe to blogs and receive automated email notifications via Mailgun whenever new content is published. The application features secure authentication through Next Auth and a responsive design optimized for both mobile and desktop.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "ShadCN",
      "Prisma",
      "Next Auth",
      "MongoDB",
    ],
    features: [
      "Implemented Mailgun to send automated emails to users whenever their favorite blog publishes a new article.",
      "Responsive design optimized for both mobile and desktop devices.",
    ],
    github: "https://github.com/ctafsiras/mind-the-blog.git",
    live: "https://mindtheblog.vercel.app",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
