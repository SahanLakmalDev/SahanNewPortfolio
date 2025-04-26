"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Laptop, Book, Server, Cloud } from "lucide-react";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <section 
      id="about" 
      className="section-padding bg-secondary/20"
      ref={ref}
    >
      <div className="max-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <h2 className="heading-lg text-center mb-3">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-card p-6 md:p-8 mb-8"
          >
            <p className="text-base md:text-lg mb-4">
              I&apos;m a <span className="text-primary font-semibold">motivated and detail-oriented Software Engineer</span> at H-Connect GBS with 1.5+ years of experience in full-stack development. I specialize in developing enterprise-grade MES (Manufacturing Execution System) solutions for the apparel industry.
            </p>
            <p className="text-base md:text-lg mb-4">
              My expertise includes <span className="text-primary font-semibold">Angular, ASP.NET, and SQL Server</span> with hands-on experience in Azure services and Agile methodologies. I&apos;m passionate about delivering scalable solutions and ensuring high-quality production support in SIT, UAT, and Live environments.
            </p>
            <p className="text-base md:text-lg">
              I&apos;m constantly learning and adapting to new technologies to improve my skills and deliver better solutions to complex problems.
            </p>
          </motion.div>

          <motion.h3 
            variants={itemVariants} 
            className="heading-sm text-center mb-6"
          >
            What I&apos;m currently learning 📚
          </motion.h3>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <motion.div
              variants={itemVariants}
              className="glass-card p-5 text-center hover:shadow-lg transition-all"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Advanced Cloud Architectures</h4>
              <p className="text-sm text-muted-foreground">Exploring serverless computing, containerization, and multi-cloud strategies</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card p-5 text-center hover:shadow-lg transition-all"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Next.js</h4>
              <p className="text-sm text-muted-foreground">Building modern, performant web applications with React and server components</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card p-5 text-center hover:shadow-lg transition-all"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Microservices</h4>
              <p className="text-sm text-muted-foreground">Designing distributed systems with enhanced scalability and resilience</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card p-5 text-center hover:shadow-lg transition-all"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">DevOps Practices</h4>
              <p className="text-sm text-muted-foreground">Implementing CI/CD pipelines and infrastructure as code for streamlined delivery</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}