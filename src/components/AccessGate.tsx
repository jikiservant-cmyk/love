"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Diamond, Lock } from "lucide-react";

interface AccessGateProps {
  onVerify: () => void;
}

const questions = [
  {
    id: 1,
    question: "Client Identification: Who is jacob'eve?",
    answers: ["ashley", "najjuko", "me"],
    hint: "Identify yourself to proceed."
  },
  {
    id: 2,
    question: "Since you are jacob's eve, when is the serpent tempting u to eat the forbidden fruit?",
    anyAnswer: true,
    hint: "Answer carefully..."
  }
];

export function AccessGate({ onVerify }: AccessGateProps) {
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentQuestion = questions[step];
    
    if (currentQuestion.anyAnswer) {
      if (step < questions.length - 1) {
        setStep(step + 1);
        setInputValue("");
        setError(false);
      } else {
        onVerify();
      }
      return;
    }

    const val = inputValue.toLowerCase().trim();
    if (currentQuestion.answers?.some(a => a.toLowerCase() === val)) {
      if (step < questions.length - 1) {
        setStep(step + 1);
        setInputValue("");
        setError(false);
      } else {
        onVerify();
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      
      <Card className="w-full max-w-md border-primary/20 shadow-2xl bg-white/80 backdrop-blur-xl">
        <CardContent className="pt-10 pb-12 px-8 text-center space-y-8">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Diamond className="w-8 h-8 text-secondary animate-pulse" />
            </div>
            <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground">
              Client Verification
            </h1>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">
              The Ashley Collection • Private Access
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/70 block text-left">
                {questions[step].question}
              </label>
              <Input
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setError(false);
                }}
                placeholder="Enter your response..."
                className={`h-12 bg-white border-primary/20 focus:ring-secondary ${error ? 'border-destructive' : ''}`}
                autoFocus
              />
              {error && (
                <p className="text-destructive text-xs mt-1 text-left animate-bounce">
                  Verification Failed. Please try again.
                </p>
              )}
            </div>

            <Button 
              type="submit"
              className="w-full h-12 bg-secondary hover:bg-secondary/90 text-white font-headline text-lg rounded-full shadow-lg transition-all active:scale-95"
            >
              Verify Identity
            </Button>
          </form>

          <div className="pt-4 flex items-center justify-center gap-2 text-muted-foreground/50">
            <Lock className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-tighter">Secure Encrypted Session</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
