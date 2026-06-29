export function About() {
  return (
    <section id="about" className="py-16 max-w-5xl mx-auto px-4">
      {/* Section header */}
      <div className="section-rule">
        <span className="section-tag shrink-0">About</span>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-border">
        {/* Main bio — two columns wide */}
        <div className="md:col-span-2 bg-background pr-8 pb-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-1 leading-tight">
            On Building Systems That Run When You Sleep
          </h2>
          <p className="dateline mb-6">By Tafsir Chowdhury &mdash; Dhaka, Bangladesh</p>

          <p className="drop-cap text-muted-foreground leading-relaxed text-[0.95rem] mb-4">
            ackend-first by philosophy, full-stack by necessity. I have spent the
            last three years writing the code that most users never see — the
            worker queues, the retry logic, the LLM orchestration layers — the
            infrastructure that makes products feel effortless.
          </p>
          <p className="text-muted-foreground leading-relaxed text-[0.95rem] mb-4">
            At Standard Insights, I architect multi-phase AI pipelines using
            durable Inngest functions, own distributed worker microservices across
            multiple queue types, and build REST APIs that handle real production
            load. Before that, at HJ Animation Shop, I built Aximus — an autonomous
            AI customer support platform powered by RAG and tool-calling agents.
          </p>
          <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
            I hold a Bachelor of Science in Computer Science from the University
            of the People (CGPA 3.67), and carry software engineering
            certifications from IBM, Meta, and AWS.
          </p>

          {/* Pull quote */}
          <div className="pull-quote mt-8">
            &ldquo;I architect systems that run when you sleep — multi-LLM pipelines,
            distributed workers, and APIs that scale without drama.&rdquo;
          </div>
        </div>

        {/* Sidebar — profile facts */}
        <div className="bg-background pl-6 pb-8 border-l border-border">
          <p className="section-tag mb-5">Profile</p>
          <div className="space-y-5">
            <div>
              <p className="dateline mb-1">Specialisation</p>
              <p className="text-foreground text-sm font-sans leading-snug">
                Multi-LLM Pipelines, Distributed Systems, Scalable APIs
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="dateline mb-1">Stack</p>
              <p className="text-foreground text-sm font-sans leading-snug">
                TypeScript · Node.js · Next.js · AWS · PostgreSQL · Redis
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="dateline mb-1">AI Tools</p>
              <p className="text-foreground text-sm font-sans leading-snug">
                OpenAI · Claude · Gemini · Vercel AI SDK · RAG · Agents
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="dateline mb-1">Certifications</p>
              <p className="text-foreground text-sm font-sans leading-snug">
                IBM Full Stack · Meta Back-End & Front-End · AWS Fundamentals
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <p className="dateline mb-1">Availability</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#34d399" }} />
                <p className="text-foreground text-sm font-sans">Open to work</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-foreground/10 mt-8" />
    </section>
  );
}
