
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Camera } from "lucide-react";

export function PhotoGallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id !== 'hero-romantic' && img.id !== 'proposal-backdrop');

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Camera className="w-8 h-8 mx-auto text-secondary mb-4" />
        <h2 className="font-headline text-4xl font-bold text-foreground mb-4">Our Beautiful Moments</h2>
        <p className="text-lg text-muted-foreground italic">Capturing the magic in every second we've spent together.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleryImages.map((image, idx) => (
          <Card key={image.id} className="overflow-hidden group hover:scale-[1.02] transition-all duration-500 shadow-xl border-none">
            <div className="relative aspect-[4/3]">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardContent className="p-4 bg-white">
              <p className="font-body text-center text-muted-foreground font-medium">{image.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
