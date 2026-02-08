
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Gift, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function ProposalSection() {
  const [showModal, setShowModal] = useState(false);
  const [proposalAccepted, setProposalAccepted] = useState(false);

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background to-primary/20">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="relative inline-block">
          <Heart className="w-20 h-20 text-secondary fill-current animate-pulse mx-auto" />
          <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-primary animate-float" />
        </div>
        
        <h2 className="font-headline text-5xl sm:text-6xl font-black text-foreground">My Heartfelt Vow</h2>
        
        <div className="relative p-8 sm:p-12 bg-white/40 backdrop-blur-lg rounded-[2rem] border-2 border-primary/30 shadow-2xl">
          <p className="text-2xl sm:text-3xl font-body leading-relaxed text-foreground italic">
            "Sophia, from the moment we met, my world changed color. Every laugh we've shared, 
            every milestone we've hit, and every memory we've built has led me to this single moment. 
            I don't just want you for today; I want you for every tomorrow that follows. 
            I promise to hold your hand through the storms and dance with you in the light."
          </p>
        </div>

        <div className="pt-12">
          {!proposalAccepted ? (
            <Button 
              onClick={() => setShowModal(true)}
              className="group relative bg-secondary hover:bg-secondary/90 text-white px-12 py-8 rounded-full h-auto text-3xl font-headline font-bold shadow-[0_10px_40px_-10px_rgba(224,122,95,0.5)] transition-all hover:scale-105 active:scale-95"
            >
              <Gift className="mr-3 w-8 h-8 group-hover:rotate-12 transition-transform" />
              I Have A Question For You...
            </Button>
          ) : (
            <div className="animate-in zoom-in duration-1000 space-y-6">
              <h3 className="text-6xl font-headline font-black text-secondary uppercase tracking-widest">Yes! Forever!</h3>
              <p className="text-2xl text-muted-foreground font-body italic">"Together is a wonderful place to be."</p>
            </div>
          )}
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[600px] border-none bg-white p-0 overflow-hidden rounded-[2rem] shadow-2xl">
          <div className="h-4 bg-secondary w-full" />
          <div className="p-12 text-center space-y-8">
            <Heart className="w-16 h-16 text-secondary fill-current mx-auto animate-bounce" />
            <DialogHeader>
              <DialogTitle className="text-4xl sm:text-5xl font-headline font-black text-foreground">
                Will You Marry Me?
              </DialogTitle>
              <DialogDescription className="text-xl font-body mt-4 text-muted-foreground">
                There's nobody else I'd rather spend my lifetime with.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                onClick={() => {
                  setProposalAccepted(true);
                  setShowModal(false);
                }}
                className="bg-secondary text-white px-12 py-6 rounded-full text-2xl font-headline hover:bg-secondary/90 shadow-lg h-auto"
              >
                Yes, A Million Times Yes!
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-muted-foreground px-12 py-6 rounded-full text-xl font-headline hover:bg-primary/10 h-auto"
                onClick={() => {
                  // Playful 'no' logic: move the button or just a sweet nudge
                  alert("Nice try, but I know you mean YES! ❤️");
                }}
              >
                Let me think... (No)
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
