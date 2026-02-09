
import Image from "next/image";
import { Countdown } from "@/components/proposal/Countdown";
import { PhotoGallery } from "@/components/proposal/PhotoGallery";
import { StorySection } from "@/components/proposal/StorySection";
import { InteractiveQuiz } from "@/components/proposal/InteractiveQuiz";
import { ProposalSection } from "@/components/proposal/ProposalSection";
import { Heart, Sparkles, ScrollText } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-romantic');

  return (
    <main className="min-h-screen font-body selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage?.imageUrl || ""}
          alt="Romantic Hero"
          fill
          className="object-cover"
          priority
          data-ai-hint="romantic sunset couple"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
        
        <div className="relative z-10 text-center text-white space-y-6 px-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30 text-sm font-semibold uppercase tracking-widest animate-float">
            <Heart className="w-4 h-4 fill-current" />
            My Dearest Ashley
            <Heart className="w-4 h-4 fill-current" />
          </div>
          <h1 className="text-6xl sm:text-8xl font-headline font-black drop-shadow-2xl">
            Our Heartfelt <br /> <span className="text-primary">Journey</span>
          </h1>
          <p className="text-xl sm:text-2xl font-body italic max-w-2xl mx-auto opacity-90">
            "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
          </p>
          <div className="pt-8 flex justify-center">
             <ScrollText className="w-8 h-8 animate-bounce opacity-70" />
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="relative -mt-20 z-20 container mx-auto px-4">
        <Countdown />
      </section>

      {/* Memory Lane / Photos */}
      <PhotoGallery />

      {/* GenAI Story Section */}
      <div className="bg-primary/5">
        <StorySection />
      </div>

      {/* Interactive Quiz */}
      <InteractiveQuiz />

      {/* Proposal Section */}
      <ProposalSection />

      {/* Footer */}
      <footer className="py-12 bg-white text-center border-t border-primary/20">
        <div className="flex items-center justify-center gap-2 text-secondary font-headline text-2xl mb-2">
          <Heart className="w-6 h-6 fill-current" />
          <span>Forever Yours</span>
          <Heart className="w-6 h-6 fill-current" />
        </div>
        <p className="text-muted-foreground text-sm uppercase tracking-widest">Happy Valentine's Day 2025</p>
      </footer>
    </main>
  );
}
