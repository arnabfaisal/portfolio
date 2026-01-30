"use client"; // ← important if you're using Next.js App Router

import React from 'react';
import { motion } from 'framer-motion';

// Variants for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,     // delay between each child
      delayChildren: 0.2,        // small delay before first child starts
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const techItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30 py-14 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
        {/* Heading with simple entrance */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            About Me
          </h2>
          <div className="mt-4 h-1 w-16 md:w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Content – paragraphs + tech stack */}
        <motion.div
          className="space-y-6 md:space-y-10 text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.p variants={itemVariants}>
            Hi, I'm <span className="font-semibold text-foreground">Fahim Faisal Arnab</span> — a passionate software engineer from Dhaka, Bangladesh.
          </motion.p>

          <motion.p variants={itemVariants}>
            I love building clean, efficient, and user-focused applications. Currently, I'm focused on full-stack development with modern JavaScript/TypeScript ecosystems.
          </motion.p>

          <motion.p variants={itemVariants}>
            Over the years, I've worked with a variety of technologies and continue to explore new tools and patterns every day.
          </motion.p>

          {/* Tech stack */}
          <div className="pt-4">
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-5 md:mb-6"
              variants={itemVariants}
            >
              Technologies I work with regularly
            </motion.h3>

            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 text-sm sm:text-base md:text-lg"
              variants={containerVariants}
            >
              {[
                "Python",
                "TypeScript",
                "React.js / Node.js",
                "JavaScript (ES6+)",
                "Node.js",
                "Tailwind CSS",
                "Java",
                "PostgreSQL / MongoDB",
              ].map((tech) => (
                <motion.li
                  key={tech}
                  variants={techItemVariants}
                  className="flex items-center gap-3 bg-muted/40 px-4 py-3 md:px-5 md:py-4 rounded-xl border border-border hover:border-blue-500 transition-colors"
                >
                  <span className="text-blue-500">›</span>
                  <span className="text-purple-700">{tech}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Interests */}
          <motion.p
            className="italic text-muted-foreground/90 pt-4 md:pt-6"
            variants={itemVariants}
          >
            Outside of coding, I’m into tech gadgets, reading literary fiction, playing battle royale games, and occasionally creating content.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}