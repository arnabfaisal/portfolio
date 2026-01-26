import React from 'react';
import { Button } from "./ui/moving-border";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function Projects(){
  const projects = [
    {
      title: "Doctor Finder",
      description: "A web application that allows users to search for doctors along with detailed consultation cost information. Built with a focus on user-friendly search and real-time data display.",
      tech: ["SQL", "React.js", "Node.js"],
      link: "https://github.com/arnabfaisal/DoctorFinder",
      image: "/demo.png", // Replace with your actual screenshot
      imageAlt: "Doctor Finder Web App Dashboard",
    },
    {
      title: "Escape from Drowning",
      description: "An endless runner-style game where players jump into a box to avoid rising water levels. Features smooth physics, scoring, and engaging gameplay mechanics.",
      tech: ["Python", "OpenGL"],
      link: "https://github.com/arnabfaisal/Escape-From-Drowning",
      image: "/demo.png", // Replace with gameplay screenshot
      imageAlt: "Escape from Drowning Game Screenshot",
    },
    {
      title: "Expense Tracker",
      description: "A full-stack expense tracking system for managing daily costs with easy categorization, reports, and data visualization. Backend-focused with robust API design.",
      tech: ["Django Rest Framework", "React"],
      link: "https://github.com/arnabfaisal/expense-tracker", // Corrected typo from CV
      image: "/demo.png", // Replace with your dashboard screenshot
      imageAlt: "Expense Tracker Dashboard",
    },
    {
      title: "CLI Expense Tracker (Python OOP)",
      description: "A command-line personal finance tracker built with object-oriented principles. Supports adding, viewing, editing expenses, and generating summaries directly in the terminal.",
      tech: ["Python (OOP)"],
      link: "https://github.com/arnabfaisal/cli-personal-finance", // Corrected/estimated repo name
      image: "/demo.png", // Replace with terminal screenshot
      imageAlt: "CLI Expense Tracker in Terminal",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 py-16 md:py-24" id="projects">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the key projects I've built, showcasing my skills in full-stack development, game programming, and backend systems.
          </p>
          <div className="mt-6 h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid - Responsive cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 md:h-56">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm font-medium">View on GitHub</p>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-base mt-2 line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <Badge key={i} className="bg-blue-50 text-blue-700 text-sm px-3 py-1">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button className="bg-white text-black border border-neutral-200 " asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    View on GitHub <ExternalLink size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Optional: More projects note */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            More projects and live demos available on my{" "}
            <a href="https://github.com/arnabfaisal" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
