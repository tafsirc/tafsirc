export function Education() {
  return (
    <section id="education" className="py-16 max-w-5xl mx-auto px-4">
      <div className="section-rule">
        <span className="section-tag shrink-0">Education</span>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-border">
        {/* Degree */}
        <div className="md:col-span-2 bg-background pr-8 pb-8">
          <p className="dateline mb-3">Academic Credentials</p>
          <h3 className="font-serif text-2xl font-bold text-foreground leading-tight mb-1">
            University of the People
          </h3>
          <p className="font-serif text-lg italic text-muted-foreground mb-4">
            Bachelor of Science in Computer Science
          </p>
          <div className="h-px bg-border mb-4" />
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Duration", value: "2021 — 2024" },
              { label: "Status", value: "Completed" },
              { label: "CGPA", value: "3.67 / 4.0" },
              { label: "Mode", value: "Online, Self-Directed" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="dateline mb-0.5">{label}</p>
                <p className="text-foreground text-sm font-semibold font-sans">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications sidebar */}
        <div className="bg-background pl-6 pb-8 border-l border-border">
          <p className="section-tag mb-5">Certifications</p>
          <div className="space-y-5">
            {[
              {
                name: "Full Stack Software Developer",
                issuer: "IBM / Coursera",
              },
              {
                name: "Back-End Developer",
                issuer: "Meta / Coursera",
              },
              {
                name: "Front-End Developer",
                issuer: "Meta / Coursera",
              },
              {
                name: "AWS Fundamentals",
                issuer: "AWS / Coursera",
              },
            ].map((cert) => (
              <div key={cert.name} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="flex items-start gap-2 mb-1">
                  <span className="font-serif font-bold text-sm shrink-0 mt-0.5" style={{ color: "#34d399" }}>✓</span>
                  <p className="text-foreground text-sm font-semibold font-sans leading-snug">{cert.name}</p>
                </div>
                <p className="dateline pl-5">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-foreground/10 mt-8" />
    </section>
  );
}
