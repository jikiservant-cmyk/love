
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Sparkles, Stars, Music } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function ProposalSection() {
  const [showModal, setShowModal] = useState(false);
  const [proposalAccepted, setProposalAccepted] = useState(false);
  const [isHoveringNo, setIsHoveringNo] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleNoHover = () => {
    // Playful "No" button that moves slightly when hovered
    const randomX = Math.random() * 40 - 20;
    const randomY = Math.random() * 40 - 20;
    setNoButtonPosition({ x: randomX, y: randomY });
    setIsHoveringNo(true);
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-primary/20">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <Sparkles className="absolute top-10 left-[10%] w-12 h-12 text-primary animate-pulse" />
        <Heart className="absolute bottom-20 right-[15%] w-16 h-16 text-secondary animate-bounce" />
        <Stars className="absolute top-1/4 right-[5%] w-8 h-8 text-primary animate-float" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full scale-150 animate-pulse" />
          <Heart className="w-24 h-24 text-secondary fill-current animate-float relative" />
          <Sparkles className="absolute -top-4 -right-4 w-10 h-10 text-primary animate-pulse" />
        </div>
        
        <h2 className="font-headline text-5xl sm:text-7xl font-black text-foreground tracking-tight">
          My Heartfelt <span className="text-secondary italic">Message</span>
        </h2>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative p-10 sm:p-16 bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-2xl">
            <p className="text-2xl sm:text-4xl font-body leading-relaxed text-foreground italic">
              "Ashley, from the moment we met, my world changed color. Every laugh we've shared, 
              every milestone we've hit, and every memory we've built has led me to this single moment. 
              I don't just want you for today; I want you for every tomorrow that follows. 
              I promise to stand by you and cherish every moment we share."
            </p>
          </div>
        </div>

        <div className="pt-16">
          {!proposalAccepted ? (
            <Button 
              onClick={() => setShowModal(true)}
              className="group relative bg-secondary hover:bg-secondary/90 text-white px-16 py-10 rounded-full h-auto text-4xl font-headline font-bold shadow-[0_20px_50px_-10px_rgba(224,122,95,0.6)] transition-all hover:scale-110 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Gift className="mr-4 w-10 h-10 group-hover:rotate-12 transition-transform" />
              I Have A Question For You...
            </Button>
          ) : (
            <div className="animate-in zoom-in slide-in-from-bottom-10 duration-1000 space-y-8">
              <div className="flex justify-center gap-4">
                <Stars className="w-12 h-12 text-secondary animate-spin-slow" />
                <h3 className="text-7xl sm:text-8xl font-headline font-black text-secondary uppercase tracking-tighter drop-shadow-lg">
                  Yes! Official!
                </h3>
                <Stars className="w-12 h-12 text-secondary animate-spin-slow" />
              </div>
              <p className="text-3xl text-muted-foreground font-body italic max-w-xl mx-auto">
                "Together is a wonderful place to be. I'm the luckiest person in the world to call you mine."
              </p>
              <div className="flex justify-center gap-4 pt-4">
                 <Heart className="w-8 h-8 text-secondary fill-current animate-bounce" />
                 <Heart className="w-12 h-12 text-secondary fill-current animate-bounce delay-100" />
                 <Heart className="w-8 h-8 text-secondary fill-current animate-bounce delay-200" />
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[700px] border-none bg-transparent p-0 overflow-visible shadow-none">
          <div className="relative bg-white rounded-[3rem] overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.3)] border-4 border-primary/20">
            {/* Top accent bar */}
            <div className="h-4 bg-gradient-to-r from-primary via-secondary to-primary w-full" />
            
            {/* Decorative icons inside modal */}
            <div className="absolute top-10 left-10 opacity-10">
              <Music className="w-20 h-20 text-secondary" />
            </div>
            <div className="absolute bottom-10 right-10 opacity-10">
              <Stars className="w-24 h-24 text-secondary" />
            </div>

            <div className="p-12 sm:p-20 text-center space-y-10 relative z-10">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-secondary/10 blur-xl rounded-full scale-150 animate-pulse" />
                <Heart className="w-24 h-24 text-secondary fill-current mx-auto animate-bounce" />
              </div>
              
              <DialogHeader>
                <DialogTitle className="text-5xl sm:text-7xl font-headline font-black text-foreground leading-tight tracking-tight">
                  Will You Be My <br />
                  <span className="text-secondary italic">Girlfriend?</span>
                </DialogTitle>
                <DialogDescription className="text-2xl font-body mt-8 text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Every step of our journey has led to this moment. I'd be honored to make it official and walk through life by your side.
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col sm:row gap-6 justify-center pt-10">
                <Button 
                  onClick={() => {
                    setProposalAccepted(true);
                    setShowModal(false);
                  }}
                  className="bg-secondary text-white px-16 py-10 rounded-full text-3xl font-headline font-bold hover:bg-secondary/90 shadow-[0_15px_40px_-10px_rgba(224,122,95,0.5)] h-auto hover:scale-105 transition-all"
                >
                  Yes, A Million Times Yes!
                </Button>
                
                <div className="relative inline-block">
                  <Button 
                    variant="outline" 
                    className="border-primary/40 text-muted-foreground px-12 py-8 rounded-full text-xl font-headline hover:bg-primary/5 h-auto transition-all"
                    style={{
                      transform: isHoveringNo ? `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)` : 'none'
                    }}
                    onMouseEnter={handleNoHover}
                    onClick={() => {
                      alert("Nice try, but I know you mean YES! ❤️");
                    }}
                  >
                    Let me think... (No)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
