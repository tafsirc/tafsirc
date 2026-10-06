import { siteConfig } from "@/lib/site";

const contributions = [
  {
    name: "Formbricks",
    status: "4 merged pull requests",
    description: "Fixed a notification-switch crash, browser compatibility, native language names, and outdated documentation.",
    links: [
      { label: "Crash prevention", href: "https://github.com/formbricks/formbricks/pull/7268" },
      { label: "Browser compatibility", href: "https://github.com/formbricks/formbricks/pull/7325" },
      { label: "Language names", href: "https://github.com/formbricks/formbricks/pull/7349" },
      { label: "Documentation", href: "https://github.com/formbricks/formbricks/pull/7254" },
    ],
  },
  {
    name: "Dub",
    status: "Submitted pull request",
    description: "Prepared a mobile layout fix to prevent workspace slug prefixes from overflowing the creation form.",
    links: [{ label: "View contribution", href: "https://github.com/dubinc/dub/pull/3501" }],
  },
  {
    name: "Better T Stack",
    status: "Submitted pull request",
    description: "Prepared a fix for Convex client configuration in Better Auth templates, including regression tests.",
    links: [{ label: "View contribution", href: "https://github.com/AmanVarshney01/create-better-t-stack/pull/1264" }],
  },
];

export function ProfessionalProof() {
  return (
    <section id="contributions" className="py-16 max-w-5xl mx-auto px-4">
      <div className="section-rule">
        <span className="section-tag shrink-0">Open Source & Client Feedback</span>
      </div>
      <div className="grid md:grid-cols-3 gap-px bg-border">
        {contributions.map((item) => (
          <article key={item.name} className="bg-background p-6">
            <p className="dateline mb-2">{item.status}</p>
            <h3 className="font-serif text-xl font-bold mb-3">{item.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
            <div className="flex flex-col gap-2">
              {item.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:underline underline-offset-4">
                  {link.label} ↗
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
      <figure className="border-t border-border mt-8 pt-6">
        <blockquote className="font-serif text-lg italic leading-relaxed">
          &ldquo;What a great freelancer. Delivering very fast a high quality web application. Very flexible. Very fast response.&rdquo;
        </blockquote>
        <figcaption className="text-sm text-muted-foreground mt-3">
          Upwork client · Visual generator web application · 5/5 rating
          {" · "}<a href={siteConfig.social.upwork} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">View work history ↗</a>
        </figcaption>
      </figure>
    </section>
  );
}
