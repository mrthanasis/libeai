'use client';

import { MagicText } from '@/components/ui/magic-text';
import { cn } from '@/lib/utils';

interface WhatWeDoSectionProps {
  className?: string;
}

export function WhatWeDoSection({ className }: WhatWeDoSectionProps) {
  const mainText = "We build AI workforces for enterprise teams. Specialized cognitive teams - multiple AI entities working together, trained on your business patterns, coordinating like colleagues. Marketing teams. Sales teams. Operations teams. Custom teams for your specific functions. Strategic capacity multiplied. Execution work eliminated. Your experts freed for what they were hired to do.";

  return (
    <section className={cn("w-full py-24 md:py-32 bg-background relative", className)}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-purple-950/10 pointer-events-none" />
      
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 backdrop-blur-sm mb-4">
            <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-purple-400">Services</span>
            <span className="h-1 w-1 rounded-full bg-purple-400" />
            <span className="text-xs font-medium tracking-tight text-purple-300">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-purple-200 font-medium max-w-3xl mx-auto">
            We build AI workforces for enterprise teams
          </p>
        </div>

        {/* Magic Text - Scroll Reveal */}
        <div className="min-h-[70vh] flex items-center justify-center py-12">
          <div className="max-w-5xl mx-auto">
            <MagicText text={mainText} />
          </div>
        </div>

        {/* Feature Pills */}
        <div className="mt-16 md:mt-24 flex flex-wrap items-center justify-center gap-3">
          <div className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-300">Marketing Teams</span>
          </div>
          <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-300">Sales Teams</span>
          </div>
          <div className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-300">Operations Teams</span>
          </div>
          <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-300">Custom Functions</span>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Scroll down to reveal more ↓
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;

