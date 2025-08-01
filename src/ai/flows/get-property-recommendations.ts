'use server';

/**
 * @fileOverview Provides property recommendations based on a user prompt.
 *
 * - getPropertyRecommendations - A function that returns property recommendations.
 * - GetPropertyRecommendationsInput - The input type for the getPropertyRecommendations function.
 * - GetPropertyRecommendationsOutput - The return type for the getPropertyRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {properties, Property} from '@/lib/properties';
import {z} from 'genkit';

const GetPropertyRecommendationsInputSchema = z.object({
  prompt: z.string().describe('The user prompt describing what they are looking for.'),
});
export type GetPropertyRecommendationsInput = z.infer<typeof GetPropertyRecommendationsInputSchema>;

const GetPropertyRecommendationsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('A list of recommended property IDs.'),
  reasoning: z.string().describe('The reasoning behind the recommendations.')
});
export type GetPropertyRecommendationsOutput = z.infer<typeof GetPropertyRecommendationsOutputSchema>;


export async function getPropertyRecommendations(input: GetPropertyRecommendationsInput): Promise<GetPropertyRecommendationsOutput> {
  return getPropertyRecommendationsFlow(input);
}

const promptTemplate = ai.definePrompt({
  name: 'getPropertyRecommendationsPrompt',
  input: {
    schema: z.object({
      prompt: z.string(),
      properties: z.string(),
    }),
  },
  output: {schema: GetPropertyRecommendationsOutputSchema},
  prompt: `You are a real estate agent helping a user find a property.
Based on the user's request, recommend up to 3 properties from the following list.
Provide the reasoning for your recommendation.

User's request: {{{prompt}}}

Available properties (JSON format):
{{{properties}}}

Please return a list of property IDs for your recommendations.
`,
});

const getPropertyRecommendationsFlow = ai.defineFlow(
  {
    name: 'getPropertyRecommendationsFlow',
    inputSchema: GetPropertyRecommendationsInputSchema,
    outputSchema: GetPropertyRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await promptTemplate({
      ...input,
      properties: JSON.stringify(properties, null, 2),
    });
    return output!;
  }
);
