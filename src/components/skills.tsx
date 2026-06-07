"use client";

import { Card, CardContent } from "./ui/card";
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
      category: "AI",
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
    <section id="skills" className="py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <Card>
        <CardContent>
          <div className="space-y-6 pt-6">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-2">
                  {category.category}
                </h3>
                <div>
                  <ClientReOrder
                    className="cursor-grab h-8"
                    parentClassName="flex flex-wrap gap-2"
                    initialItems={category.skills}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
