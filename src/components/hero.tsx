import { Button } from "@/components/ui/button";

export function Hero() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      {/* Masthead top line */}
      <div className="flex items-center justify-between mb-1">
        <span className="issue-number">Vol. I &mdash; Issue No. 001</span>
        <span className="issue-number">{today}</span>
      </div>

      {/* Double rule */}
      <div className="masthead-border mb-6" />

      {/* Newspaper nameplate */}
      <div className="text-center mb-6">
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none text-foreground">
          Tafsir Chowdhury
        </h1>
        <div className="emerald-rule mt-4 mb-3 max-w-xs mx-auto" />
        <p className="text-muted-foreground text-sm tracking-widest uppercase font-sans">
          Full Stack AI Engineer &mdash; Dhaka, Bangladesh
        </p>
      </div>

      {/* Double rule */}
      <div className="border-t border-b border-foreground/20 py-[2px] mb-8">
        <div className="border-t border-foreground/20" />
      </div>

      {/* Two-column front page layout */}
      <div className="grid md:grid-cols-3 gap-px bg-border">
        {/* Lead column — bio */}
        <div className="md:col-span-2 bg-background p-6 pr-8">
          <p className="section-tag mb-3">Lead Story</p>
          <h2 className="font-serif text-2xl font-bold leading-snug text-foreground mb-4">
            Backend-First Engineer Architects AI Systems for Global Product Teams
          </h2>
          <p className="drop-cap text-muted-foreground leading-relaxed text-[0.95rem]">
            With over three years of production experience, Tafsir Chowdhury
            builds the infrastructure that makes modern AI applications possible —
            multi-LLM pipelines, distributed worker systems, and scalable REST APIs
            trusted by teams across New York and beyond.
          </p>
          <p className="text-muted-foreground leading-relaxed text-[0.95rem] mt-3">
            Currently serving as Full Stack AI Engineer at{" "}
            <span className="text-foreground font-semibold">Standard Insights</span>,
            Tafsir specialises in durable background functions, idempotent data
            pipelines, and AI agent toolchains — the quiet machinery behind products
            that scale.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Button
              asChild
              className="bg-emerald-DEFAULT text-background font-semibold rounded-none hover:bg-emerald-dim transition-colors px-5"
              style={{ backgroundColor: "#34d399", color: "#0a0a08" }}
            >
              <a target="_blank" href="/resume.pdf">View Resume</a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-none border-foreground/30 hover:border-foreground/60 hover:bg-foreground/5 font-semibold px-5"
            >
              <a href="/resume.pdf" download="Tafsir_Chowdhury-Full_Stack_AI_Engineer.pdf">
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Sidebar — key facts */}
        <div className="bg-background p-6 border-l border-border">
          <p className="section-tag mb-4">Key Facts</p>
          <div className="space-y-4">
            {[
              { label: "Current Role", value: "Full Stack AI Engineer" },
              { label: "Employer", value: "Standard Insights, NY" },
              { label: "Experience", value: "3+ Years" },
              { label: "Degree", value: "B.Sc Computer Science" },
              { label: "GPA", value: "3.67 / 4.0" },
              { label: "Location", value: "Dhaka, Bangladesh" },
            ].map(({ label, value }) => (
              <div key={label} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <p className="dateline mb-0.5">{label}</p>
                <p className="text-foreground text-sm font-semibold font-sans">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <p className="section-tag mb-3">Status</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ backgroundColor: "#34d399" }} />
              <span className="text-sm text-muted-foreground font-sans">Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="border-t border-foreground/20 mt-8" />
    </section>
  );
}
