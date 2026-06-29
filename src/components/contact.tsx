import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const contactInfo = [
    { label: "Email", value: "tafsircy@gmail.com", href: "mailto:tafsircy@gmail.com" },
    { label: "Phone", value: "+880 1983 510532", href: "tel:+8801983510532" },
    { label: "Location", value: "Dhaka, Bangladesh", href: null },
  ];

  const socials = [
    { label: "GitHub", href: "https://github.com/tafsirc" },
    { label: "LinkedIn", href: "https://linkedin.com/in/tafsirc" },
    { label: "LeetCode", href: "https://leetcode.com/u/ctafsiras" },
    { label: "Medium", href: "https://medium.com/@tafsirc" },
  ];

  return (
    <section id="contact" className="py-16 max-w-5xl mx-auto px-4">
      <div className="section-rule">
        <span className="section-tag shrink-0">Letters to the Editor</span>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-border">
        {/* Contact info sidebar */}
        <div className="bg-background pr-8 pb-8">
          <p className="font-serif text-2xl font-bold text-foreground mb-1 leading-tight">
            Get in Touch
          </p>
          <p className="text-muted-foreground text-sm font-sans italic mb-6">
            Open to collaborations, contracts, and interesting conversations.
          </p>

          <div className="space-y-4 mb-8">
            {contactInfo.map(({ label, value, href }) => (
              <div key={label} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <p className="dateline mb-0.5">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="text-foreground text-sm font-semibold font-sans hover:underline underline-offset-2 transition-colors"
                    style={{ textDecorationColor: "#34d399" }}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-foreground text-sm font-semibold font-sans">{value}</p>
                )}
              </div>
            ))}
          </div>

          <p className="section-tag mb-3">Also Find Me At</p>
          <div className="flex flex-col gap-2">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors font-sans border-b border-border/50 pb-2 last:border-0"
              >
                {label} →
              </a>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="md:col-span-2 bg-background pl-8 pb-8 border-l border-border">
          <p className="section-tag mb-5">Send a Message</p>

          <form className="space-y-4" action="mailto:tafsircy@gmail.com" method="GET">
            <div>
              <label className="dateline block mb-1.5">Your Name</label>
              <Input
                placeholder="Full name"
                name="name"
                required
                className="rounded-none border-border bg-background focus:border-foreground/40 focus-visible:ring-0 text-foreground placeholder:text-muted-foreground/40 font-sans"
              />
            </div>
            <div>
              <label className="dateline block mb-1.5">Subject</label>
              <Input
                placeholder="What is this about?"
                name="subject"
                required
                className="rounded-none border-border bg-background focus:border-foreground/40 focus-visible:ring-0 text-foreground placeholder:text-muted-foreground/40 font-sans"
              />
            </div>
            <div>
              <label className="dateline block mb-1.5">Message</label>
              <Textarea
                placeholder="Your message..."
                name="body"
                required
                rows={6}
                className="rounded-none border-border bg-background focus:border-foreground/40 focus-visible:ring-0 text-foreground placeholder:text-muted-foreground/40 resize-none font-sans"
              />
            </div>
            <Button
              type="submit"
              className="rounded-none font-sans text-xs tracking-widest uppercase font-semibold px-8 py-3 border-0 transition-colors"
              style={{ backgroundColor: "#34d399", color: "#0a0a08" }}
            >
              Submit Letter
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-foreground/10 mt-8" />
    </section>
  );
}
