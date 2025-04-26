"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";

// Sample testimonials - in a real site, these would come from a database or CMS
const testimonials = [
  {
    id: 1,
    text: "Sahan is an exceptional developer with strong technical skills and a great eye for detail. His contributions to our MES system have significantly improved our production tracking capabilities.",
    author: "Prasad Waduge",
    position: "CEO / Senior Lecturer, IJSE",
    contact: "prasad@ijse.lk | +94 772 252 985"
  },
  {
    id: 2,
    text: "I had the pleasure of mentoring Sahan during his engineering studies. His ability to quickly grasp complex concepts and apply them practically sets him apart as a software engineer.",
    author: "Lt. Cmdr. A.A.T.D Priyashan",
    position: "Lecturer, Department of Mechanical Engineering, KDU",
    contact: "+94766812435"
  }
];

export default function TestimonialsSection() {
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
    <section id="testimonials" className="section-padding bg-secondary/20" ref={ref}>
      <div className="max-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h2 className="heading-lg text-center mb-3">Testimonials</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              What others have to say about my work and collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="glass-card p-6 md:p-8 relative"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
                <p className="text-base md:text-lg italic mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex flex-col">
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-primary text-sm">{testimonial.position}</p>
                  <p className="text-muted-foreground text-xs mt-1">{testimonial.contact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}