"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Particles from "./particles";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/20 to-background pt-20"
    >
      <Particles />
      
      <div className="max-container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20"
            >
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQFk3nqmCM4sMA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690562009201?e=1750896000&v=beta&t=_lgmWd7KijEdGnXeZGum8Es9yGq6Bks8YBrCIM3Gfdg"
                alt="Sahan Lakmal"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          <h2 className="text-xl md:text-2xl text-primary font-medium mb-3">
            Hi, I&apos;m Sahan Lakmal 👋
          </h2>
          <h1 className="heading-xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300 dark:from-primary dark:to-purple-400">
            Full Stack Engineer
          </h1>
          <p className="subheading max-w-2xl mx-auto mb-6 text-lg md:text-xl">
            <span className="text-foreground font-medium">
              <Typewriter
                words={[
                  "Software Engineer",
                  "MES Developer",
                  "Azure Cloud Enthusiast",
                  "Full-stack Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="https://linkedin.com/in/sahanlakmal" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="https://github.com/SahanLakmalDev" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="mailto:sahandeng65@gmail.com">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="animate-bounce"
            >
              <Link href="#about">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ArrowDown className="h-5 w-5" />
                  <span className="sr-only">Scroll Down</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}