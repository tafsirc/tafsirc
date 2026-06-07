import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      company: "Standard Insights",
      position: "Full Stack AI Engineer",
      duration: "Oct 24 - Present | Remote | New York, USA",
      responsibilities: [
        "Architected a multi-phase, multi-LLM AI report generation pipeline built as durable Inngest functions with retries and concurrency control, replacing one-shot API calls with background jobs.",
        "Owned a distributed worker microservice for AI workloads across multiple queue types, including an idempotent Excel/CSV ingestion pipeline with Gemini schema analysis and S3 I/O.",
        "Built an AI-powered Survey Builder Agent with Zod schema validation against Gemini structured output for natural-language survey management.",
        "Built REST APIs in Express.js with MongoDB and Redis; implemented JWT auth, RBAC, and Google OAuth2 for Google Sheets and Slack integrations.",
        "Containerized production services with Docker, GitHub Actions CI/CD, and deployments on AWS ECS and Railway.",
      ],
    },
    {
      company: "HJ Animation Shop LTD",
      position: "Full-Stack Developer",
      duration: "Jul 23 - Sep 24 | Remote | Loughton, United Kingdom",
      responsibilities: [
        "Built autonomous AI customer support platform (Aximus) with Vercel AI SDK — ToolLoopAgent, tool-calling, and keyword-scoring RAG engine with Meta webhook ingestion.",
        "Architected multi-tenant SaaS platforms in Next.js and Drizzle ORM, including commission engines, AI portrait editing, exam grading, and a headless CMS with RSC and JSON-LD.",
        "Integrated Better Auth with RBAC, OTP 2FA, and session revocation; wired payment flows and serverless PDF certificate generation.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Professional Experience
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{exp.company}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {exp.position} | {exp.duration}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-justify">
                    {resp}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
