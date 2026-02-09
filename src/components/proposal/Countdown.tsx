
"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Setting a target date 1000 years into the future
    const targetDate = new Date();
    targetDate.setFullYear(targetDate.getFullYear() + 1000);
    const targetTime = targetDate.getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        return { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const totalSeconds = Math.floor(difference / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      
      const years = Math.floor(totalDays / 365);
      const days = totalDays % 365;
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      return { years, days, hours, minutes, seconds };
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
        <span className="font-headline text-xl font-semibold uppercase tracking-widest text-center">Countdown to Forever</span>
        <Heart className="fill-current w-5 h-5" />
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {[
          { label: "Years", value: timeLeft.years },
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((unit) => (
          <Card key={unit.label} className="p-4 sm:p-6 flex flex-col items-center min-w-[90px] sm:min-w-[110px] bg-white/50 backdrop-blur-sm border-primary/20 shadow-lg transition-transform hover:scale-105">
            <span className="text-2xl sm:text-4xl font-headline font-bold text-secondary">
              {String(unit.value).padStart(unit.label === "Years" ? 4 : 2, "0")}
            </span>
            <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {unit.label}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}
