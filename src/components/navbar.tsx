"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const baseNavLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/#problem-solving", label: "Problem Solving" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

const blogNavLink = { href: "/blog", label: "Articles" };

interface NavbarProps {
  showBlog?: boolean;
}

export function Navbar({ showBlog = false }: NavbarProps) {
  const navLinks = showBlog
    ? [...baseNavLinks.slice(0, 5), blogNavLink, ...baseNavLinks.slice(5)]
    : baseNavLinks;

  const pathname = usePathname();
  if (pathname === "/socials") return null;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md">
      {/* Top thin rule */}
      <div className="h-px bg-foreground/40" />
      <div className="h-px bg-foreground/10 mt-[2px]" />

      <div className="container flex h-12 items-center px-4 mx-auto">
        {/* Logo / masthead name */}
        <Link href="/" className="mr-6 flex items-center group">
          <span className="font-serif text-lg font-bold tracking-tight text-foreground group-hover:text-emerald-400 transition-colors"
            style={{ "--tw-text-opacity": 1 } as React.CSSProperties}>
            Tafsir C.
          </span>
        </Link>

        {/* Desktop nav — small caps editorial style */}
        <nav className="items-center space-x-1 text-sm hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1 text-muted-foreground hover:text-foreground transition-colors text-[0.7rem] tracking-widest uppercase font-sans border-r border-border/50 last:border-r-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-foreground/5 rounded-none">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] border-border bg-background rounded-none">
              <div className="flex flex-col gap-4 mt-8">
                <div className="mb-4">
                  <p className="font-serif text-xl font-bold text-foreground">Tafsir C.</p>
                  <div className="h-px bg-border mt-2" />
                </div>
                <nav className="flex flex-col">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="text-[0.7rem] tracking-widest uppercase text-muted-foreground hover:text-foreground py-3 border-b border-border/50 transition-colors font-sans"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Bottom double rule */}
      <div className="h-px bg-foreground/40" />
      <div className="h-px bg-foreground/10 mt-[2px]" />
    </header>
  );
}
