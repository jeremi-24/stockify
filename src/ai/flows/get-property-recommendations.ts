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
  prompt: `Vous êtes un agent immobilier qui aide un utilisateur à trouver une propriété.
En fonction de la demande de l'utilisateur, recommandez jusqu'à 3 propriétés de la liste suivante.
Fournissez le raisonnement de votre recommandation. La réponse doit être en français.

Demande de l'utilisateur: {{{prompt}}}

Propriétés disponibles (format JSON):
{{{properties}}}

Veuillez retourner une liste d'ID de propriété pour vos recommandations.
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
