import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Page Not Found | Tafsir Chowdhury",
  description:
    "The page you are looking for does not exist. Return to Tafsir Chowdhury's portfolio.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you requested could not be found. It may have been moved or
        removed.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/projects">View Projects</Link>
        </Button>
      </div>
    </div>
  );
}
