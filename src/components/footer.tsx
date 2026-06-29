"use client";

import { usePathname } from "next/navigation";
import { Github, Linkedin, Code } from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  if (pathname === "/socials") return null;

  const today = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/20 mt-8">
      {/* Double rule masthead style */}
      <div className="h-px bg-foreground/10 mt-[2px]" />

      <div className="container mx-auto px-4 py-8">
        {/* Masthead centered nameplate */}
        <div className="text-center mb-6">
          <p className="font-serif text-2xl font-bold text-foreground tracking-tight">
            Tafsir Chowdhury
          </p>
          <p className="text-muted-foreground text-[0.65rem] tracking-widest uppercase font-sans mt-1">
            Full Stack AI Engineer &mdash; Dhaka, Bangladesh
          </p>
        </div>

        {/* Rule */}
        <div className="h-px bg-border mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-sans tracking-wide">
            &copy; {today} Tafsir Chowdhury. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com/tafsirc", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/tafsirc", icon: Linkedin, label: "LinkedIn" },
              { href: "https://leetcode.com/u/tafsirc", icon: Code, label: "LeetCode" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-[0.65rem] tracking-widest uppercase font-sans">
            Vol. I &mdash; Issue 001
          </p>
        </div>
      </div>
    </footer>
  );
}
