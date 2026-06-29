"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    title: "Total Solved",
    count: 238,
    total: "800+",
    note: "Across all platforms",
  },
  {
    title: "LeetCode Easy",
    count: 70,
    total: "of 850",
    note: "Accuracy-focused",
  },
  {
    title: "LeetCode Medium",
    count: 22,
    total: "of 1790",
    note: "Consistency building",
  },
  {
    title: "Codeforces",
    count: 146,
    total: "problems",
    note: "Competitive practice",
  },
];

export default function LeetCode() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="problem-solving" className="py-16 max-w-5xl mx-auto px-4" ref={sectionRef}>
      <div className="section-rule">
        <span className="section-tag shrink-0">Problem Solving</span>
      </div>

      {/* Infographic header */}
      <div className="mb-8">
        <p className="font-serif text-2xl font-bold text-foreground mb-1">
          By the Numbers
        </p>
        <p className="text-muted-foreground text-sm font-sans italic">
          Competitive programming statistics — LeetCode & Codeforces.
        </p>
      </div>

      {/* Stats grid — newspaper data box style */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            className="bg-background p-6"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Emerald accent top rule */}
            <div className="h-[3px] w-8 mb-4" style={{ backgroundColor: "#34d399" }} />

            <motion.p
              className="font-serif text-5xl font-black text-foreground leading-none mb-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {stat.count}
            </motion.p>

            <p className="text-foreground text-sm font-semibold font-sans mb-1">
              {stat.title}
            </p>
            <p className="dateline">{stat.total}</p>
            <p className="text-muted-foreground text-xs font-sans italic mt-1">
              {stat.note}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-foreground/10 mt-8" />
    </section>
  );
}
