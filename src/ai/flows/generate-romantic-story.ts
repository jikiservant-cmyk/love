
'use server';

/**
 * @fileOverview Generates a personalized and heartwarming romantic story.
 *
 * - generateRomanticStory - A function that generates a romantic story.
 * - GenerateRomanticStoryInput - The input type for the generateRomanticStory function.
 * - GenerateRomanticStoryOutput - The return type for the generateRomanticStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRomanticStoryInputSchema = z.object({
  milestones: z
    .string()
    .describe('Specific milestones in the relationship (e.g., first date, first trip).'),
  sharedMemories: z
    .string()
    .describe('Shared memories (e.g., funny moments, significant conversations).'),
  girlfriendName: z.string().describe('The name of your girlfriend.'),
  yourName: z.string().describe('Your name.'),
});
export type GenerateRomanticStoryInput = z.infer<typeof GenerateRomanticStoryInputSchema>;

const GenerateRomanticStoryOutputSchema = z.object({
  story: z.string().describe('The generated romantic story.'),
});
export type GenerateRomanticStoryOutput = z.infer<typeof GenerateRomanticStoryOutputSchema>;

export async function generateRomanticStory(
  input: GenerateRomanticStoryInput
): Promise<GenerateRomanticStoryOutput> {
  return generateRomanticStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRomanticStoryPrompt',
  input: {schema: GenerateRomanticStoryInputSchema},
  output: {schema: GenerateRomanticStoryOutputSchema},
  prompt: `You are a professional writer specializing in crafting personalized romantic stories.

  Write a heartwarming and engaging story about {{yourName}} and {{girlfriendName}}, incorporating the following milestones and shared memories to show {{yourName}}'s heartfelt commitment to {{girlfriendName}}:

  Milestones: {{{milestones}}}
  Shared Memories: {{{sharedMemories}}}

  The story should be unique, and the tone should be sincere and filled with love.
  Please use a narrative tone, as if addressing {{girlfriendName}} directly with the story.
  The story should have at least 500 words.
  End the story on a poignant, reflective note suitable for asking her to be your girlfriend and making your relationship official.
  `,
});

const generateRomanticStoryFlow = ai.defineFlow(
  {
    name: 'generateRomanticStoryFlow',
    inputSchema: GenerateRomanticStoryInputSchema,
    outputSchema: GenerateRomanticStoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
