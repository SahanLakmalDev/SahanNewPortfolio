"use client";

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
};

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Generate initial particles
  const generateParticles = useCallback(() => {
    const particleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 15 : 30;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    setParticles(newParticles);
  }, []);

  // Update particle positions
  const updateParticles = useCallback(() => {
    setParticles((prevParticles) =>
      prevParticles.map((particle) => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;

        // Bounce off edges
        if (newX > 100 || newX < 0) {
          particle.speedX *= -1;
          newX = particle.x + particle.speedX;
        }
        if (newY > 100 || newY < 0) {
          particle.speedY *= -1;
          newY = particle.y + particle.speedY;
        }

        return {
          ...particle,
          x: newX,
          y: newY,
        };
      })
    );
  }, []);

  useEffect(() => {
    setMounted(true);
    generateParticles();

    const interval = setInterval(updateParticles, 50);
    return () => clearInterval(interval);
  }, [generateParticles, updateParticles]);

  if (!mounted) return null;

  return (
    <div className="particles">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${
            theme === "dark" ? "bg-primary/20" : "bg-primary/30"
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, Math.random() * 10 - 5],
            y: [0, Math.random() * 10 - 5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}