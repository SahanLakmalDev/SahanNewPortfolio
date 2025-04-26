"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BadgeCheck, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "H-Connect GBS (Hidramani Group)",
    period: "Jan 2025 - Present",
    location: "Colombo",
    responsibilities: [
      "Designed and developed a Manufacturing Execution System (MES) for real-time apparel production tracking.",
      "Built responsive web and Progressive Web Apps (PWAs) using Angular (v14+) for frontend and ASP.NET Core Web API for backend, enhancing user experience and offline accessibility.",
      "Deployed scalable backend services on Microsoft Azure, including App Services, Functions, and Logic Apps.",
      "Managed sprint planning, task tracking, and CI/CD pipelines via Azure Boards, ensuring on-time delivery.",
      "Integrated Power BI dashboards with Microsoft Fabric to visualize production data to enabling data-driven decision-making for stakeholders.",
      "Provided L2/L3 support across SIT, UAT, and Live environments, resolving 95% of critical bugs within SLA and maintaining 99.9% system uptime."
    ],
    promoted: "Promoted from Associate Software Engineer, Feb 2024 - Dec 2024"
  },
  {
    title: "Software Engineer Trainee",
    company: "Institute of Software Engineering (IJSE)",
    period: "July 2023 - Jan 2024",
    location: "Panadura",
    responsibilities: [
      "Learned fundamentals of full-stack development including backend (Java, Spring Boot), frontend (Angular, React), and database management (MySQL).",
      "Gained experience in software architecture, development practices, and project lifecycle.",
      "Edu Panel V1.0.0: A comprehensive lecturer management system that supports key business operations and incorporates core business logic for educational institutions.",
      "Smart POS System V1.0.0: A basic POS application focused on database operations, including SQL joins and transaction handling."
    ]
  },
  {
    title: "Design Engineer",
    company: "K.D.A. Weerasinghe (Pvt) Ltd",
    period: "Nov 2021 - Mar 2023",
    location: "Horana",
    responsibilities: [
      "Analyzed product or service requirements and developed actionable solutions to design challenges.",
      "Contributed to milestone achievement through strict adherence to deadlines and specifications.",
      "Assisted with engineering change order documentation and revised drawings."
    ]
  }
];

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="section-padding bg-secondary/20" ref={ref}>
      <div className="max-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h2 className="heading-lg text-center mb-3">Professional Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="relative mt-10">
            <div className="timeline-line" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative mb-16 md:mb-24"
                variants={itemVariants}
              >
                <div className="timeline-dot" />
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                  <motion.div
                    className="glass-card p-6 md:p-8"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="heading-sm mb-0">{exp.title}</h3>
                    </div>
                    
                    <h4 className="text-primary font-medium mb-2">{exp.company}</h4>
                    
                    <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    {exp.promoted && (
                      <div className="bg-primary/10 border border-primary/30 text-primary rounded-md px-3 py-2 mb-4 text-sm">
                        {exp.promoted}
                      </div>
                    )}
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, rIndex) => (
                        <li key={rIndex} className="flex">
                          <BadgeCheck className="h-5 w-5 mr-2 flex-shrink-0 text-primary mt-0.5" />
                          <span className="text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}