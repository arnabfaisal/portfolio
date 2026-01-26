import React from 'react';
import { Button } from "./ui/moving-border"; // optional, if you want a contact button

export function About(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-6 md:px-8">
        {/* Section heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            About Me
          </h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main content - single column */}
        <div className="space-y-8 md:space-y-10 text-lg md:text-xl leading-relaxed text-muted-foreground">
          <p>
            Hi, I'm <span className="font-semibold text-foreground">Fahim Faisal Arnab</span> — a passionate software engineer from Dhaka, Bangladesh.
          </p>

          <p>
            I love building clean, efficient, and user-focused applications. Currently, I'm focused on full-stack development with modern JavaScript/TypeScript ecosystems. I enjoy turning ideas into real products and automating things to make life easier.
          </p>

          <p>
            Over the years, I've worked with a variety of technologies and continue to explore new tools and patterns every day.
          </p>

          {/* Tech stack - nice grid/list */}
          <div className="pt-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Technologies I work with regularly
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-base md:text-lg">
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
                <li
                  key={tech}
                  className="flex items-center gap-3 bg-muted/40 px-5 py-4 rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <span className="text-primary">›</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal interests */}
          <div className="pt-6">
            <p className="italic text-muted-foreground/90">
              Outside of coding, I’m into tech gadgets, reading literary fiction, playing battle royale games (way too much), and occasionally creating content about development and life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
