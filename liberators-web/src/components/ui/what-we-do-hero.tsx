"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Zap, Users, TrendingUp } from 'lucide-react';

const highlights = [
  { text: 'Marketing teams', icon: Sparkles },
  { text: 'Sales teams', icon: Zap },
  { text: 'Operations teams', icon: Users },
  { text: 'Custom teams', icon: TrendingUp }
];

export function WhatWeDoHero() {
  const [typedText, setTypedText] = useState('We build AI workforces for enterprise teams.');
  const [mounted, setMounted] = useState(false);
  const fullText = 'We build AI workforces for enterprise teams.';
  
  useEffect(() => {
    setMounted(true);
    setTypedText(''); // Reset after mount
    
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-950/20 to-background overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-24">
        {/* Main Content */}
        <div className="text-center space-y-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium uppercase tracking-wider text-purple-300">
              What We Do
            </span>
          </motion.div>

          {/* Main Headline with Typing Effect */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                {typedText}
                <motion.span
                  className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-purple-400 ml-2 align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Specialized cognitive teams - multiple AI entities working together, 
              trained on your business patterns, coordinating like colleagues.
            </motion.p>
          </div>

          {/* Team Types - Animated Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                  }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-[1px] backdrop-blur-sm">
                    <div className="relative rounded-xl bg-background/80 backdrop-blur-xl p-4 md:p-6">
                      {/* Icon */}
                      <motion.div
                        className="inline-flex p-3 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 mb-3 mx-auto"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      
                      {/* Text */}
                      <p className="text-sm md:text-base font-semibold text-foreground">
                        {item.text}
                      </p>

                      {/* Hover Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-300 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Outer Glow */}
                  <motion.div
                    className="absolute -inset-1 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300 -z-10"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Integration Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-card/30 backdrop-blur-sm shadow-2xl group">
              <img 
                src="/images/image-31.webp" 
                alt="AI Workforce Integration"
                className="w-full h-auto opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-102"
              />
              {/* Fallback gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 -z-10" />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

