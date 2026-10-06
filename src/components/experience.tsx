export function Experience() {
  const experiences = [
    {
      company: "Standard Insights",
      position: "Full Stack AI Engineer",
      duration: "Oct 2024 — Present",
      location: "Remote · New York, USA",
      current: true,
      lede: "Architecting durable AI pipelines and distributed worker systems for a data intelligence platform serving global enterprise clients.",
      responsibilities: [
        "Architected a multi-phase, multi-LLM AI report generation pipeline built as durable Inngest functions with retries and concurrency control, replacing one-shot API calls with background jobs.",
        "Owned a distributed worker microservice for AI workloads across multiple queue types, including an idempotent Excel/CSV ingestion pipeline with Gemini schema analysis and S3 I/O.",
        "Built an AI-powered Survey Builder Agent with Zod schema validation against Gemini structured output for natural-language survey management.",
        "Built REST APIs in Express.js with MongoDB and Redis; implemented JWT auth, RBAC, and Google OAuth2 for Google Sheets and Slack integrations.",
        "Containerized production services with Docker, GitHub Actions CI/CD, and deployments on AWS ECS and Railway.",
      ],
      tags: ["Inngest", "Gemini", "Node.js", "Redis", "AWS ECS", "Docker", "MongoDB"],
    },
    {
      company: "HJ Animation Shop LTD",
      position: "Full-Stack Developer",
      duration: "Jul 2023 — Sep 2024",
      location: "Remote · Loughton, UK",
      current: false,
      lede: "Built an autonomous AI customer support platform and a suite of multi-tenant SaaS products for a UK-based creative agency.",
      responsibilities: [
        "Built autonomous AI customer support platform (Aximus) using Vercel AI SDK — engineered an agent with dynamic tool calling and a keyword-scoring RAG engine without an embedding API, with HMAC-SHA256 Meta webhook ingestion and atomic DB idempotency locks.",
        "Architected multi-tenant SaaS platforms in Next.js and Drizzle ORM, including a floating-point-free commission math engine, custom binary JPEG/PNG metadata parser for AI portrait editing, randomized exam engine with practical video submission grading, and a headless CMS (Parocia) with RSC, dynamic sitemap/JSON-LD, and UUID-hashed file storage.",
        "Integrated Better Auth with RBAC, 6-digit OTP 2FA, and session revocation; wired SumUp and UddoktaPay v2 payment flows, and serverless jsPDF routes with font-scaling for dynamic certificate generation.",
      ],
      tags: ["Next.js", "Vercel AI SDK", "RAG", "Drizzle ORM", "Better Auth"],
    },
    {
      company: "Legal Fist",
      position: "Full Stack Developer",
      duration: "Jun 2022 — Jun 2023",
      location: "Remote",
      current: false,
      lede: "Built and deployed an online examination platform for law students, covering the frontend, backend, and server deployment.",
      responsibilities: [
        "Developed timed exams, automatic scoring, question management, and exam-history reports.",
        "Built responsive student and admin dashboards using Next.js, React, and Tailwind CSS.",
        "Deployed the application on DigitalOcean and resolved issues across the application and server.",
      ],
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "DigitalOcean"],
    },
  ];

  return (
    <section id="experience" className="py-16 max-w-5xl mx-auto px-4">
      <div className="section-rule">
        <span className="section-tag shrink-0">Professional Experience</span>
      </div>

      <div className="space-y-0 divide-y divide-border">
        {experiences.map((exp, index) => (
          <div key={index} className="py-10 grid md:grid-cols-3 gap-8">
            {/* Left — dateline metadata */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-2">
                {exp.current && (
                  <span className="flex items-center gap-1.5 text-[0.65rem] tracking-widest uppercase font-bold font-sans"
                    style={{ color: "#34d399" }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#34d399" }} />
                    Current
                  </span>
                )}
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground leading-tight mb-1">
                {exp.company}
              </h3>
              <p className="text-sm font-semibold font-sans mb-3" style={{ color: "#34d399" }}>
                {exp.position}
              </p>
              <p className="dateline mb-1">{exp.duration}</p>
              <p className="dateline">{exp.location}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.65rem] tracking-wide uppercase border border-border px-2 py-0.5 text-muted-foreground font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — article body */}
            <div className="md:col-span-2 column-rule pl-8">
              {/* Deck / lede */}
              <p className="font-serif text-lg italic text-foreground/80 leading-relaxed mb-5 border-b border-border pb-5">
                {exp.lede}
              </p>

              {/* Responsibilities */}
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3 text-[0.9rem] text-muted-foreground leading-relaxed font-sans">
                    <span className="font-serif font-bold mt-0.5 shrink-0" style={{ color: "#34d399" }}>
                      {String(idx + 1).padStart(2, "0")}.
                    </span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-foreground/10 mt-4" />
    </section>
  );
}
