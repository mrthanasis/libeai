"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Boxes, Rocket, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
  deliverableLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  accentColor: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Pattern Discovery',
    description: 'We study how your best work happens. Extract the patterns that make your business unique.',
    deliverable: 'Your company\'s intelligence patterns identified.',
    deliverableLabel: 'Deliverable',
    icon: Search,
    gradient: 'from-purple-600 to-pink-600',
    accentColor: '#a855f7'
  },
  {
    number: '02',
    title: 'Team Architecture',
    description: 'We design your cognitive team. Built for your function, trained on your patterns, coordinated for your workflows.',
    deliverable: '2-4 weeks to deployment.',
    deliverableLabel: 'Timeline',
    icon: Boxes,
    gradient: 'from-blue-600 to-cyan-600',
    accentColor: '#3b82f6'
  },
  {
    number: '03',
    title: 'Deployment',
    description: 'Your cognitive team goes live. Multiple entities working together, handling execution, learning continuously.',
    deliverable: 'Strategic capacity freed immediately.',
    deliverableLabel: 'Result',
    icon: Rocket,
    gradient: 'from-violet-600 to-purple-600',
    accentColor: '#8b5cf6'
  },
  {
    number: '04',
    title: 'Evolution',
    description: 'Teams learn from every task. Monthly measurement of growth and gains.',
    deliverable: 'Continuous improvement and optimization.',
    deliverableLabel: 'Ongoing',
    icon: TrendingUp,
    gradient: 'from-cyan-600 to-teal-600',
    accentColor: '#06b6d4'
  }
];

export function ProcessFlowSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-background via-purple-950/5 to-background py-12 md:py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium uppercase tracking-wider text-purple-300">
              Our Process
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
            How It Works
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From discovery to deployment in four transformative phases
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical Connection Line */}
          <div className="absolute left-8 md:left-16 top-24 bottom-24 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-cyan-500/50" />

          {/* Animated Progress Indicator */}
          <motion.div
            className="absolute left-8 md:left-16 top-24 w-px bg-gradient-to-b from-purple-500 to-blue-500"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isHovered = hoveredStep === index;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`absolute left-8 md:left-16 w-4 h-4 -ml-2 rounded-full border-4 border-background z-10`}
                    style={{ backgroundColor: step.accentColor }}
                    animate={{
                      scale: isHovered ? 1.5 : 1,
                      boxShadow: isHovered 
                        ? `0 0 20px ${step.accentColor}` 
                        : `0 0 0px ${step.accentColor}`
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Step Card */}
                  <motion.div
                    className="ml-20 md:ml-32 relative group"
                    animate={{
                      y: isHovered ? -8 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Gradient Border Container */}
                    <div className={`relative rounded-2xl bg-gradient-to-br ${step.gradient} p-[2px] shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}>
                      <div className="relative rounded-2xl bg-background/95 backdrop-blur-xl p-6 md:p-8">
                        {/* Header Row */}
                        <div className="flex items-start gap-6 mb-4">
                          {/* Animated Number */}
                          <motion.div
                            className={`text-6xl md:text-7xl font-black bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`}
                            animate={{
                              scale: isHovered ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.number}
                          </motion.div>

                          {/* Title & Icon */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <motion.div
                                className={`p-3 rounded-xl bg-gradient-to-br ${step.gradient} shadow-lg`}
                                animate={{
                                  rotate: isHovered ? 360 : 0,
                                  scale: isHovered ? 1.1 : 1,
                                }}
                                transition={{ 
                                  rotate: { duration: 0.6, ease: "easeInOut" },
                                  scale: { duration: 0.3 }
                                }}
                              >
                                <Icon className="w-6 h-6 text-white" />
                              </motion.div>
                              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                {step.title}
                              </h3>
                            </div>

                            {/* Description */}
                            <p className="text-base text-muted-foreground leading-relaxed mb-4">
                              {step.description}
                            </p>

                            {/* Deliverable Box */}
                            <motion.div
                              className={`relative overflow-hidden rounded-xl border-l-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4`}
                              style={{ borderColor: step.accentColor }}
                              animate={{
                                backgroundColor: isHovered 
                                  ? 'rgba(139, 92, 246, 0.15)' 
                                  : 'rgba(139, 92, 246, 0.05)'
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`text-xs font-bold uppercase tracking-wider`}
                                  style={{ color: step.accentColor }}
                                >
                                  {step.deliverableLabel}
                                </span>
                                <ArrowRight className="w-3 h-3" style={{ color: step.accentColor }} />
                              </div>
                              <p className="text-sm font-semibold text-foreground">
                                {step.deliverable}
                              </p>

                              {/* Animated Background Gradient */}
                              <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                  background: `radial-gradient(circle at center, ${step.accentColor}15 0%, transparent 70%)`
                                }}
                              />
                            </motion.div>
                          </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at center, ${step.accentColor}10 0%, transparent 70%)`
                          }}
                          animate={{
                            opacity: isHovered ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Floating Particles on Hover */}
                        {isHovered && (
                          <>
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: step.accentColor }}
                                initial={{
                                  x: '50%',
                                  y: '50%',
                                  opacity: 0,
                                }}
                                animate={{
                                  x: `${50 + (Math.random() - 0.5) * 100}%`,
                                  y: `${50 + (Math.random() - 0.5) * 100}%`,
                                  opacity: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 1.5 + Math.random(),
                                  repeat: Infinity,
                                  delay: i * 0.15,
                                }}
                              />
                            ))}
                          </>
                        )}
                      </div>
                    </div>

                    {/* Arrow to Next Step (not on last step) */}
                    {index < steps.length - 1 && (
                      <motion.div
                        className="absolute left-1/2 -bottom-6 -translate-x-1/2 z-20"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0.3, 0.8, 0.3],
                          y: [0, 5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-8 h-8 border-2 border-purple-500/50 rounded-full flex items-center justify-center bg-background/80 backdrop-blur-sm">
                          <ArrowRight className="w-4 h-4 text-purple-400 rotate-90" />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

