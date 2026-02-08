
"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-02-14T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 py-12">
      <div className="flex items-center gap-2 text-secondary animate-pulse">
        <Heart className="fill-current" />
        <span className="font-headline text-xl font-semibold uppercase tracking-widest">Countdown to Forever</span>
        <Heart className="fill-current" />
      </div>
      
      <div className="flex gap-4 sm:gap-8">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((unit) => (
          <Card key={unit.label} className="p-4 sm:p-6 flex flex-col items-center min-w-[80px] sm:min-w-[120px] bg-white/50 backdrop-blur-sm border-primary/20 shadow-lg">
            <span className="text-3xl sm:text-5xl font-headline font-bold text-secondary">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-tighter">
              {unit.label}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}
