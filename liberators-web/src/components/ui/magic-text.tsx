"use client" 

import * as React from "react"
 
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
 
export interface MagicTextProps {
  text: string;
}
 
interface WordProps {
  children: string;
  progress: any;
  range: number[];
}
 
const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
 
  return (
    <span className="relative mr-2 text-3xl md:text-4xl font-semibold text-white">
      <span className="absolute opacity-20 text-white">{children}</span>
      <motion.span style={{ opacity: opacity }} className="text-white">{children}</motion.span>
    </span>
  );
};
 
export const MagicText: React.FC<MagicTextProps> = ({ text }) => {
  const container = useRef(null);
 
  const { scrollYProgress } = useScroll({
    target: container,
 
    offset: ["start 0.9", "start 0.25"],
  });
  text;
  const words = text.split(" ");
 
  return (
    <p ref={container} className="flex flex-wrap leading-relaxed p-4">
      {words.map((word, i) => {
        const start = i / words.length;
 
        const end = start + 1 / words.length;
 
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

