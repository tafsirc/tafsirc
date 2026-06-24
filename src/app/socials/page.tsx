import { Metadata } from "next";
import {
  Instagram,
  Github,
  Facebook,
  Linkedin,
  Twitter,
  MessageCircle,
  Globe,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Social Links",
  description: "Connect with me on social media.",
};

const socials = [
  {
    name: "Portfolio",
    url: siteConfig.url,
    icon: Globe,
    color:
      "bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white border-blue-500/20",
  },
  {
    name: "GitHub",
    url: siteConfig.social.github,
    icon: Github,
    color:
      "bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-800 hover:text-white active:bg-zinc-800 active:text-white dark:hover:bg-zinc-100 dark:hover:text-black dark:active:bg-zinc-100 dark:active:text-black border-zinc-500/20",
  },
  {
    name: "LinkedIn",
    url: siteConfig.social.linkedin,
    icon: Linkedin,
    color:
      "bg-sky-500/10 text-sky-600 hover:bg-sky-600 hover:text-white active:bg-sky-600 active:text-white border-sky-500/20",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+8801983510532",
    icon: MessageCircle,
    color:
      "bg-green-500/10 text-green-600 hover:bg-green-500 hover:text-white active:bg-green-500 active:text-white border-green-500/20",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/tafsirc",
    icon: Facebook,
    color:
      "bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white border-blue-600/20",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/tafsirch",
    icon: Twitter,
    color:
      "bg-slate-500/10 text-slate-800 dark:text-slate-200 hover:bg-slate-800 hover:text-white active:bg-slate-800 active:text-white dark:hover:bg-slate-200 dark:hover:text-black dark:active:bg-slate-200 dark:active:text-black border-slate-500/20",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/tafsircy",
    icon: Instagram,
    color:
      "bg-pink-500/10 text-pink-600 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 active:bg-gradient-to-tr active:from-yellow-400 active:via-pink-500 active:to-purple-500 hover:text-white active:text-white border-pink-500/20 hover:border-transparent active:border-transparent",
  },
];

export default function SocialsPage() {
  return (
    <div className="min-h-[100dvh] bg-background flex flex-col items-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 mt-4">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-primary/10 shadow-lg">
            <Image
              src="https://github.com/tafsirc.png"
              alt={siteConfig.author.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {siteConfig.author.name}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Full Stack AI Engineer
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between w-full p-4 rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] active:shadow-sm ${social.color}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-background/50 backdrop-blur-sm group-hover:bg-transparent group-active:bg-transparent transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-medium text-lg">{social.name}</span>
                </div>
                <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-active:opacity-100 group-active:translate-x-0 transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
