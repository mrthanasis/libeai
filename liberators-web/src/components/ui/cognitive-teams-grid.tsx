"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Megaphone, Users, Headphones, Calculator, UserCheck, Boxes, Sparkles, ChevronRight, Zap } from 'lucide-react';

interface CognitiveTeam {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  tasks: string[];
  accentColor: string;
}

const teams: CognitiveTeam[] = [
  {
    id: 'marketing',
    name: 'Marketing Team',
    icon: Megaphone,
    gradient: 'from-purple-600 via-pink-500 to-rose-500',
    tasks: [
      'Campaign strategy',
      'Content creation',
      'Brand consistency',
      'Performance analysis',
      'Workflow coordination'
    ],
    accentColor: '#a855f7'
  },
  {
    id: 'sales',
    name: 'Sales Intelligence Team',
    icon: Users,
    gradient: 'from-blue-600 via-cyan-500 to-sky-500',
    tasks: [
      'Lead research',
      'Qualification',
      'Outreach coordination',
      'Follow-up management',
      'Pipeline nurturing'
    ],
    accentColor: '#3b82f6'
  },
  {
    id: 'customer-success',
    name: 'Customer Success Team',
    icon: Headphones,
    gradient: 'from-emerald-600 via-teal-500 to-cyan-500',
    tasks: [
      'Inquiry categorization',
      'Ticket creation',
      '24/7 response',
      'Escalation management',
      'Satisfaction tracking'
    ],
    accentColor: '#10b981'
  },
  {
    id: 'finance',
    name: 'Finance & Operations Team',
    icon: Calculator,
    gradient: 'from-amber-600 via-orange-500 to-red-500',
    tasks: [
      'Invoice processing',
      'Expense management',
      'Reporting',
      'Data entry',
      'Reconciliation'
    ],
    accentColor: '#f59e0b'
  },
  {
    id: 'hr',
    name: 'HR & Talent Team',
    icon: UserCheck,
    gradient: 'from-violet-600 via-purple-500 to-fuchsia-500',
    tasks: [
      'Resume screening',
      'Candidate scoring',
      'Interview scheduling',
      'Onboarding coordination'
    ],
    accentColor: '#8b5cf6'
  },
  {
    id: 'operations',
    name: 'Operations & Logistics Team',
    icon: Boxes,
    gradient: 'from-indigo-600 via-blue-500 to-cyan-500',
    tasks: [
      'Process coordination',
      'Data handling',
      'Status tracking',
      'Workflow orchestration',
      'Exception handling'
    ],
    accentColor: '#6366f1'
  }
];

