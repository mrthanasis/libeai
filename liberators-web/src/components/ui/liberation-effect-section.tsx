'use client';

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Zap, Brain, Clock, TrendingUp, Handshake, Workflow, ArrowRight, Sparkles as SparklesIcon } from 'lucide-react';
import { ContainerScroll } from './container-scroll-animation';
import Image from 'next/image';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
  accentColor: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Strategic Capacity Multiplied",
    description: "AI handles the tedious, the manual, the draining. Your people focus on the creative, the strategic, the human.",
    gradient: "from-purple-500 to-pink-500",
    accentColor: "#a855f7"
  },
  {
    icon: Brain,
    title: "Compound Intelligence",
    description: "Teams that learn from every task. Month 1 they assist. Month 6 they anticipate.",
    gradient: "from-blue-500 to-cyan-500",
    accentColor: "#3b82f6"
  },
  {
    icon: Clock,
    title: "24/7 Coordination",
    description: "Always-on teams. Your humans maintain work-life balance while business runs continuously.",
    gradient: "from-purple-500 to-blue-500",
    accentColor: "#8b5cf6"
  },
  {
    icon: TrendingUp,
    title: "Measurable Transformation",
    description: "Track capacity freed, quality improved, velocity increased. Data-driven with clear ROI.",
    gradient: "from-pink-500 to-purple-500",
    accentColor: "#ec4899"
  },
  {
    icon: Handshake,
    title: "Enterprise Partnership",
    description: "Co-creation where we architect your cognitive infrastructure together.",
    gradient: "from-cyan-500 to-blue-500",
    accentColor: "#06b6d4"
  },
  {
    icon: Workflow,
    title: "Seamless Integration",
    description: "Plug into your existing workflows without disruption. Start small, scale fast, integrate everywhere.",
    gradient: "from-violet-500 to-purple-500",
    accentColor: "#8b5cf6"
  }
];

