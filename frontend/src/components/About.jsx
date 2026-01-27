import React from 'react';

export function About(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30 py-14 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 md:px-8">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            About Me
          </h2>
          <div className="mt-4 h-1 w-16 md:w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 md:space-y-10 text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground">
          <p>
            Hi, I'm <span className="font-semibold text-foreground">Fahim Faisal Arnab</span> — a passionate software engineer from Dhaka, Bangladesh.
          </p>

          <p>
            I love building clean, efficient, and user-focused applications. Currently, I'm focused on full-stack development with modern JavaScript/TypeScript ecosystems.
          </p>

          <p>
            Over the years, I've worked with a variety of technologies and continue to explore new tools and patterns every day.
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-5 md:mb-6">
              Technologies I work with regularly
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 text-sm sm:text-base md:text-lg">
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
                  className="flex items-center gap-3 bg-muted/40 px-4 py-3 md:px-5 md:py-4 rounded-xl border border-border hover:border-blue-500 transition-colors"
                >
                  <span className="text-blue-500">›</span>
                  <span className="text-purple-700">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interests */}
          <div className="pt-4 md:pt-6">
            <p className="italic text-muted-foreground/90">
              Outside of coding, I’m into tech gadgets, reading literary fiction, playing battle royale games, and occasionally creating content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
