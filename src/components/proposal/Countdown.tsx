
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Setting a target date in the future to show the countdown active
    // You can change this to any special date for you and Ashley!
    const targetDate = new Date("2025-06-01T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex flex-col items-center gap-6 py-12">
      <div className="flex items-center gap-2 text-secondary animate-pulse">
        <Heart className="fill-current w-5 h-5" />
        <span className="font-headline text-xl font-semibold uppercase tracking-widest">Countdown to Forever</span>
        <Heart className="fill-current w-5 h-5" />
      </div>
      
      <div className="flex gap-4 sm:gap-8">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((unit) => (
          <Card key={unit.label} className="p-4 sm:p-6 flex flex-col items-center min-w-[80px] sm:min-w-[120px] bg-white/50 backdrop-blur-sm border-primary/20 shadow-lg transition-transform hover:scale-105">
            <span className="text-3xl sm:text-5xl font-headline font-bold text-secondary">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {unit.label}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}
