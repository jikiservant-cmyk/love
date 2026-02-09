"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart } from "lucide-react";

const questions = [
  {
    question: "Where was our very first date?",
    options: ["the holiday program room", "bahai temple", "basket ball court at MAK", "Under the city lights"],
    answer: 0,
  },
  {
    question: "What is my favorite thing about us?",
    options: ["Our long walks", "How we finish each other's sentences", "Our late-night talks", "Everything about us"],
    answer: 3,
  },
  {
    question: "Which song reminds me of you the most?",
    options: ["Our wedding song (future)", "That indie track we found", "the song i sang u in the night", "All love songs"],
    answer: 2,
  },
  {
    question: "Which was our best moment?",
    options: ["kiss under the trees", "at the ka school", "at bahai temple", "our long walk"],
    answer: 3,
  }
];

export function InteractiveQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === questions[currentStep].answer) {
      setScore(score + 1);
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <Sparkles className="w-8 h-8 mx-auto text-secondary mb-4" />
        <h2 className="font-headline text-4xl font-bold text-foreground mb-4">The 'Us' Challenge</h2>
        <p className="text-lg text-muted-foreground italic">Test how much you know about our shared world.</p>
      </div>

      <Card className="bg-white/40 backdrop-blur-md border-primary/20 shadow-xl overflow-hidden min-h-[400px] flex flex-col justify-center">
        {!finished ? (
          <CardContent className="p-8 sm:p-12 space-y-8">
            <div className="flex justify-between items-center text-sm font-semibold uppercase text-secondary tracking-widest mb-4">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-headline font-bold text-foreground text-center mb-8">
              {questions[currentStep].question}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {questions[currentStep].options.map((option, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  className="h-16 text-lg font-body hover:bg-primary/20 border-primary/30 rounded-2xl transition-all"
                  onClick={() => handleAnswer(idx)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        ) : (
          <CardContent className="p-8 sm:p-12 text-center space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-10 h-10 text-white fill-current" />
            </div>
            <h3 className="text-3xl font-headline font-bold text-foreground">
              {score === questions.length ? "Perfect Score! You're My Soulmate." : "You're Still My Favorite Person."}
            </h3>
            <p className="text-xl text-muted-foreground font-body">
              {score} out of {questions.length} correct. Every moment with you is a winning one.
            </p>
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 h-auto text-xl font-headline"
              onClick={() => {
                setCurrentStep(0);
                setScore(0);
                setFinished(false);
              }}
            >
              Play Again
            </Button>
          </CardContent>
        )}
      </Card>
    </section>
  );
}
