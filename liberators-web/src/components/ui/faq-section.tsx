'use client';

import { FaqAccordion } from '@/components/ui/faq-chat-accordion';
import { cn } from '@/lib/utils';

interface FAQSectionProps {
  className?: string;
}

const liberatorsAIFAQs = [
  {
    id: 1,
    question: "How does a cognitive team actually work?",
    answer: "Think of it as your team's digital twin that handles execution work. It learns your workflows, integrates with your tools, and automates repetitive tasks - freeing your people for strategic work. No code, no complex setup.",
    icon: "🤖",
    iconPosition: "left" as const,
  },
  {
    id: 2,
    question: "How long does implementation take?",
    answer: "Most teams see their first cognitive agent live within 2 weeks. Full deployment across a function (like sales or ops) typically takes 4-6 weeks. We handle the heavy lifting - you just tell us what's eating your team's time.",
    icon: "⚡",
    iconPosition: "right" as const,
  },
  {
    id: 3,
    question: "What if my team doesn't know how to work with AI?",
    answer: "They don't need to. Your cognitive team works in the background through existing tools - Slack, email, your CRM. Your people keep doing what they do best, just with 80% less busywork.",
  },
  {
    id: 4,
    question: "Is our data secure?",
    answer: "Enterprise-grade security, SOC 2 compliant, encrypted at rest and in transit. Your data stays yours - we never train models on client data or share it. Most deployments run in your own cloud environment.",
    icon: "🔒",
    iconPosition: "left" as const,
  },
  {
    id: 5,
    question: "How much does it cost compared to hiring?",
    answer: "A cognitive team member costs roughly what you'd pay for 2-3 coffee subscriptions per month. Compare that to hiring - no recruitment costs, no benefits, no turnover. Most clients see positive ROI within 30 days.",
  },
  {
    id: 6,
    question: "What happens if the AI makes a mistake?",
    answer: "Human oversight is built in. Cognitive agents flag uncertainty, escalate edge cases, and learn from corrections. Critical decisions always go to humans. Think of it as a very capable junior team member - fast, reliable, but supervised.",
    icon: "✅",
    iconPosition: "right" as const,
  },
  {
    id: 7,
    question: "Can it integrate with our existing tools?",
    answer: "If you use it, we probably integrate with it - Salesforce, HubSpot, Slack, Gmail, Notion, Airtable, your custom CRM. We connect to your stack via APIs, no rip-and-replace needed.",
  },
  {
    id: 8,
    question: "What's the ROI? How do you measure success?",
    answer: "We track three things: hours saved (typically 40-60% per person), output increase (2-3x more work), and morale improvement (measured via team surveys). Most clients recoup investment in month one and scale from there.",
    icon: "📊",
    iconPosition: "left" as const,
  },
  {
    id: 9,
    question: "Do you replace jobs or augment teams?",
    answer: "Augment. We've never seen a client reduce headcount - they redeploy people to higher-value work. Think of it as freeing your strategists from being buried in spreadsheets and emails.",
  },
  {
    id: 10,
    question: "What if we want to start small?",
    answer: "Perfect. We recommend starting with one pain point - like sales research or customer onboarding. Prove value in 30 days, then expand. No massive upfront commitment, no vendor lock-in.",
    icon: "🚀",
    iconPosition: "right" as const,
  },
];

export function FAQSection({ className }: FAQSectionProps) {
  return (
    <section className={cn("w-full py-16 md:py-24 bg-background", className)}>
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 backdrop-blur-sm mb-4">
            <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-purple-400">FAQ</span>
            <span className="h-1 w-1 rounded-full bg-purple-400" />
            <span className="text-xs font-medium tracking-tight text-purple-300">Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about building your cognitive team. Can't find what you're looking for? 
            <a href="#contact" className="text-purple-400 hover:text-purple-300 ml-1 underline underline-offset-4">
              Reach out to us
            </a>.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <FaqAccordion 
              data={liberatorsAIFAQs}
              className=""
              timestamp=""
              questionClassName="bg-white text-black hover:bg-purple-100 data-[state=open]:bg-purple-200 data-[state=open]:text-purple-900 transition-all duration-300"
              answerClassName="bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium transition-colors"
          >
            Talk to our team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

