import React from 'react';
import { Button } from "./ui/moving-border";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function Projects(){
  const projects = [
    {
      title: "Doctor Finder",
      description: "A web application that allows users to search for doctors along with detailed consultation cost information.",
      tech: ["SQL", "React.js", "Node.js"],
      link: "https://github.com/arnabfaisal/DoctorFinder",
      image: "/demo.png",
      imageAlt: "Doctor Finder Web App Dashboard",
    },
    {
      title: "Escape from Drowning",
      description: "An endless runner-style game where players jump into a box to avoid rising water levels.",
      tech: ["Python", "OpenGL"],
      link: "https://github.com/arnabfaisal/Escape-From-Drowning",
      image: "/demo.png",
      imageAlt: "Escape from Drowning Game Screenshot",
    },
    {
      title: "Expense Tracker",
      description: "A full-stack expense tracking system with categorization, reports, and data visualization.",
      tech: ["Django Rest Framework", "React"],
      link: "https://github.com/arnabfaisal/expense-tracker",
      image: "/demo.png",
      imageAlt: "Expense Tracker Dashboard",
    },
    {
      title: "CLI Expense Tracker",
      description: "A command-line personal finance tracker built with Python OOP principles.",
      tech: ["Python (OOP)"],
      link: "https://github.com/arnabfaisal/cli-personal-finance",
      image: "/demo.png",
      imageAlt: "CLI Expense Tracker in Terminal",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-14 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            My Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I've built across web, backend, and games.
          </p>
          <div className="mt-6 h-1 w-20 md:w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-blue-500 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-40 sm:h-48 md:h-56">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl md:text-2xl font-bold">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base mt-2 line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <Badge key={i} className="bg-blue-50 text-blue-700 text-xs sm:text-sm px-3 py-1">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-white text-black border border-neutral-200" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    View on GitHub <ExternalLink size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

