'use client';

import { HoverBackground } from '@/components/ui/hover-velocity-hero';
import { ArrowRight, Calendar, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAButton {
  text: string;
  href: string;
  icon?: 'calendar' | 'book';
  primary?: boolean;
}

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: CTAButton[];
  className?: string;
}

export function CTASection({
  title = "Start your transformation",
  subtitle = "Ready to multiply your strategic capacity?",
  description = "Join forward-thinking leaders who freed their teams from execution work and unlocked exponential growth.",
  buttons = [
    { text: "Book Discovery Session", href: "#contact", icon: "calendar", primary: true },
    { text: "View Case Studies", href: "#case-studies", icon: "book" }
  ],
  className
}: CTASectionProps) {
  
  const getIcon = (iconType?: 'calendar' | 'book') => {
    switch (iconType) {
      case 'calendar':
        return <Calendar className="w-5 h-5" />;
      case 'book':
        return <BookOpen className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className={cn("w-full py-24 md:py-32", className)}>
      <div className="w-full h-[500px] md:h-[600px] rounded-none md:rounded-2xl overflow-hidden mx-auto max-w-7xl px-4 md:px-6">
        <HoverBackground
          objectCount={12}
          colors={{
            background: 'bg-gradient-to-br from-purple-950 via-purple-900 to-blue-950',
            objects: [
              'bg-purple-400/20',
              'bg-blue-400/20',
              'bg-fuchsia-400/20',
              'bg-violet-400/20',
              'bg-cyan-400/20',
              'bg-indigo-400/20',
            ],
            glow: 'shadow-purple-400/50',
          }}
        >
          <div className="flex items-center justify-center h-full px-6 md:px-12">
            <div className="text-center space-y-6 md:space-y-8 max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-purple-300">
                  Transform Today
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/95 leading-tight">
                {title}
              </h2>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-purple-200 font-medium">
                {subtitle}
              </p>

              {/* Description */}
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                {buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.href}
                    className={cn(
                      "group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 overflow-hidden",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-950",
                      button.primary
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105"
                        : "bg-white/10 backdrop-blur-md text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/30 hover:scale-105"
                    )}
                  >
                    {/* Animated gradient overlay for primary button */}
                    {button.primary && (
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    )}
                    
                    {/* Icon */}
                    {getIcon(button.icon)}
                    
                    {/* Text */}
                    <span className="relative z-10">{button.text}</span>
                    
                    {/* Arrow */}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="pt-8 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  <span>24/7 AI Workforce</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  <span>Enterprise-grade Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  <span>30-Day ROI Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </HoverBackground>
      </div>
    </section>
  );
}

export default CTASection;