// Team Card Component with 3D Effects
function TeamCard({ team, index }: { team: CognitiveTeam; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 });
  
  const Icon = team.icon;

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
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
      className="relative group cursor-pointer"
    >
      {/* Animated Rotating Gradient Border */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        style={{
          background: `conic-gradient(from 0deg, ${team.accentColor}00, ${team.accentColor}80, ${team.accentColor}00)`,
        }}
        animate={{
          rotate: isHovered ? 360 : 0,
        }}
        transition={{
          duration: 3,
          repeat: isHovered ? Infinity : 0,
          ease: "linear"
        }}
      />

      {/* Main Card */}
      <motion.div
        className={`relative rounded-3xl bg-gradient-to-br ${team.gradient} p-[2px]`}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        whileHover={{ scale: 1.05, z: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Inner Card */}
        <div 
          className="relative rounded-3xl bg-gradient-to-br from-background/98 via-background/95 to-background/90 backdrop-blur-2xl p-8 h-full min-h-[380px] flex flex-col overflow-hidden"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Animated Mesh Gradient Background */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${team.accentColor}40 0%, transparent 60%)`
            }}
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut"
            }}
          />

          {/* Icon with 3D Effect */}
          <motion.div
            className={`relative inline-flex p-5 rounded-2xl bg-gradient-to-br ${team.gradient} mb-6 self-start shadow-2xl`}
            style={{ 
              transform: "translateZ(40px)",
              boxShadow: `0 20px 60px ${team.accentColor}60`
            }}
            animate={{
              rotate: isHovered ? [0, 4, -4, 0] : 0,
              scale: isHovered ? 1.15 : 1,
              y: isHovered ? -8 : 0,
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
            <Icon className="w-10 h-10 text-white" />
            
            {/* Icon Glow Pulse */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{ background: team.accentColor }}
                animate={{
                  opacity: [0, 0.4, 0],
                  scale: [1, 1.3, 1.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            )}
          </motion.div>

          {/* Team Name with Gradient Shift */}
          <motion.h3 
            className="text-2xl md:text-3xl font-black mb-6 leading-tight relative"
            style={{ 
              transform: "translateZ(30px)",
              backgroundImage: isHovered 
                ? `linear-gradient(135deg, ${team.accentColor} 0%, white 100%)`
                : 'linear-gradient(135deg, white 0%, white 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%',
            }}
            transition={{ duration: 0.8 }}
          >
            {team.name}
          </motion.h3>

          {/* Tasks with Stagger Animation */}
          <div className="flex-1 space-y-3" style={{ transform: "translateZ(20px)" }}>
            {team.tasks.map((task, taskIndex) => (
              <motion.div
                key={task}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: isHovered ? taskIndex * 0.08 : index * 0.1 + taskIndex * 0.05,
                  duration: 0.4,
                  type: "spring"
                }}
                className="flex items-start gap-3 group/task"
              >
                {/* Animated Bullet with Zap */}
                <motion.div
                  className="mt-1 flex-shrink-0 relative"
                  animate={{
                    scale: isHovered ? [1, 1.4, 1] : 1,
                  }}
                  transition={{
                    delay: taskIndex * 0.1,
                    duration: 0.5,
                    repeat: isHovered ? Infinity : 0,
                    repeatDelay: 2
                  }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: team.accentColor }}
                    animate={{
                      boxShadow: isHovered 
                        ? `0 0 15px ${team.accentColor}, 0 0 30px ${team.accentColor}40`
                        : `0 0 0px ${team.accentColor}`
                    }}
                  />
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0"
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 3, opacity: 0 }}
                      transition={{ 
                        duration: 1,
                        repeat: Infinity,
                        delay: taskIndex * 0.2
                      }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: team.accentColor }} />
                    </motion.div>
                  )}
                </motion.div>
                
                <motion.span 
                  className={`text-base font-medium transition-colors duration-300 ${
                    isHovered ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                  animate={{
                    x: isHovered ? [0, 4, 0] : 0,
                  }}
                  transition={{
                    delay: taskIndex * 0.1,
                    duration: 1,
                    repeat: isHovered ? Infinity : 0,
                    repeatDelay: 1
                  }}
                >
                  {task}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Deploy CTA with Electric Effect */}
          <motion.div
            className="mt-6 pt-6 border-t border-border/30 flex items-center justify-between group/cta"
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" style={{ color: team.accentColor }} />
              <span 
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: team.accentColor }}
              >
                Deploy Team
              </span>
            </div>
            <motion.div
              animate={{
                x: isHovered ? [0, 8, 0] : 0,
              }}
              transition={{
                duration: 1,
                repeat: isHovered ? Infinity : 0,
              }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: team.accentColor }} />
            </motion.div>
          </motion.div>

          {/* Particle System on Hover */}
          <AnimatePresence>
            {isHovered && (
              <>
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{ 
                      backgroundColor: team.accentColor,
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      x: [0, (Math.random() - 0.5) * 300],
                      y: [0, (Math.random() - 0.5) * 300],
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          {/* Corner Accent Lines */}
          <motion.div
            className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-3xl"
            style={{ borderColor: team.accentColor }}
            animate={{
              opacity: isHovered ? 1 : 0.3,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-3xl"
            style={{ borderColor: team.accentColor }}
            animate={{
              opacity: isHovered ? 1 : 0.3,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Outer Shadow Glow */}
      <motion.div
        className="absolute -inset-2 rounded-3xl opacity-0 blur-2xl -z-10"
        style={{
          background: `radial-gradient(circle, ${team.accentColor}60 0%, ${team.accentColor}20 50%, transparent 70%)`
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

export function CognitiveTeamsGrid() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fixed positions for floating orbs (to avoid hydration issues)
  const orbPositions = [
    { left: 15, top: 20, moveX: 40, moveY: -30, duration: 18 },
    { left: 75, top: 15, moveX: -35, moveY: 45, duration: 22 },
    { left: 25, top: 65, moveX: 50, moveY: 35, duration: 20 },
    { left: 85, top: 70, moveX: -40, moveY: -25, duration: 24 },
    { left: 50, top: 40, moveX: 30, moveY: 50, duration: 19 },
    { left: 40, top: 85, moveX: -45, moveY: 30, duration: 21 },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-background via-purple-950/5 to-background py-24 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Floating Orbs - Only render after mount to avoid hydration issues */}
        {isMounted && orbPositions.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(168, 85, 247, 0.1)' : 'rgba(59, 130, 246, 0.1)'} 0%, transparent 70%)`,
              left: `${orb.left}%`,
              top: `${orb.top}%`,
            }}
            animate={{
              x: [0, orb.moveX, 0],
              y: [0, orb.moveY, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
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
            <Sparkles className="w-5 h-5 text-purple-400 relative z-10" />
            <span className="text-sm font-bold uppercase tracking-wider text-purple-300 relative z-10">
              Cognitive Teams
            </span>
          </motion.div>

          {/* Title with Text Reveal */}
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              Cognitive Teams
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              By Department
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
            Specialized AI teams architected for every department's unique workflows
          </motion.p>
        </motion.div>

        {/* Teams Grid with Perspective */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: 2000 }}
        >
          {teams.map((team, index) => (
            <TeamCard key={team.id} team={team} index={index} />
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Each cognitive team is custom-built for your workflows, trained on your patterns, 
            and coordinated to work seamlessly with your human team members.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

