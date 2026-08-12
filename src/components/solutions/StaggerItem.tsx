"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface StaggerItemProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

export function StaggerItem({ children, index = 0, className }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
