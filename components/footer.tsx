"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-container">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <Link href="#home" className="font-bold text-xl text-primary">
              Sahan.dev
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Full Stack Engineer | MES Developer | Azure Cloud Enthusiast
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-4 mb-6"
          >
            <Link
              href="https://linkedin.com/in/sahanlakmal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/70 hover:bg-primary/10 p-2 rounded-full transition-colors"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            
            <Link
              href="https://github.com/SahanLakmalDev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary/70 hover:bg-primary/10 p-2 rounded-full transition-colors"
            >
              <Github className="h-5 w-5 text-primary" />
              <span className="sr-only">GitHub</span>
            </Link>
            
            <Link
              href="mailto:sahandeng65@gmail.com"
              className="bg-secondary/70 hover:bg-primary/10 p-2 rounded-full transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Sahan Lakmal. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}