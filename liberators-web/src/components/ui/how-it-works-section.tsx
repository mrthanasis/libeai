'use client';

import DisplayCards from '@/components/ui/display-cards';
import { Search, Users, Rocket, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HowItWorksSectionProps {
  className?: string;
}

const howItWorksCards = [
  {
    icon: <Search className="size-4 text-purple-300" />,
    title: "01. Pattern Discovery",
    description: "We study how your best work happens",
    date: "Your intelligence patterns identified",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-400",
    className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Users className="size-4 text-blue-300" />,
    title: "02. Team Architecture",
    description: "We design your cognitive team",
    date: "2-4 weeks to deployment",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-400",
    className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Rocket className="size-4 text-purple-300" />,
    title: "03. Deployment",
    description: "Your cognitive team goes live",
    date: "Strategic capacity freed immediately",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-400",
    className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <TrendingUp className="size-4 text-blue-300" />,
    title: "04. Evolution",
    description: "Teams learn from every task",
    date: "Monthly measurement of growth",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-400",
    className: "[grid-area:stack] translate-x-48 translate-y-32 hover:translate-y-20",
  },
];

export function HowItWorksSection({ className }: HowItWorksSectionProps) {
  return (
    <section className={cn("w-full py-16 md:py-24 bg-background relative overflow-hidden", className)}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 backdrop-blur-sm mb-4">
            <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-purple-400">Process</span>
            <span className="h-1 w-1 rounded-full bg-purple-400" />
            <span className="text-xs font-medium tracking-tight text-purple-300">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From pattern discovery to continuous evolution. Four steps to multiply your strategic capacity.
          </p>
        </div>

        {/* Cards Display */}
        <div className="flex justify-center items-center min-h-[500px] md:min-h-[600px]">
          <DisplayCards cards={howItWorksCards} />
        </div>

        {/* Details Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition duration-300 blur"></div>
            <div className="relative bg-background border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Search className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">01</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Pattern Discovery</h3>
              <p className="text-sm text-muted-foreground mb-3">
                We study how your best work happens. Extract the patterns that make your business unique.
              </p>
              <p className="text-xs text-purple-400 font-medium">
                Deliverable: Your company's intelligence patterns identified
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition duration-300 blur"></div>
            <div className="relative bg-background border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">02</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Team Architecture</h3>
              <p className="text-sm text-muted-foreground mb-3">
                We design your cognitive team. Built for your function, trained on your patterns, coordinated for your workflows.
              </p>
              <p className="text-xs text-blue-400 font-medium">
                Timeline: 2-4 weeks to deployment
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition duration-300 blur"></div>
            <div className="relative bg-background border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">03</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Deployment</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Your cognitive team goes live. Multiple entities working together, handling execution, learning continuously.
              </p>
              <p className="text-xs text-purple-400 font-medium">
                Result: Strategic capacity freed immediately
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition duration-300 blur"></div>
            <div className="relative bg-background border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">04</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Evolution</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Teams learn from every task. Monthly measurement of growth and gains.
              </p>
              <p className="text-xs text-blue-400 font-medium">
                Continuous improvement guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;