// Feature Card Component with 3D Effects
function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });
  
  const Icon = feature.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, type: "spring", bounce: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
      className="relative group cursor-pointer"
    >
      {/* Rotating Conic Gradient Border */}
      <motion.div
        className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
        style={{
          background: `conic-gradient(from 0deg, ${feature.accentColor}00, ${feature.accentColor}ff, ${feature.accentColor}00)`,
        }}
        animate={{
          rotate: isHovered ? 360 : 0,
        }}
        transition={{
          duration: 2.5,
          repeat: isHovered ? Infinity : 0,
          ease: "linear"
        }}
      />

      {/* Main Card with 3D Transform */}
      <motion.div
        className={`relative rounded-3xl bg-gradient-to-br ${feature.gradient} p-[2px]`}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        whileHover={{ scale: 1.05, z: 40 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Inner Content */}
        <div 
          className="relative rounded-3xl bg-gradient-to-br from-background/98 via-background/95 to-background/90 backdrop-blur-2xl p-8 h-full min-h-[280px] flex flex-col overflow-hidden"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Animated Radial Gradient */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${feature.accentColor}60 0%, transparent 70%)`
            }}
            animate={{
              scale: isHovered ? [1, 1.3, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
          />

          {/* Icon with Elevated 3D Effect */}
          <motion.div
            className={`relative inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 self-start`}
            style={{ 
              transform: "translateZ(50px)",
              boxShadow: isHovered ? `0 25px 70px ${feature.accentColor}80` : `0 10px 40px ${feature.accentColor}40`
            }}
            animate={{
              rotate: isHovered ? [0, 5, -5, 0] : 0,
              scale: isHovered ? 1.2 : 1,
              y: isHovered ? -10 : 0,
            }}
            transition={{ 
              rotate: {
                duration: 0.6,
                ease: "easeInOut",
              },
              scale: {
                type: "spring",
                stiffness: 300,
                damping: 20
              },
              y: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
          >
            <Icon className="w-9 h-9 text-white" />
            
            {/* Pulsing Glow Ring */}
            {isHovered && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: feature.accentColor, opacity: 0.3 }}
                  animate={{
                    scale: [1, 1.4, 1.6],
                    opacity: [0.3, 0.1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: feature.accentColor, opacity: 0.4 }}
                  animate={{
                    scale: [1, 1.3, 1.5],
                    opacity: [0.4, 0.2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.3
                  }}
                />
              </>
            )}
          </motion.div>

          {/* Title with Dynamic Gradient */}
          <motion.h3 
            className="text-2xl md:text-2xl font-black mb-4 leading-tight relative"
            style={{ 
              transform: "translateZ(30px)",
              backgroundImage: isHovered 
                ? `linear-gradient(135deg, ${feature.accentColor} 0%, white 100%)`
                : 'linear-gradient(135deg, white 0%, white 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%',
            }}
            transition={{ duration: 1 }}
          >
            {feature.title}
          </motion.h3>

          {/* Description with Fade Effect */}
          <motion.p 
            className="text-base text-muted-foreground leading-relaxed flex-1"
            style={{ transform: "translateZ(20px)" }}
            animate={{
              color: isHovered ? '#e5e5e5' : '#a1a1aa',
            }}
            transition={{ duration: 0.3 }}
          >
            {feature.description}
          </motion.p>

          {/* Hover Arrow Indicator */}
          <motion.div
            className="mt-6 pt-4 border-t border-border/30 flex items-center gap-2"
            style={{ 
              transform: "translateZ(30px)",
              color: feature.accentColor
            }}
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: isHovered ? 1 : 0.5,
            }}
          >
            <span className="text-sm font-bold uppercase tracking-wider">
              Learn More
            </span>
            <motion.div
              animate={{
                x: isHovered ? [0, 6, 0] : 0,
              }}
              transition={{
                duration: 1,
                repeat: isHovered ? Infinity : 0,
              }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Particle Explosion on Hover */}
          <AnimatePresence>
            {isHovered && (
              <>
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{ 
                      backgroundColor: feature.accentColor,
                      left: '50%',
                      top: '30%',
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 2, 0],
                      x: [0, (Math.random() - 0.5) * 250],
                      y: [0, (Math.random() - 0.5) * 250],
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 2 + Math.random() * 0.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          {/* Corner Accents */}
          <motion.div
            className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 rounded-tr-3xl"
            style={{ borderColor: feature.accentColor }}
            animate={{
              opacity: isHovered ? 1 : 0.3,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 rounded-bl-3xl"
            style={{ borderColor: feature.accentColor }}
            animate={{
              opacity: isHovered ? 1 : 0.3,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Scan Line Effect */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ y: '-100%' }}
              animate={{ y: '200%' }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div 
                className="h-[2px] w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${feature.accentColor}80, transparent)`
                }}
              />
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Outer Mega Glow */}
      <motion.div
        className="absolute -inset-3 rounded-3xl opacity-0 blur-3xl -z-10"
        style={{
          background: `radial-gradient(circle, ${feature.accentColor}80 0%, ${feature.accentColor}30 40%, transparent 70%)`
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

export function LiberationEffectSection() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-gradient-to-b from-background via-purple-950/10 to-background overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Workflow Diagram Visual with Scroll Animation */}
      <div className="relative -mt-8 mb-0">
        <ContainerScroll
          titleComponent={
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cognitive Team Architecture
              </h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Memory → Planning → Execution flow
              </p>
            </div>
          }
        >
          <Image 
            src="/images/Data-Entry.png" 
            alt="Cognitive Team Workflow Architecture"
            width={1400}
            height={720}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Animated Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-6 py-3 backdrop-blur-sm mb-8 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <span className="relative flex h-2.5 w-2.5 z-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
            </span>
            <span className="text-sm font-bold uppercase tracking-wider text-purple-300 relative z-10">
              Why Choose Us
            </span>
          </motion.div>

          {/* Title with Split Animation */}
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              THE LIBERATION
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              EFFECT
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Six transformative pillars that redefine how your organization operates
          </motion.p>

          {/* Decorative Line */}
          <motion.div 
            className="mt-8 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Features Grid with 3D Perspective */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          style={{ perspective: 2000 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        />
      </div>
    </section>
  );
}

