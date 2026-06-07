import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <Card>
        <CardHeader>
          <CardTitle>Full Stack AI Engineer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-justify">
            Backend-first Full Stack AI Engineer at Standard Insights, building
            production-grade applications with TypeScript, Node.js, Next.js, and
            cloud infrastructure on AWS and Railway. I architect multi-LLM
            pipelines, distributed worker systems, and scalable REST APIs for
            global product teams. BSc in Computer Science from University of
            the People (CGPA 3.67), with IBM and Meta full-stack certifications.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
