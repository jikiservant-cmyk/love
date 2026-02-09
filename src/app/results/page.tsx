
"use client";

import { useState } from "react";
import { useFirestore, useUser, useCollection, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy, where, collectionGroup } from "firebase/firestore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function ResultsPage() {
  const { firestore, auth } = useFirestore();
  const { user, isUserLoading } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;
    setLoginError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setLoginError("Invalid credentials. Only the creator can access results.");
    }
  };

  // Using collectionGroup to find all responses across all questions for this quiz
  const responsesQuery = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return query(
      collectionGroup(firestore, "responses"),
      where("quizId", "==", "ashley-proposal-quiz"),
      orderBy("createdAt", "desc")
    );
  }, [firestore, user]);

  const { data: responses, isLoading: responsesLoading } = useCollection(responsesQuery);

  if (isUserLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-secondary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl text-secondary">Creator Login</CardTitle>
            <p className="text-sm text-muted-foreground">Log in to view Ashley's responses</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  placeholder="jacob@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <Input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              {loginError && <p className="text-destructive text-xs">{loginError}</p>}
              <Button type="submit" className="w-full bg-secondary">Login</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to App
            </Button>
          </Link>
          <div className="flex items-center gap-2 text-secondary">
            <Heart className="w-6 h-6 fill-current" />
            <h1 className="font-headline text-3xl font-bold">Ashley's Answers</h1>
          </div>
          <Button variant="outline" onClick={() => auth?.signOut()}>Logout</Button>
        </header>

        {responsesLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid gap-4">
            {responses && responses.length > 0 ? (
              responses.map((resp) => (
                <Card key={resp.id} className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-headline text-xl text-foreground font-semibold">{resp.questionText}</h3>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                        {resp.createdAt?.toDate?.()?.toLocaleString() || "Just now"}
                      </span>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                      <p className="text-lg font-body italic text-secondary">
                        " {resp.response} "
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-20 text-muted-foreground">
                <p>No answers recorded yet. Ashley hasn't finished the quiz!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
