"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CalendarClock, GraduationCap, Award, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function EducationSection() {
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
    <section id="education" className="section-padding" ref={ref}>
      <div className="max-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h2 className="heading-lg text-center mb-3">Education & Certifications</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <h3 className="heading-sm mb-6">Academic Education</h3>
              
              <motion.div
                className="glass-card p-6 hover:shadow-lg transition-all mb-6"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Bachelor of Science in Engineering (Hons)</h4>
                    <p className="text-primary font-medium">University of Moratuwa, Sri Lanka</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1 mb-2">
                      <CalendarClock className="h-4 w-4 mr-1" />
                      <span>Nov 2016 - Jul 2021</span>
                    </div>
                    <p className="text-sm mb-2">Overall GPA: 3.60 / 4.20 (Second Class Upper Division)</p>
                    <div className="bg-secondary/50 p-3 rounded-md text-sm">
                      <p className="font-medium mb-1">Key Achievements:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Final year project: Smart Manufacturing Solutions</li>
                        <li>Academic scholarship recipient for outstanding performance</li>
                        <li>Active member of IEEE Student Branch</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="glass-card p-6 hover:shadow-lg transition-all"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">G.C.E. Advanced Level Examination</h4>
                    <p className="text-primary font-medium">Bandaranayake College, Gampaha</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1 mb-2">
                      <CalendarClock className="h-4 w-4 mr-1" />
                      <span>2015</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                      <div className="bg-secondary/50 p-2 rounded-md">
                        <span className="font-medium">Mathematics:</span> A
                      </div>
                      <div className="bg-secondary/50 p-2 rounded-md">
                        <span className="font-medium">Chemistry:</span> A
                      </div>
                      <div className="bg-secondary/50 p-2 rounded-md">
                        <span className="font-medium">Physics:</span> B
                      </div>
                      <div className="bg-secondary/50 p-2 rounded-md">
                        <span className="font-medium">Z-score:</span> 2.0013
                      </div>
                    </div>
                    <p className="text-sm">
                      <span className="font-medium">District Rank:</span> 65
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="heading-sm mb-6">Certifications & Courses</h3>
              
              <motion.div
                className="glass-card p-6 hover:shadow-lg transition-all mb-6"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-lg">Angular Basic</h4>
                      <Link href="https://www.hackerrank.com/certificates/iframe/ee6a131350b8" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                      </Link>
                    </div>
                    <p className="text-primary font-medium">HackerRank</p>
                    <p className="text-sm text-muted-foreground mt-2 mb-2">
                      Core concepts of Angular including components, modules, services, and dependency injection.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <span className="bg-secondary/50 px-2 py-1 rounded-full">Angular</span>
                      <span className="bg-secondary/50 px-2 py-1 rounded-full ml-2">TypeScript</span>
                      <span className="bg-secondary/50 px-2 py-1 rounded-full ml-2">Frontend</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="glass-card p-6 hover:shadow-lg transition-all mb-6"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-lg">Python for Beginners</h4>
                      <Link href="https://open.uom.lk/verify" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                      </Link>
                    </div>
                    <p className="text-primary font-medium">CODL, University of Moratuwa</p>
                    <p className="text-sm text-muted-foreground mt-2 mb-2">
                      Fundamentals of Python programming including data structures, control flow, and basic algorithms.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <span className="bg-secondary/50 px-2 py-1 rounded-full">Python</span>
                      <span className="bg-secondary/50 px-2 py-1 rounded-full ml-2">Programming</span>
                      <span className="bg-secondary/50 px-2 py-1 rounded-full ml-2">Algorithms</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="glass-card p-6 hover:shadow-lg transition-all"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-lg">Web Design for Beginners</h4>
                      <Link href="https://open.uom.lk/verify" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                      </Link>
                    </div>
                    <p className="text-primary font-medium">CODL, University of Moratuwa</p>
                    <p className="text-sm text-muted-foreground mt-2 mb-2">
                      Fundamental concepts of web design including HTML, CSS, responsive design principles, and user experience.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <span className="bg-secondary/50 px-2 py-1 rounded-full">HTML</span>
                      <span className="bg-secondary/50 px-2 py-1 rounded-full ml-2">CSS</span>
                      <span className="bg-secondary/50 px-2 py-1 rounded-full ml-2">UI/UX</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}