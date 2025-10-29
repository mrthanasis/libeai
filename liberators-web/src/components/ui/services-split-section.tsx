"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Network, ArrowRight, Sparkles, Users } from 'lucide-react';
import { Button } from './button';

interface Service {
  id: string;
  title: string;
  description: string;
  forWho: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  accentColor: string;
}

const services: Service[] = [
  {
    id: 'cognitive-team',
    title: 'Cognitive Team Development',
    description: 'We architect and deploy AI workforces - specialized teams that manage workflows, make decisions, coordinate work, and learn continuously. Includes intelligent automations as the execution layer.',
    forWho: 'Department transformation, strategic capacity multiplication.',
    icon: Brain,
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    accentColor: 'purple'
  },
  {
    id: 'ai-transformation',
    title: 'AI Transformation Partnership',
    description: 'We work with your leadership to develop AI strategy, identify high-impact opportunities, guide implementation, and enable your team to work effectively with cognitive systems.',
    forWho: 'Enterprise-wide transformation, multi-department coordination, team education.',
    icon: Network,
    gradient: 'from-blue-600 via-cyan-500 to-teal-500',
    accentColor: 'blue'
  }
];

export function ServicesSplitSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <div className="relative z-10 text-center pt-20 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium uppercase tracking-wider text-purple-300">
              Our Services
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
            Choose Your Path
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Two transformative approaches to multiply your strategic capacity
          </p>
        </motion.div>
      </div>

      {/* Split Services Container */}
      <div className="relative h-[70vh] md:h-[60vh] flex flex-col md:flex-row">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isHovered = hoveredService === service.id;
          const isOtherHovered = hoveredService && hoveredService !== service.id;

          return (
            <motion.div
              key={service.id}
              className="relative flex-1 cursor-pointer group overflow-hidden"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              animate={{
                flex: isHovered ? 1.2 : isOtherHovered ? 0.8 : 1,
              }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Animated mesh gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.1 : 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Radial gradient on hover */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at center, ${
                    service.accentColor === 'purple' 
                      ? 'rgba(168, 85, 247, 0.15)' 
                      : 'rgba(59, 130, 246, 0.15)'
                  } 0%, transparent 70%)`
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8
                }}
                transition={{ duration: 0.6 }}
              />

              {/* Border line between services (only on desktop) */}
              {index === 0 && (
                <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
              )}

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12">
                {/* Icon */}
                <motion.div
                  className={`mb-6 p-6 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-2xl`}
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? 5 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Icon className="w-12 h-12 text-white" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>

                {/* Description - only show on hover or mobile */}
                <AnimatePresence>
                  {(isHovered || isMobile) && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: 20, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="max-w-md text-center"
                    >
                      <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* For Who */}
                      <div className="flex items-start gap-2 text-sm text-muted-foreground/80 mb-6 bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                        <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <div className="text-left">
                          <span className="font-semibold">For: </span>
                          {service.forWho}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 shadow-lg group/btn`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover hint (only show when not hovered) */}
                <AnimatePresence>
                  {!isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground uppercase tracking-wider hidden md:block"
                    >
                      Hover to explore
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Floating particles effect on hover */}
              {isHovered && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full ${
                        service.accentColor === 'purple' ? 'bg-purple-400' : 'bg-blue-400'
                      }`}
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
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
      />
    </section>
  );
}

