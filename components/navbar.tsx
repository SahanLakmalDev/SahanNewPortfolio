"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ui/theme-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "GitHub", href: "#github" },
  { title: "Education", href: "#education" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.7)"]
  );
  
  const navBackgroundDark = useTransform(
    scrollY,
    [0, 100],
    ["rgba(34, 19, 51, 0)", "rgba(34, 19, 51, 0.85)"]
  );
  
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.1)"]
  );
  
  const navBorderDark = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
  );
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass-nav dark:!border-border/30"
      style={{
        backgroundColor: navBackground,
        borderColor: navBorder,
        "--nav-bg-dark": navBackgroundDark,
        "--nav-border-dark": navBorderDark,
      } as any}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="#home" className="font-bold text-xl text-primary">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Sahan.dev
            </motion.div>
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link, i) => (
              <motion.div 
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link 
                  href={link.href}
                  className={`px-3 py-2 rounded-md transition-colors relative ${
                    activeSection === link.href.substring(1)
                      ? "text-primary font-medium"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  onClick={() => setActiveSection(link.href.substring(1))}
                >
                  {link.title}
                  {activeSection === link.href.substring(1) && (
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ThemeToggle />
            </motion.div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background/95 backdrop-blur-sm dark:bg-card/95 border-t border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.href.substring(1)
                    ? "text-primary bg-secondary/50"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary/20"
                }`}
                onClick={() => {
                  setActiveSection(link.href.substring(1));
                  setMobileMenuOpen(false);
                }}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}