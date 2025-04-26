"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, ExternalLink, Code } from "lucide-react";

// Sample repositories - in a real site, these would be fetched from GitHub API
const pinnedRepos = [
  {
    name: "MES-System",
    description: "A manufacturing execution system built with Angular and ASP.NET Core",
    language: "TypeScript",
    stars: 32,
    forks: 12,
    url: "https://github.com/SahanLakmalDev"
  },
  {
    name: "Edu-Panel",
    description: "Education management system with Spring Boot and Angular",
    language: "Java",
    stars: 24,
    forks: 8,
    url: "https://github.com/SahanLakmalDev"
  },
  {
    name: "Smart-POS",
    description: "Point of Sale system developed with JavaFX and MySQL",
    language: "Java",
    stars: 18,
    forks: 5,
    url: "https://github.com/SahanLakmalDev"
  },
  {
    name: "Portfolio-Website",
    description: "Personal portfolio website built with Next.js and Tailwind CSS",
    language: "TypeScript",
    stars: 15,
    forks: 3,
    url: "https://github.com/SahanLakmalDev"
  }
];

// Language color mapping with proper TypeScript indexing
const languageColors: { [key: string]: string } = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Java: "bg-red-500",
  CSharp: "bg-green-600",
  CSS: "bg-purple-500",
  HTML: "bg-orange-500",
  Other: "bg-gray-500" // Fallback color for unknown languages
};

export default function GitHubSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (!mounted) return null;

  return (
    <section id="github" className="section-padding bg-secondary/20" ref={ref}>
      <div className="max-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h2 className="heading-lg text-center mb-3">My Open-Source Journey 🚀</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Tracking my contributions to the open-source community and personal projects over time.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-card p-6 md:p-8 mb-10"
          >
            <h3 className="heading-sm mb-4">Contribution Graph</h3>
            <div className="flex justify-center">
              <GitHubCalendar
                username="SahanLakmalDev"
                colorScheme={theme === 'dark' ? 'dark' : 'light'}
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                hideColorLegend={false}
                hideMonthLabels={false}
                labels={{
                  totalCount: '{{count}} contributions in the last year',
                }}
              />
            </div>
            <div className="text-center mt-4">
              <Link href="https://github.com/SahanLakmalDev" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  Visit My GitHub Profile
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="heading-sm text-center mb-6">Pinned Repositories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pinnedRepos.map((repo) => (
                <motion.div
                  key={repo.name}
                  className="glass-card p-5 hover:shadow-lg transition-all"
                  whileHover={{ y: -5 }}
                  variants={itemVariants}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-medium text-lg">{repo.name}</h4>
                    </div>
                    <Link href={repo.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2 mb-4 line-clamp-2">
                    {repo.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className={`inline-block w-3 h-3 rounded-full ${languageColors[repo.language] || languageColors.Other} mr-1`}></span>
                      <span className="text-xs text-muted-foreground">{repo.language}</span>
                    </div>
                    <div className="flex space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center">
                        <GitFork className="h-3 w-3 mr-1" />
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}