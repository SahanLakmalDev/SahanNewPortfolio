"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define tech stack categories
const techCategories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "Angular", level: 90 },
      { name: "Angular PWA", level: 85 },
      { name: "React.js", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "SCSS", level: 85 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "C#", level: 90 },
      { name: "ASP.NET Web API", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "Java", level: 80 },
      { name: "Spring Boot", level: 70 },
      { name: "REST API", level: 85 },
    ],
  },
  {
    id: "database",
    label: "Databases",
    skills: [
      { name: "MS SQL Server", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 65 },
      { name: "Entity Framework", level: 80 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    skills: [
      { name: "Azure App Services", level: 80 },
      { name: "Azure Logic Apps", level: 75 },
      { name: "Azure Functions", level: 70 },
      { name: "Azure Boards", level: 85 },
      { name: "CI/CD", level: 70 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Postman", level: 90 },
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Visual Studio", level: 85 },
      { name: "IntelliJ IDEA", level: 80 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    id: "data",
    label: "Data & Reporting",
    skills: [
      { name: "Power BI", level: 80 },
      { name: "Microsoft Fabric", level: 75 },
      { name: "Data Visualization", level: 75 },
      { name: "SQL Queries", level: 85 },
    ],
  },
];

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h2 className="heading-lg text-center mb-3">Tech Stack</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              A showcase of the technologies I work with on a daily basis. I&apos;m always eager to learn and expand my skill set with new tools and frameworks.
            </p>
          </motion.div>

          <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
            <motion.div variants={itemVariants} className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {techCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-sm md:text-base"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            {techCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0 focus-visible:outline-none focus-visible:ring-0"
              >
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate={activeTab === category.id ? "visible" : "hidden"}
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="glass-card p-4 hover:shadow-lg transition-all"
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-center mb-2">
                        <h4 className="font-medium">{skill.name}</h4>
                        <div className="w-full bg-secondary/50 rounded-full h-2 mt-2">
                          <motion.div
                            className="bg-primary h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.1 * index }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {skill.level}%
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}