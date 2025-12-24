import Hero from "@/components/ui/neural-network-hero";

/**
 * Liberators AI Hero - Neural Network Style
 * 
 * Αυτή η σελίδα δείχνει πώς το Neural Network Hero component
 * μπορεί να χρησιμοποιηθεί με το Liberators AI content
 */
export default function LiberatorsHeroDemo() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Hero 
        title="Build Your AI Workforce"
        description="Cognitive teams that multiply strategic capacity, work 24/7, and evolve with your business. From execution to strategy – unleash your team's full potential."
        badgeText="Automate Everything"
        badgeLabel="New"
        ctaButtons={[
          { 
            text: "Book Discovery Session", 
            href: "#cta", 
            primary: true 
          },
          { 
            text: "See How It Works", 
            href: "#demo" 
          }
        ]}
        microDetails={[
          "Enterprise-grade AI",
          "24/7 intelligent automation",
          "Strategic capacity multiplied"
        ]}Τίποτα δεν μπορεί να το κάνουμε για το ο, oοο Start your transformation που είναι το CTA Book Discovery Session with Definite Strategy Capacity κτλ. Κτλ. Οπότε αυτό που είπαμε για το section με το CTA.
      />

      {/* 
        Εδώ μπορείς να προσθέσεις το υπόλοιπο Liberators content:
        - What We Do section
        - How It Works
        - Cognitive Teams
        - Transformations
        - Services
        - Team
        - Testimonials
        - FAQ
        - CTA
        - Footer
      */}
      
      <section className="relative z-10 bg-black py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              What Comes Next
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Μπορείς να συνεχίσεις με τα sections από το original Liberators site.
              Το Neural Network Hero είναι το perfect starting point!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Metadata για SEO
 */
export const metadata = {
  title: "Liberators AI - Your AI Workforce | Neural Network Demo",
  description: "Build cognitive teams that multiply strategic capacity, work 24/7, and evolve with your business.",
};




