"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './button';

interface Metric {
  label: string;
  before: string;
  after: string;
  improvement: string;
}

interface TransformationCase {
  id: string;
  industry: string;
  icon: React.ComponentType<{ className?: string }>;
  challenge: string;
  solution: string;
  metrics: Metric[];
  outcome: string;
  gradient: string;
}

const transformations: TransformationCase[] = [
  {
    id: 'marketing',
    industry: 'B2B Marketing Agency',
    icon: Briefcase,
    challenge: 'Marketing manager trapped in execution - 70% time on briefs, content, reports.',
    solution: '5-entity marketing team deployed.',
    metrics: [
      { label: 'Strategic Time', before: '20%', after: '70%', improvement: '+250%' },
      { label: 'Execution Time', before: '70%', after: '20%', improvement: '-71%' },
      { label: 'Campaign Capacity', before: '1x', after: '3x', improvement: '+200%' },
      { label: 'Quality Consistency', before: '~60%', after: '95%+', improvement: '+58%' }
    ],
    outcome: 'Marketing manager now does creative direction and strategy. Cognitive team handles execution.',
    gradient: 'from-purple-600 via-pink-500 to-rose-500'
  },
  {
    id: 'sales',
    industry: 'Enterprise Sales Organization',
    icon: Users,
    challenge: 'Sales team spending 40% time on research, qualification, admin instead of selling.',
    solution: '4-entity sales intelligence team deployed.',
    metrics: [
      { label: 'Selling Time', before: '30%', after: '70%', improvement: '+133%' },
      { label: 'Pipeline Velocity', before: '1x', after: '3x', improvement: '+200%' },
      { label: 'Win Rate', before: 'Baseline', after: '+25%', improvement: '+25%' },
      { label: 'Admin Time', before: '40%', after: '10%', improvement: '-75%' }
    ],
    outcome: 'Sales reps focused on relationships and closing. Cognitive team handles intelligence work.',
    gradient: 'from-blue-600 via-cyan-500 to-teal-500'
  },
  {
    id: 'operations',
    industry: 'Operations-Heavy Business',
    icon: TrendingUp,
    challenge: 'Operations team buried in coordination - emails, handoffs, status updates, manual data.',
    solution: '4-entity operations team deployed.',
    metrics: [
      { label: 'Strategic Capacity', before: '1x', after: '4x', improvement: '+300%' },
      { label: 'Process Delays', before: 'Baseline', after: '-80%', improvement: '-80%' },
      { label: 'Manual Work', before: '100%', after: '0%', improvement: '-100%' },
      { label: 'Team Focus', before: 'Execution', after: 'Strategy', improvement: '∞' }
    ],
    outcome: 'Operations team optimizes systems. Cognitive team orchestrates execution.',
    gradient: 'from-violet-600 via-purple-500 to-indigo-500'
  }
];

export function TransformationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const currentCase = transformations[currentIndex];

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return transformations.length - 1;
      if (nextIndex >= transformations.length) return 0;
      return nextIndex;
    });
  };

  const Icon = currentCase.icon;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full min-h-screen bg-background py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 backdrop-blur-sm mb-6">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium uppercase tracking-wider text-purple-300">
              Transformation Examples
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
            Real Results, Real Impact
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how cognitive teams multiplied strategic capacity across industries
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-500/60 hover:bg-background transition-all group"
            aria-label="Previous transformation"
          >
            <ChevronLeft className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
          </button>

          <button
            onClick={() => navigate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm border-2 border-purple-500/30 hover:border-purple-500/60 hover:bg-background transition-all group"
            aria-label="Next transformation"
          >
            <ChevronRight className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
          </button>

          {/* Carousel Content */}
          <div className="relative min-h-[600px] md:min-h-[500px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentCase.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className={`relative rounded-3xl bg-gradient-to-br ${currentCase.gradient} p-[2px] shadow-2xl`}>
                  <div className="relative rounded-3xl bg-background/95 backdrop-blur-xl p-8 md:p-12">
                    {/* Industry Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${currentCase.gradient}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                          {currentCase.industry}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Case Study {currentIndex + 1} of {transformations.length}
                        </p>
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400">
                          Challenge
                        </h4>
                        <p className="text-foreground leading-relaxed">
                          {currentCase.challenge}
                        </p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400">
                          Solution
                        </h4>
                        <p className="text-foreground leading-relaxed font-semibold">
                          {currentCase.solution}
                        </p>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="mb-8">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-4">
                        Results
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {currentCase.metrics.map((metric, index) => (
                          <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                          >
                            <div className="relative rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 p-4 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                              <div className="text-xs text-muted-foreground mb-2">
                                {metric.label}
                              </div>
                              
                              {/* Before/After */}
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-sm text-muted-foreground line-through">
                                  {metric.before}
                                </span>
                                <ArrowRight className="w-3 h-3 text-purple-400" />
                                <span className="text-lg font-bold text-foreground">
                                  {metric.after}
                                </span>
                              </div>

                              {/* Improvement Badge */}
                              <div className={`inline-block text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${currentCase.gradient} text-white`}>
                                {metric.improvement}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className="text-foreground leading-relaxed font-medium">
                        <span className="text-purple-400 font-bold">Outcome: </span>
                        {currentCase.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-purple-500'
                    : 'w-2 bg-purple-500/30 hover:bg-purple-500/50'
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/30 px-8"
          >
            Start Your Transformation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

