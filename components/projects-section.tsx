'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Server,
  Layers,
  Monitor,
  X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 'mes-system',
    title: 'MES System',
    subtitle: 'Manufacturing Execution System',
    description:
      'A comprehensive real-time manufacturing execution system for the apparel industry that tracks production from cutting to packing.',
    image: 'https://images.pexels.com/photos/3912353/pexels-photo-3912353.jpeg',
    tags: ['Angular', 'ASP.NET Core', 'SQL Server', 'Azure', 'PWA'],
    features: [
      'Real-time production tracking with barcode scanning integration',
      'Performance analytics and KPI dashboards',
      'Offline-first PWA with background sync for factory floor usage',
      'Integration with existing ERP systems',
      'Advanced reporting and data visualization',
    ],
    technologies: {
      frontend: [
        'Angular 14',
        'TypeScript',
        'RxJS',
        'SCSS',
        'Angular Material',
      ],
      backend: ['ASP.NET Core', 'C#', 'Entity Framework Core'],
      cloud: ['Azure App Services', 'Azure Functions', 'Azure Logic Apps'],
      database: ['SQL Server', 'Azure SQL'],
      other: ['CI/CD pipelines', 'Azure DevOps', 'Power BI'],
    },
  },
  {
    id: 'edu-panel',
    title: 'Edu Panel v1.0.0',
    subtitle: 'Education Management System',
    description:
      'A comprehensive lecturer management system that supports key business operations and incorporates core business logic for educational institutions.',
    image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg',
    tags: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
    features: [
      'Faculty and staff management',
      'Course scheduling and assignment',
      'Attendance tracking and reporting',
      'Performance evaluation tools',
      'Document management system',
    ],
    technologies: {
      frontend: ['Angular 15', 'TypeScript', 'Bootstrap', 'Chart.js'],
      backend: ['Java', 'Spring Boot', 'Spring Security', 'JPA'],
      database: ['MySQL', 'Hibernate ORM'],
      other: ['Maven', 'Git', 'JWT Authentication'],
    },
    github: 'https://github.com/SahanLakmalDev',
  },
  {
    id: 'smart-pos',
    title: 'Smart POS System',
    subtitle: 'Point of Sale Application',
    description:
      'A basic POS application focused on database operations, including SQL joins and transaction handling.',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg',
    tags: ['Java', 'JavaFX', 'MySQL', 'UI/UX'],
    features: [
      'Inventory management',
      'Sales tracking and reporting',
      'Customer management',
      'Invoice generation',
      'Basic analytics dashboard',
    ],
    technologies: {
      frontend: ['JavaFX', 'CSS'],
      backend: ['Java', 'JDBC'],
      database: ['MySQL'],
      other: ['Maven', 'Git'],
    },
    github: 'https://github.com/SahanLakmalDev',
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
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

  const openProjectDetails = (project: any) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <h2 className="heading-lg text-center mb-3">Projects Gallery</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              A selection of the projects I&apos;ve worked on, showcasing my
              skills in full-stack development.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="glass-card overflow-hidden group"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-white font-bold text-lg">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm">{project.subtitle}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tech-pill bg-primary/10 text-primary text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openProjectDetails(project)}
                    >
                      View Details
                    </Button>
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                onClick={closeProjectDetails}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative h-56 sm:h-64 md:h-72">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full"
                      onClick={closeProjectDetails}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <h3 className="text-white font-bold text-2xl">
                        {selectedProject.title}
                      </h3>
                      <p className="text-white/80 text-lg">
                        {selectedProject.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="font-semibold text-lg mb-2">
                      Project Overview
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      {selectedProject.description}
                    </p>

                    <h4 className="font-semibold text-lg mb-2">Key Features</h4>
                    <ul className="mb-6 space-y-1">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-lg mb-2">
                      Technologies Used
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {selectedProject.technologies.frontend && (
                        <div className="glass-card p-4">
                          <div className="flex items-center mb-2">
                            <Monitor className="h-5 w-5 text-primary mr-2" />
                            <h5 className="font-medium">Frontend</h5>
                          </div>
                          <ul className="text-sm space-y-1">
                            {selectedProject.technologies.frontend.map(
                              (tech, index) => (
                                <li key={index} className="ml-7">
                                  • {tech}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {selectedProject.technologies.backend && (
                        <div className="glass-card p-4">
                          <div className="flex items-center mb-2">
                            <Server className="h-5 w-5 text-primary mr-2" />
                            <h5 className="font-medium">Backend</h5>
                          </div>
                          <ul className="text-sm space-y-1">
                            {selectedProject.technologies.backend.map(
                              (tech, index) => (
                                <li key={index} className="ml-7">
                                  • {tech}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {selectedProject.technologies.database && (
                        <div className="glass-card p-4">
                          <div className="flex items-center mb-2">
                            <Database className="h-5 w-5 text-primary mr-2" />
                            <h5 className="font-medium">Database</h5>
                          </div>
                          <ul className="text-sm space-y-1">
                            {selectedProject.technologies.database.map(
                              (tech, index) => (
                                <li key={index} className="ml-7">
                                  • {tech}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {selectedProject.technologies.cloud && (
                        <div className="glass-card p-4">
                          <div className="flex items-center mb-2">
                            <Layers className="h-5 w-5 text-primary mr-2" />
                            <h5 className="font-medium">
                              Cloud/Infrastructure
                            </h5>
                          </div>
                          <ul className="text-sm space-y-1">
                            {selectedProject.technologies.cloud.map(
                              (tech, index) => (
                                <li key={index} className="ml-7">
                                  • {tech}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {selectedProject.technologies.other && (
                        <div className="glass-card p-4">
                          <div className="flex items-center mb-2">
                            <Code className="h-5 w-5 text-primary mr-2" />
                            <h5 className="font-medium">Other Tools</h5>
                          </div>
                          <ul className="text-sm space-y-1">
                            {selectedProject.technologies.other.map(
                              (tech, index) => (
                                <li key={index} className="ml-7">
                                  • {tech}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                      {selectedProject.github && (
                        <Link
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </Button>
                        </Link>
                      )}
                      {selectedProject.liveDemo && (
                        <Link
                          href={selectedProject.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
