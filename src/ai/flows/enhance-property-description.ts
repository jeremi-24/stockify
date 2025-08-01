// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview Enhances property descriptions using AI to make them more appealing to potential buyers.
 *
 * - enhancePropertyDescription - A function that enhances a property description.
 * - EnhancePropertyDescriptionInput - The input type for the enhancePropertyDescription function.
 * - EnhancePropertyDescriptionOutput - The return type for the enhancePropertyDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhancePropertyDescriptionInputSchema = z.object({
  description: z.string().describe('The original property description.'),
  propertyType: z.string().describe('The type of property (e.g., house, apartment, condo).'),
  location: z.string().describe('The location of the property.'),
  keyFeatures: z.string().describe('Key features of the property (e.g., hardwood floors, updated kitchen).'),
});
export type EnhancePropertyDescriptionInput = z.infer<typeof EnhancePropertyDescriptionInputSchema>;

const EnhancePropertyDescriptionOutputSchema = z.object({
  enhancedDescription: z.string().describe('The enhanced property description.'),
});
export type EnhancePropertyDescriptionOutput = z.infer<typeof EnhancePropertyDescriptionOutputSchema>;

export async function enhancePropertyDescription(input: EnhancePropertyDescriptionInput): Promise<EnhancePropertyDescriptionOutput> {
  return enhancePropertyDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhancePropertyDescriptionPrompt',
  input: {schema: EnhancePropertyDescriptionInputSchema},
  output: {schema: EnhancePropertyDescriptionOutputSchema},
  prompt: `Vous êtes un rédacteur immobilier expert. Améliorez la description de la propriété suivante pour la rendre plus attrayante pour les acheteurs potentiels. Tenez compte du type de propriété, de l'emplacement et des caractéristiques clés pour créer une description convaincante et informative. Rédigez en français.

Description originale: {{{description}}}
Type de propriété: {{{propertyType}}}
Emplacement: {{{location}}}
Caractéristiques clés: {{{keyFeatures}}}

Description améliorée:`,
});

const enhancePropertyDescriptionFlow = ai.defineFlow(
  {
    name: 'enhancePropertyDescriptionFlow',
    inputSchema: EnhancePropertyDescriptionInputSchema,
    outputSchema: EnhancePropertyDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
