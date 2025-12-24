'use client';

import { SparklesCore } from '@/components/ui/sparkles';
import { Calendar, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FinalCTASectionProps {
  className?: string;
}

export function FinalCTASection({ className }: FinalCTASectionProps) {
  return (
    <section className={cn("w-full relative overflow-hidden bg-black", className)}>
      {/* Sparkles Background */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlescta"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#a855f7"
          speed={0.5}
        />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-950/40 to-black/60" />
      
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 md:px-6 py-24 md:py-32">
        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-200">
              Start Your Transformation
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 to-blue-500" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Book a discovery session. We'll identify where your strategic capacity is trapped 
            and design the cognitive teams to free it.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105"
            >
              {/* Animated gradient overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              {/* Icon */}
              <Calendar className="w-5 h-5" />
              
              {/* Text */}
              <span className="relative z-10">Book Discovery Session</span>
              
              {/* Arrow */}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#case-studies"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-white/10 backdrop-blur-md text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/30 hover:scale-105"
            >
              {/* Icon */}
              <FileText className="w-5 h-5" />
              
              {/* Text */}
              <span>View Case Studies</span>
              
              {/* Arrow */}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-purple-200/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-Min Strategy Call</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

export default FinalCTASection;




