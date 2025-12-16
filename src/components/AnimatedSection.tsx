"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={animation}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
