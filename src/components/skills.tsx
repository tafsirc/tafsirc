"use client";

import dynamic from "next/dynamic";
const ClientReOrder = dynamic(() => import("./reorder"), { ssr: false });

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "TanStack Query",
        "Zustand",
        "Tailwind CSS",
        "ShadCN UI",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Drizzle",
        "Prisma",
        "Mongoose",
        "Redis",
        "BullMQ",
        "Better Auth",
        "Clerk",
      ],
    },
    {
      category: "Applied AI",
      skills: [
        "RAG",
        "AI Agents",
        "Tool Calling",
        "Vercel AI SDK",
        "OpenAI API",
        "Claude API",
        "Gemini API",
      ],
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        "Docker",
        "AWS (EC2, ECS)",
        "Vercel",
        "Railway",
        "GitHub Actions",
        "CI/CD",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 max-w-5xl mx-auto px-4">
      <div className="section-rule">
        <span className="section-tag shrink-0">Skills & Technologies</span>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-border">
        {/* Index column header */}
        <div className="md:col-span-3 bg-background pb-4">
          <p className="font-serif text-2xl font-bold text-foreground mb-1">
            Technical Index
          </p>
          <p className="text-muted-foreground text-sm font-sans italic">
            Drag to reorder within categories.
          </p>
        </div>

        {skillCategories.map((cat, i) => (
          <div
            key={i}
            className="bg-background pt-5 pb-6 px-6"
            style={{ borderTop: "1px solid hsl(var(--border))" }}
          >
            {/* Category header — serif italic label */}
            <p className="font-serif text-base font-bold italic text-foreground mb-1 leading-tight">
              {cat.category}
            </p>
            <div className="h-px mb-4" style={{ backgroundColor: "#34d399", opacity: 0.5 }} />
            <ClientReOrder
              className="cursor-grab active:cursor-grabbing h-7"
              parentClassName="flex flex-wrap gap-2"
              initialItems={cat.skills}
            />
          </div>
        ))}
      </div>

      <div className="border-t border-foreground/10 mt-8" />
    </section>
  );
}
