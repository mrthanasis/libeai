import PatternHero from "@/components/ui/pattern-hero";
import { Footerdemo } from "@/components/ui/footer-section";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { TeamSection } from "@/components/ui/team-section";
import { FAQSection } from "@/components/ui/faq-section";
import { WhatWeDoHero } from "@/components/ui/what-we-do-hero";
import { FinalCTASection } from "@/components/ui/final-cta-section";
import { LiberationEffectSection } from "@/components/ui/liberation-effect-section";
import { ServicesSplitSection } from "@/components/ui/services-split-section";
import { TransformationCarousel } from "@/components/ui/transformation-carousel";
import { ProcessFlowSection } from "@/components/ui/process-flow-section";
import { CognitiveTeamsGrid } from "@/components/ui/cognitive-teams-grid";
import { ContactFormSection } from "@/components/ui/contact-form-section";
import { NavbarWrapper } from "@/components/navbar-wrapper";

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
    </div>
  );
}

