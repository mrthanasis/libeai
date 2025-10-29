"use client";

import React from 'react';
import PatternShader from './pattern-shader';
import { Button } from './button';
import { ArrowRight, Calendar } from 'lucide-react';

interface CTAButton {
  text: string;
  href: string;
  primary?: boolean;
}

interface PatternHeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: CTAButton[];
  microDetails?: string[];
}

export default function PatternHero({
  title,
  description,
  badgeText = "Automate Everything",
  badgeLabel = "New",
  ctaButtons = [],
  microDetails = []
}: PatternHeroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Pattern Shader Background */}
      <div className="absolute inset-0">
        <PatternShader
          gridSpacing={0.5}
          animationSpeed={2}
          rotationSpeed={0.1}
          paletteA={[0.5, 0.5, 0.5]}
          paletteB={[0.5, 0.5, 0.5]}
          paletteC={[1.0, 1.0, 0.5]}
          paletteD={[0.8, 0.9, 0.3]}
        />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center pt-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          {/* Badge */}
          {badgeText && (
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 backdrop-blur-sm mb-8 animate-fade-in">
              {badgeLabel && (
                <>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                    {badgeLabel}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-purple-400" />
                </>
              )}
              <span className="text-sm font-medium text-purple-200">
                {badgeText}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-fade-in-up">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            {description}
          </p>

          {/* CTA Buttons */}
          {ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400">
              {ctaButtons.map((button, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={button.primary ? "default" : "outline"}
                  className={
                    button.primary
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/30 px-8 py-6 text-base"
                      : "border-purple-400/50 text-purple-200 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-6 text-base"
                  }
                  asChild
                >
                  <a href={button.href} className="inline-flex items-center gap-2">
                    {button.primary ? (
                      <Calendar className="w-5 h-5" />
                    ) : (
                      <ArrowRight className="w-5 h-5" />
                    )}
                    {button.text}
                  </a>
                </Button>
              ))}
            </div>
          )}

          {/* Micro Details */}
          {microDetails.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 animate-fade-in-up animation-delay-600">
              {microDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}

