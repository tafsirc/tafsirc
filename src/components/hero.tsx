import { Button } from "@/components/ui/button";
import TypewriterEffect from "@/components/typewriter-effect";

export function Hero() {
  const typedSentences = [
    "Tech <span style='color: #3b82f6;'>Builder</span>",
    "Problem <span style='color: #3b82f6;'>Solver</span>",
    "Software <span style='color: #3b82f6;'>Engineer</span>",
  ];
  return (
    <section className="py-24 px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Chowdhury Tafsir Ahmed Siddiki
      </h1>
      <div className="mt-4 h-[40px] lg:h-[56px] text-xl md:text-4xl">
        <TypewriterEffect sentences={typedSentences} />
      </div>
      <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
        An IBM Certified Full Stack Developer, passionate about continuous
        learning, exploring new technologies, and creating innovative solutions
        to solve real-world problems.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button asChild>
          <a target="_blank" href="/resume.pdf">
            View Resume
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="/resume.pdf"
            download="Tafsir_Chowdhury-Full_Stack_AI_Engineer.pdf"
          >
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
}
