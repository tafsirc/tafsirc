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
  problem?: string;
  contribution?: string;
  outcome?: string;
}

export const projects: Project[] = [
  {
    "slug": "standard-insights",
    "title": "Standard Insights",
    "description": "AI-assisted survey creation, research reports, and contextual chatbots.",
    "overview": "A consumer research and survey platform bringing survey management, AI-assisted reports, and contextual chatbots into a single research workflow.",
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Inngest",
      "OpenAI",
      "Claude",
      "Gemini",
      "AWS",
      "Railway"
    ],
    "features": [
      "Developed survey creation and management interfaces, backend APIs, and database workflows.",
      "Built AI report generation and a natural-language Survey Builder Agent with structured output validation.",
      "Implemented durable background jobs, retries, concurrency controls, and idempotent data ingestion.",
      "Managed containerized deployments across AWS and Railway."
    ],
    "github": "",
    "live": "https://app.standard-insights.com/",
    "featured": true,
    "problem": "Support survey research and AI analysis without tying long-running processing to a single web request.",
    "contribution": "Full Stack AI Engineer: frontend, backend APIs, AI workflows, background processing, and deployment.",
    "outcome": "Survey creation, report generation, and contextual research assistance share a workflow backed by durable processing."
  },
  {
    "slug": "kdf-corporation",
    "title": "KDF Corporation ERP",
    "description": "Custom operations, accounting, and project management software.",
    "overview": "A custom ERP connecting project operations with finance: procurement, vendors, staff advances, expenses, payroll, and management reporting.",
    "technologies": [
      "React",
      "TypeScript",
      "Hono",
      "Turso",
      "SQLite"
    ],
    "features": [
      "Built the React frontend, TypeScript/Hono APIs, and Turso/SQLite database.",
      "Implemented double-entry accounting, approvals, and audit trails.",
      "Added tender securities, performance guarantees, and private document storage.",
      "Delivered Excel exports and printable reports for operational and financial review."
    ],
    "github": "",
    "live": "https://kdfcorporation.qom.bd/",
    "featured": true,
    "problem": "Connect everyday project operations with traceable financial records and approval workflows.",
    "contribution": "Complete application development across frontend, APIs, database, and reporting.",
    "outcome": "Projects, procurement, expenses, and payroll feed financial records and management dashboards in one application."
  },
  {
    "slug": "eujobsconnect",
    "title": "EUJobsConnect",
    "description": "Staffing requests, private candidate matching, and employer portals.",
    "overview": "A staffing platform connecting employers with a private worker pool through separate employer, worker, and admin portals.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Stripe"
    ],
    "features": [
      "Built staffing request tracking, skills-based candidate matching, private invitations, and controlled contact access.",
      "Added Stripe payments and subscriptions, secure CV uploads, and email notifications.",
      "Developed content management and AI-generated explanations to support human candidate review.",
      "Handled application development and deployment."
    ],
    "github": "",
    "live": "https://eujobsconnect.com/",
    "featured": false,
    "problem": "Manage employer requests and candidate review while controlling access to worker contact information.",
    "contribution": "End-to-end frontend, backend, database, integrations, and deployment.",
    "outcome": "Employers, workers, and staff use separate portals for request tracking, matching, and candidate review."
  },
  {
    "slug": "optiqepx",
    "title": "OptiqEPX",
    "description": "AI study assistance, collaborative learning, and real-time quiz battles.",
    "overview": "An AI learning platform combining study support, group learning, and gamified practice, built with a Next.js/React frontend, TypeScript APIs, and PostgreSQL.",
    "technologies": [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "AI Integration",
      "Background Jobs"
    ],
    "features": [
      "Developed an AI study assistant, generated quizzes, and collaborative study rooms.",
      "Built real-time quiz battles, tournaments, leaderboards, and progress dashboards.",
      "Implemented document processing, job queues, authentication, and admin controls."
    ],
    "github": "",
    "live": "https://optiqepx.com/",
    "featured": false,
    "problem": "Bring AI study help and collaborative practice into a shared learning experience.",
    "contribution": "Complete product development across the frontend, TypeScript APIs, database, and background processing.",
    "outcome": "Students can study with AI assistance, practice together, and track their progress through quizzes and tournaments."
  },
  {
    "slug": "delegends-commerce",
    "title": "DeLegends E-commerce",
    "description": "Custom storefront, Stripe checkout, and order management.",
    "overview": "A custom e-commerce platform connecting a Next.js storefront with Express/TypeScript APIs, PostgreSQL, and an admin dashboard for store operations.",
    "technologies": [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Stripe",
      "AI Integration"
    ],
    "features": [
      "Built catalog search and filtering, wishlists, cart, customer accounts, and Stripe checkout.",
      "Developed order management, inventory controls, and payment/refund workflows.",
      "Added memberships, loyalty rewards, and an AI shopping assistant.",
      "Handled end-to-end application development and deployment."
    ],
    "github": "",
    "live": "https://delegends.com/",
    "featured": false,
    "problem": "Connect the customer shopping experience with inventory, payments, and order operations.",
    "contribution": "Full-stack application development and deployment, including storefront, admin tools, APIs, and integrations.",
    "outcome": "Customers can shop and manage their accounts while staff manage products, inventory, orders, and payment workflows."
  },
  {
    "slug": "delegends-barbershop",
    "title": "DeLegends Barbershop",
    "description": "Salon booking, multi-location calendars, and staff operations.",
    "overview": "A custom salon booking platform with a Next.js customer website, React admin dashboard, React Native app, and TypeScript/PostgreSQL backend.",
    "technologies": [
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "PostgreSQL"
    ],
    "features": [
      "Built appointment booking, rescheduling, and cancellation workflows.",
      "Developed multi-location calendars, barber working hours, availability, and receptionist booking tools.",
      "Added role-based access, client history, appointment checkout, and payroll reports.",
      "Integrated a product shop, loyalty rewards, gift cards, and AI hairstyle consultation."
    ],
    "github": "",
    "live": "https://app.delegendsbarbershop.lt/",
    "featured": true,
    "problem": "Coordinate customer bookings, staff availability, and daily operations across salon locations.",
    "contribution": "End-to-end development and deployment of the customer experience, admin tools, and backend.",
    "outcome": "Customers manage appointments online, while staff coordinate calendars, checkout, client history, and payroll reporting."
  },
  {
    slug: "visual-source",
    problem: "Coordinate match events, branded graphics, and social publishing for soccer clubs.",
    contribution: "Full-stack platform development, graphic rendering, data synchronization, and deployment.",
    outcome: "Clubs can log match events, generate graphics, and schedule social publishing from one workspace.",
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
      "node-canvas",
      "Sharp",
      "Cloudflare R2",
      "Docker Compose",
      "Caddy",
    ],
    features: [
      "Architected a multi-tenant soccer club dashboard with isolated workspaces for multiple sports organizations.",
      "Engineered a headless canvas rendering pipeline with Fabric.js, node-canvas, and Sharp, storing compiled matchday graphics in Cloudflare R2.",
      "Integrated Facebook, Instagram, and Twitter Graph APIs with polling and media chunking for automated matchday posting.",
      "Designed a Sportmonks API synchronizer using PostgreSQL advisory locks to prevent write collisions.",
      "Developed a live event logging UI with game-state tracking, automatic score override mechanisms, and a cron-scheduled graphic publishing queue.",
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
      "Everything Green helps businesses measure digital sustainability and improve SEO performance. Built on NestJS and Next.js, with a RAG chatbot, AI-driven SEO recommendations, subscription billing, and interactive data visualizations.",
    technologies: [
      "Next.js",
      "NestJS",
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
    featured: false,
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
    featured: false,
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
    github: "https://github.com/tafsirc/baby-care-store",
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
    github: "https://github.com/tafsirc/bake-n-treat",
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
    github: "https://github.com/tafsirc/mind-the-blog",
    live: "https://mindtheblog.vercel.app",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
