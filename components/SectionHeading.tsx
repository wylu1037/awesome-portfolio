import { motion } from "framer-motion";
import React from "react";

type SectionHeadingProps = Readonly<{ children: React.ReactNode }>;

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="text-center text-3xl font-medium capitalize mb-8"
    >
      {children}
    </motion.h2>
  );
}
