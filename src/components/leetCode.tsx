"use client";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { useRef } from "react";

const difficultyColors: Record<string, string> = {
  All: "bg-gradient-to-br from-blue-500 to-indigo-600",
  Easy: "bg-gradient-to-br from-emerald-500 to-teal-600",
  Medium: "bg-gradient-to-br from-orange-500 to-rose-600",
  Hard: "bg-gradient-to-br from-violet-500 to-purple-600",
};


const STATIC_STATS = {
  easySolved: 70,
  mediumSolved: 22,
  codeforceProblem: 146,
};

export default function LeetCode() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const stats = [
    {
      difficulty: "All",
      title: "Total Solved",
      count: STATIC_STATS.easySolved + STATIC_STATS.mediumSolved + STATIC_STATS.codeforceProblem,
      total: "800+",
    },
    {
      difficulty: "Easy",
      title: "LeetCode (Easy)",
      count: STATIC_STATS.easySolved,
      total: 850,
    },
    {
      difficulty: "Medium",
      title: "LeetCode (Medium)",
      count: STATIC_STATS.mediumSolved,
      total: 1790,
    },
    {
      difficulty: "Hard",
      title: "Codeforce Problems",
      count: STATIC_STATS.codeforceProblem,
      total: "N/A",
    },
  ];

  return (
    <section id="problem-solving" className="py-16 max-w-3xl mx-auto" ref={sectionRef}>
      <h2 className="text-3xl font-bold text-center mb-8">Problem Solving Stats</h2>
      <Card>
        <CardContent>
          <div className="pt-6 grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.difficulty}
                className={`${
                  difficultyColors[stat.difficulty]
                } p-6 rounded-lg shadow-md text-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.title}
                </h3>
                <motion.div
                  className="text-4xl font-bold text-white"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 0.2 + index * 0.1,
                  }}
                >
                  {stat.count}
                </motion.div>

              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
