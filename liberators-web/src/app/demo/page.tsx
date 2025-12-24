"use client";

import dynamic from 'next/dynamic';
import { NavbarWrapper } from "@/components/navbar-wrapper";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

// Critical components - load immediately
import PatternHero from "@/components/ui/pattern-hero";
import { WhatWeDoHero } from "@/components/ui/what-we-do-hero";

// Lazy load below-the-fold components with loading states
const ServicesSplitSection = dynamic(() => import("@/components/ui/services-split-section").then(mod => ({ default: mod.ServicesSplitSection })), {
  loading: () => <div className="h-screen w-full bg-background animate-pulse" />,
  ssr: true
});

const ProcessFlowSection = dynamic(() => import("@/components/ui/process-flow-section").then(mod => ({ default: mod.ProcessFlowSection })), {
  loading: () => <div className="h-screen w-full bg-background animate-pulse" />,
  ssr: true
});

const LiberationEffectSection = dynamic(() => import("@/components/ui/liberation-effect-section").then(mod => ({ default: mod.LiberationEffectSection })), {
  loading: () => <div className="h-screen w-full bg-background animate-pulse" />,
  ssr: false // Heavy animations - client only
});

const CognitiveTeamsGrid = dynamic(() => import("@/components/ui/cognitive-teams-grid").then(mod => ({ default: mod.CognitiveTeamsGrid })), {
  loading: () => <div className="h-screen w-full bg-background animate-pulse" />,
  ssr: false // Heavy animations - client only
});

const TransformationCarousel = dynamic(() => import("@/components/ui/transformation-carousel").then(mod => ({ default: mod.TransformationCarousel })), {
  loading: () => <div className="h-screen w-full bg-background animate-pulse" />,
  ssr: true
});

const TeamSection = dynamic(() => import("@/components/ui/team-section").then(mod => ({ default: mod.TeamSection })), {
  loading: () => <div className="h-96 w-full bg-background animate-pulse" />,
  ssr: true
});

const StaggerTestimonials = dynamic(() => import("@/components/ui/stagger-testimonials").then(mod => ({ default: mod.StaggerTestimonials })), {
  loading: () => <div className="h-96 w-full bg-background animate-pulse" />,
  ssr: true
});

const FinalCTASection = dynamic(() => import("@/components/ui/final-cta-section").then(mod => ({ default: mod.FinalCTASection })), {
  loading: () => <div className="h-96 w-full bg-background animate-pulse" />,
  ssr: false // Sparkles effect - client only
});

const FAQSection = dynamic(() => import("@/components/ui/faq-section").then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-96 w-full bg-background animate-pulse" />,
  ssr: false // Radix Accordion - client only to avoid hydration issues
});

const ContactFormSection = dynamic(() => import("@/components/ui/contact-form-section").then(mod => ({ default: mod.ContactFormSection })), {
  loading: () => <div className="h-96 w-full bg-background animate-pulse" />,
  ssr: true
});

const Footerdemo = dynamic(() => import("@/components/ui/footer-section").then(mod => ({ default: mod.Footerdemo })), {
  loading: () => <div className="h-64 w-full bg-background animate-pulse" />,
  ssr: true
});

export default function DemoPage() {
  return (
    <div className="w-full min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Navigation */}
      <NavbarWrapper />
      {/* Hero - Full Width with Pattern Shader */}
      <section id="hero">
        <PatternHero
          title="Build Your AI Workforce"
          description="Cognitive teams that multiply strategic capacity, work 24/7, and evolve with your business."
          badgeText="Automate Everything"
          badgeLabel="New"
          ctaButtons={[
            { text: "Book Discovery Session", href: "#contact", primary: true },
            { text: "See How It Works", href: "#how-it-works" }
          ]}
          microDetails={["Enterprise-grade AI", "24/7 automation", "Strategic capacity multiplied"]}
        />
      </section>

      {/* What We Do Hero */}
      <section id="what-we-do">
        <WhatWeDoHero />
      </section>

      {/* Services Split Section */}
      <section id="services">
        <ServicesSplitSection />
      </section>

      {/* How It Works - Process Flow */}
      <section id="how-it-works">
        <ProcessFlowSection />
      </section>

      {/* Liberation Effect Section */}
      <section id="liberation-effect">
        <LiberationEffectSection />
      </section>

      {/* Cognitive Teams Grid */}
      <section id="cognitive-teams">
        <CognitiveTeamsGrid />
      </section>

      {/* Transformation Examples Carousel */}
      <section id="results">
        <TransformationCarousel />
      </section>

      {/* Team Section (Who We Are) */}
      <section id="team">
        <TeamSection />
      </section>
      
      {/* Testimonials Section - Full Width */}
      <section id="testimonials" className="w-full py-16 md:py-24 bg-background">
        <div className="w-full">
          <div className="text-center mb-12 md:mb-16 px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 backdrop-blur-sm mb-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-purple-400">Testimonials</span>
              <span className="h-1 w-1 rounded-full bg-purple-400" />
              <span className="text-xs font-medium tracking-tight text-purple-300">Client Voices</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              Client Voices
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real stories from teams who freed themselves from execution work and multiplied their strategic capacity.
            </p>
          </div>
          <StaggerTestimonials />
        </div>
      </section>

      {/* Final CTA with Sparkles */}
      <section id="cta">
        <FinalCTASection />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Contact Form Section */}
      <section id="contact">
        <ContactFormSection />
      </section>
      
      {/* Footer */}
      <Footerdemo />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

