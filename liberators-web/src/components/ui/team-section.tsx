'use client';

import { cn } from '@/lib/utils';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamSectionProps {
  className?: string;
}

// Liberators AI Team
const teamMembers: TeamMember[] = [
  {
    name: 'Andreas Karavánas',
    role: 'Founder & Chief Cognitive Architect',
    avatar: '/images/1.png',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Thanasis Chrysovergis',
    role: 'Technical Architect & Implementation Lead',
    avatar: '/images/3.png',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Kostas Karakoglou',
    role: 'AI Integration Specialist',
    avatar: '/images/2.png',
    linkedin: '#',
    twitter: '#',
  },
];

export function TeamSection({ className }: TeamSectionProps) {
  return (
    <section className={cn("w-full py-16 md:py-24 bg-background", className)}>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 backdrop-blur-sm mb-4">
            <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-purple-400">Team</span>
            <span className="h-1 w-1 rounded-full bg-purple-400" />
            <span className="text-xs font-medium tracking-tight text-purple-300">Who We Are</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Strategic consultants and AI transformation facilitators.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center text-center"
            >
              {/* Avatar Container */}
              <div className="relative mb-6">
                {/* Gradient Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                
                {/* Avatar */}
                <div className="relative">
                  <div className="w-40 h-40 rounded-full border-4 border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  
                  {/* Index Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    0{index + 1}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-purple-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-purple-500">
                  {member.role}
                </p>
                {member.bio && (
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto mt-3">
                    {member.bio}
                  </p>
                )}
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    className="w-10 h-10 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl" />
            </div>
          ))}
        </div>

        {/* AI Collaboration Visual */}
        <div className="mt-20 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Working with Cognitive Teams
              </h3>
              <p className="text-sm text-muted-foreground">
                Natural collaboration between humans and AI entities
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-card/50 backdrop-blur-sm shadow-2xl group">
              <img 
                src="/images/image-26.webp" 
                alt="AI Collaboration Interface"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-102"
              />
              {/* Fallback gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 -z-10" />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500" />
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="text-purple-400 font-medium">We're hiring!</span> 
            {' '}Looking to join a team building the future of work? 
            <a href="#careers" className="text-purple-400 hover:text-purple-300 ml-1 underline underline-offset-4">
              Check open positions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;

