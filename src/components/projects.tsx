import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-16 max-w-5xl mx-auto px-4">
      <div className="section-rule">
        <span className="section-tag shrink-0">Featured Work</span>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-border">
        {featuredProjects.map((project, i) => (
          <div key={project.slug} className="bg-background p-8 border-b border-border">
            {/* Project Header */}
            <div className="mb-4">
              <h3 className="font-serif text-2xl font-bold text-foreground leading-tight mb-2 hover:text-emerald-400 transition-colors">
                <Link href={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>
              <p className="font-serif text-lg italic text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="h-px bg-border mb-5" />

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 5).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[0.65rem] tracking-widest uppercase border border-border px-2 py-0.5 text-foreground font-sans"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="text-[0.65rem] tracking-widest uppercase text-muted-foreground font-sans self-center">
                  +{project.technologies.length - 5} more
                </span>
              )}
            </div>

            {/* Key Features */}
            <ul className="space-y-2.5 mb-8">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex gap-2.5 text-[0.85rem] text-muted-foreground leading-relaxed font-sans">
                  <span className="font-serif font-bold mt-0.5 shrink-0" style={{ color: "#34d399" }}>
                    &mdash;
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-border/50">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs tracking-widest uppercase font-sans font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-3.5 h-3.5" /> Source
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs tracking-widest uppercase font-sans font-semibold transition-colors"
                  style={{ color: "#34d399" }}
                >
                  <ExternalLink className="w-3 h-3" /> Live Demo
                </a>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="flex items-center gap-1.5 text-xs tracking-widest uppercase font-sans font-semibold text-foreground hover:opacity-70 transition-opacity ml-auto"
              >
                Case Study <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 bg-background">
        <Link
          href="/projects"
          className="inline-block border border-foreground/30 hover:border-foreground/60 px-8 py-3 text-xs tracking-widest uppercase font-sans font-semibold transition-colors"
        >
          View Portfolio Archive
        </Link>
      </div>

      <div className="border-t border-foreground/10 mt-8" />
    </section>
  );
}
