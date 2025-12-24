"use client";

import { Briefcase, Mail, Lightbulb, TrendingUp, Workflow } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import Image from 'next/image';

export function NavbarWrapper() {
  const navItems = [
    { name: 'What We Do', url: '#what-we-do', icon: Lightbulb },
    { name: 'How It Works', url: '#how-it-works', icon: Workflow },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Results', url: '#results', icon: TrendingUp },
    { name: 'Contact', url: '#contact', icon: Mail, highlight: true }
  ];

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6 w-full max-w-6xl px-6">
      <div className="relative group">
        {/* Outer Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
        
        {/* Glass Container */}
        <div className="relative rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl shadow-purple-500/10 p-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image 
                src="/images/Liberators-AI.svg" 
                alt="Liberators AI" 
                width={150} 
                height={40}
                className="h-8 w-auto"
              />
            </div>
            
            {/* Navbar */}
            <NavBar items={navItems} className="static translate-x-0 pt-0 mb-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

