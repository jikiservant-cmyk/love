
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generateRomanticStory } from "@/ai/flows/generate-romantic-story";
import { BookOpen, Loader2, Sparkles, Quote } from "lucide-react";

export function StorySection() {
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    yourName: "",
    girlfriendName: "",
    milestones: "",
    sharedMemories: "",
  });

  const handleGenerate = async () => {
    if (!formData.yourName || !formData.girlfriendName) return;
    setLoading(true);
    try {
      const result = await generateRomanticStory(formData);
      setStory(result.story);
    } catch (error) {
      console.error("Story generation failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <BookOpen className="w-8 h-8 mx-auto text-secondary mb-4" />
        <h2 className="font-headline text-4xl font-bold text-foreground mb-4">The Story of Us</h2>
        <p className="text-lg text-muted-foreground italic">Let AI weave our memories into a masterpiece.</p>
      </div>

      {!story ? (
        <Card className="border-primary/20 bg-white/60 backdrop-blur-md shadow-2xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-secondary flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Write Your Narrative
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Your Name</label>
                <Input 
                  value={formData.yourName} 
                  onChange={(e) => setFormData({...formData, yourName: e.target.value})}
                  placeholder="e.g. Liam"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Her Name</label>
                <Input 
                  value={formData.girlfriendName} 
                  onChange={(e) => setFormData({...formData, girlfriendName: e.target.value})}
                  placeholder="e.g. Sophia"
                  className="bg-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Key Milestones</label>
              <Textarea 
                value={formData.milestones}
                onChange={(e) => setFormData({...formData, milestones: e.target.value})}
                placeholder="Where did you meet? Your first holiday? The moment you knew..."
                className="min-h-[100px] bg-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Shared Memories</label>
              <Textarea 
                value={formData.sharedMemories}
                onChange={(e) => setFormData({...formData, sharedMemories: e.target.value})}
                placeholder="The inside jokes, the rainy days, the simple laughs..."
                className="min-h-[100px] bg-white"
              />
            </div>
            <Button 
              onClick={handleGenerate} 
              disabled={loading || !formData.yourName || !formData.girlfriendName}
              className="w-full h-12 bg-secondary hover:bg-secondary/90 text-white font-headline text-lg rounded-full transition-all"
            >
              {loading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Weaving the magic...</> : "Generate Our Story"}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-none bg-white/80 backdrop-blur-sm shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
          <CardContent className="p-8 sm:p-12 space-y-8">
            <Quote className="w-12 h-12 text-primary/30 absolute top-8 right-8" />
            <div className="prose prose-pink max-w-none">
              {story.split('\n').map((paragraph, i) => (
                <p key={i} className="text-xl leading-relaxed text-foreground/90 font-body mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="text-center pt-8 border-t border-primary/10">
              <Button 
                variant="outline" 
                onClick={() => setStory(null)}
                className="rounded-full border-secondary text-secondary hover:bg-secondary/10"
              >
                Re-write our story
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
