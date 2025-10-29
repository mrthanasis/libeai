"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

// Liberators AI Testimonials - Real content from the original site
const testimonials = [
  {
    tempId: 0,
    testimonial: "Honestly, I was skeptical. Another AI vendor promising the moon. But after two months, my content team went from barely keeping up to actually having time to think. The cognitive team handles the briefs, the first drafts, the coordination chaos. My people finally do what I hired them for - creative strategy. ROI? We're producing 2.5x the content with the same headcount and better quality.",
    by: "Dimitris P., Head of Content at SaaS Scale-up",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 1,
    testimonial: "The first month we freed 47 hours across the sales team. That's measurable. But what shocked me was the morale change. My reps actually enjoy their work again because they're not drowning in research and data entry. They're selling, which is what they're good at. One rep told me 'I forgot what it feels like to have time to actually talk to prospects.' That's when I knew this wasn't just automation.",
    by: "Maria K., VP Sales at Enterprise Software",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 2,
    testimonial: "We had five project managers basically playing email ping-pong all day - status updates, handoffs, 'did you see this?' messages. It was exhausting everyone. The operations cognitive team took over that coordination layer. Now my PMs actually manage projects - they solve problems, optimize processes, coach team members. The work got more interesting, and somehow we're handling 3x the project load.",
    by: "Anna S., Director of Operations at Digital Agency",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "I'll be honest - I thought my job was at risk when we started talking about AI for marketing. Turns out it's the opposite. The cognitive team handles campaign execution, performance tracking, all the repetitive stuff that was eating 80% of my week. Now I actually have time to do marketing strategy, test new channels, build relationships with partners. I'm more valuable to the company now, not less.",
    by: "Sophia L., Marketing Manager at B2B Services",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "The HR cognitive team screens resumes, scores candidates, schedules interviews, handles onboarding workflows. Saves us probably 30 hours a week. But the real value? We can finally be strategic about talent. I have time to work on culture, development programs, retention initiatives - the stuff that actually moves the needle. Before, we were just firefighting requisitions.",
    by: "Nikos T., Head of HR at Tech Startup",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "Finance was always the bottleneck. Invoice processing, expense reports, reconciliation - it took three people full-time just to keep up with the data entry. The Liberators team automated 90% of that. We redeployed two people to FP&A work, kept one for oversight. Now we're actually doing financial analysis instead of just accounting. Board meetings got way more strategic.",
    by: "Elena K., Finance Director at Mid-Market Company",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  },
  {
    tempId: 6,
    testimonial: "Customer support was brutal. Volume kept growing, team kept burning out, quality kept dropping. We deployed a cognitive customer success team - handles tier 1 inquiries 24/7, escalates complex issues to humans, learns from every interaction. Support load on my team dropped 60%. They now handle the interesting problems, the relationship building, the strategic accounts. Satisfaction scores went up, not down.",
    by: "George M., Head of Customer Success at SaaS Platform",
    imgSrc: "https://i.pravatar.cc/150?img=7"
  },
  {
    tempId: 7,
    testimonial: "My engineering team was spending maybe 20% of their time actually engineering. The rest was status updates, ticket management, documentation updates, deployment coordination. We built a cognitive ops layer that handles all that orchestration. Now my devs code, solve hard problems, mentor juniors. Velocity went up 40%, but more importantly, I stopped losing senior engineers to burnout.",
    by: "Alexandros K., VP Engineering at FinTech Startup",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
  {
    tempId: 8,
    testimonial: "Product management became almost impossible - too many stakeholders, too many data sources, too many channels to monitor. The cognitive product assistant synthesizes user feedback, tracks feature requests, monitors competitor moves, prepares stakeholder updates. I went from reactive chaos to actually having time to think strategically about the roadmap. Best decision we made this year.",
    by: "Christina V., Head of Product at B2B SaaS",
    imgSrc: "https://i.pravatar.cc/150?img=9"
  },
  {
    tempId: 9,
    testimonial: "Data analysis was our bottleneck. Business teams wanted insights, but my analysts were buried in pulling reports, cleaning data, answering one-off questions. We deployed cognitive analysts that handle routine reporting, data prep, basic analysis. My team now focuses on strategic questions, building predictive models, actually moving the business forward. They're finally doing what I hired data scientists to do.",
    by: "Petros M., Head of Analytics at E-commerce Company",
    imgSrc: "https://i.pravatar.cc/150?img=10"
  },
  {
    tempId: 10,
    testimonial: "Running operations across three countries meant I was basically a human router - coordinating teams, translating between departments, chasing status updates. The cognitive ops team handles cross-functional coordination, escalates only real decisions to me, keeps everyone aligned. I'm finally doing strategic work instead of playing telephone. We scaled operations 2x without adding headcount.",
    by: "Katerina D., COO at International Services Firm",
    imgSrc: "https://i.pravatar.cc/150?img=11"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 transition-all duration-500 ease-in-out flex flex-col",
        isCenter 
          ? "z-10 bg-gradient-to-br from-purple-600 to-blue-600 text-white border-purple-400" 
          : "z-0 bg-card/90 backdrop-blur-sm text-card-foreground border-border hover:border-purple-400/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -50 : position % 2 ? 20 : -20}px)
          rotate(${isCenter ? 0 : position % 2 ? 3 : -3}deg)
        `,
        boxShadow: isCenter ? "0px 12px 0px 6px rgba(139, 92, 246, 0.3)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45 bg-transparent border-t-2",
          isCenter 
            ? "border-white/40" 
            : "border-border/50"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 0,
          borderWidth: '2px 0 0 0'
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-3 h-12 w-12 bg-muted object-cover object-top rounded-lg"
        style={{
          boxShadow: "3px 3px 0px rgba(0,0,0,0.2)"
        }}
      />
      <h3 className={cn(
        "text-xs sm:text-sm font-medium mb-auto overflow-hidden",
        isCenter ? "text-white line-clamp-[8]" : "text-foreground line-clamp-4"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "mt-4 pt-3 border-t text-xs italic",
        isCenter ? "text-white/90 border-white/20" : "text-muted-foreground border-border"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full bg-gradient-to-b from-background via-purple-950/5 to-background"
      style={{ height: 650 }}
    >
      <div 
        className="relative w-full h-full overflow-hidden"
        style={{ 
          paddingLeft: 'max(2rem, calc((100vw - 1400px) / 2))',
          paddingRight: 'max(2rem, calc((100vw - 1400px) / 2))'
        }}
      >
        {testimonialsList.map((testimonial, index) => {
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-20">
          <button
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center transition-colors rounded-lg",
              "bg-background/80 backdrop-blur-sm border-2 border-purple-500/30 text-purple-400",
              "hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-purple-400",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center transition-colors rounded-lg",
              "bg-background/80 backdrop-blur-sm border-2 border-purple-500/30 text-purple-400",
              "hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-purple-400",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

