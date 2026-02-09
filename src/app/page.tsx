"use client";

import { useState, useEffect } from "react";
import { Countdown } from "@/components/proposal/Countdown";
import { InteractiveQuiz } from "@/components/proposal/InteractiveQuiz";
import { ProposalSection } from "@/components/proposal/ProposalSection";
import { AccessGate } from "@/components/AccessGate";
import { Heart, ScrollText, Sparkles } from "lucide-react";

export default function Home() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if user was previously authorized in this session
    const auth = sessionStorage.getItem("isAuthorized");
    if (auth === "true") {
      setIsAuthorized(true);
    }
  }, []);

  const handleVerify = () => {
    setIsAuthorized(true);
    sessionStorage.setItem("isAuthorized", "true");
  };

  if (!isMounted) return null;

  if (!isAuthorized) {
    return <AccessGate onVerify={handleVerify} />;
  }

  return (
    <main className="min-h-screen font-body selection:bg-primary/30 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        {/* Decorative background sparks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles className="absolute top-1/4 left-1/4 w-12 h-12 text-primary/30 animate-pulse" />
          <Heart className="absolute top-1/3 right-1/4 w-16 h-16 text-secondary/20 animate-float" />
          <Sparkles className="absolute bottom-1/4 right-1/3 w-8 h-8 text-primary/40 animate-pulse delay-700" />
        </div>

        <div className="relative z-10 text-center space-y-8 px-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md px-6 py-2 rounded-full border border-primary/20 text-sm font-semibold uppercase tracking-widest animate-float shadow-sm">
            <Heart className="w-4 h-4 fill-secondary text-secondary" />
            My Dearest Ashley
            <Heart className="w-4 h-4 fill-secondary text-secondary" />
          </div>
          <h1 className="text-6xl sm:text-8xl font-headline font-black tracking-tighter text-foreground drop-shadow-sm">
            Our Heartfelt <br /> <span className="text-secondary italic">Journey</span>
          </h1>
          <p className="text-xl sm:text-2xl font-body italic max-w-2xl mx-auto text-muted-foreground">
            "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
          </p>
          <div className="pt-8 flex justify-center">
             <ScrollText className="w-8 h-8 animate-bounce text-primary/60" />
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="relative -mt-20 z-20 container mx-auto px-4">
        <Countdown />
      </section>

      {/* Interactive Quiz */}
      <InteractiveQuiz />

      {/* Proposal Section */}
      <ProposalSection />

      {/* Footer */}
      <footer className="py-12 bg-white/50 backdrop-blur-sm text-center border-t border-primary/10">
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
