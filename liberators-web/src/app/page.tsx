import NeuralHero from "@/components/ui/neural-network-hero";

export default function Home() {
  return (
    <>
      {/* Neural Network Hero - New WebGL Hero Section */}
      <NeuralHero
        title="Build Your AI Workforce"
        description="Cognitive teams that multiply strategic capacity, work 24/7, and evolve with your business."
        badgeText="Liberators AI"
        badgeLabel="New"
        ctaButtons={[
          { text: "Book Discovery Session", href: "#cta", primary: true },
          { text: "See How It Works", href: "#demo" }
        ]}
        microDetails={["Neural Canvas", "GSAP Motion", "Three.js + R3F"]}
      />

      {/* Original Hero Section - Keep for reference/comparison */}
      {/* You can remove this section once you're happy with the Neural Hero above */}
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Original Next.js Hero (can be removed)
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              The Neural Network Hero is now displayed above this section.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
