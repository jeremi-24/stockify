'use server';

import { z } from 'zod';
import { enhancePropertyDescription } from '@/ai/flows/enhance-property-description';
import { getPropertyRecommendations } from '@/ai/flows/get-property-recommendations';

const EnhanceFormSchema = z.object({
  description: z.string().min(10, 'La description doit comporter au moins 10 caractères.'),
  propertyType: z.string().min(1, 'Le type de propriété est requis.'),
  location: z.string().min(1, "L'emplacement est requis."),
  keyFeatures: z.string().min(1, 'Veuillez lister au moins une caractéristique clé.'),
});

export type EnhanceFormState = {
  message: string;
  enhancedDescription?: string;
  errors?: {
    description?: string[];
    propertyType?: string[];
    location?: string[];
    keyFeatures?: string[];
  };
};

export async function enhanceDescriptionAction(
  prevState: EnhanceFormState,
  formData: FormData
): Promise<EnhanceFormState> {
  const validatedFields = EnhanceFormSchema.safeParse({
    description: formData.get('description'),
    propertyType: formData.get('propertyType'),
    location: formData.get('location'),
    keyFeatures: formData.get('keyFeatures'),
  });

  if (!validatedFields.success) {
    return {
      message: "Échec de l'amélioration de la description. Veuillez vérifier les champs.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await enhancePropertyDescription(validatedFields.data);
    return {
      message: 'Description améliorée avec succès!',
      enhancedDescription: result.enhancedDescription,
    };
  } catch (error) {
    console.error("L'amélioration par IA a échoué:", error);
    return {
      message: 'Une erreur inattendue est survenue. Veuillez réessayer plus tard.',
    };
  }
}

const RecommendationFormSchema = z.object({
  prompt: z.string().min(10, 'Le prompt doit comporter au moins 10 caractères.'),
});

export type RecommendationFormState = {
  message: string;
  recommendations?: string[];
  reasoning?: string;
  errors?: {
    prompt?: string[];
  };
};

export async function getRecommendationsAction(
  prevState: RecommendationFormState,
  formData: FormData
): Promise<RecommendationFormState> {
  const validatedFields = RecommendationFormSchema.safeParse({
    prompt: formData.get('prompt'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Impossible d\'obtenir des recommandations. Veuillez vérifier le prompt.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await getPropertyRecommendations(validatedFields.data);
    return {
      message: 'Recommandations générées avec succès!',
      recommendations: result.recommendations,
      reasoning: result.reasoning,
    };
  } catch (error) {
    console.error('La recommandation par IA a échoué:', error);
    return {
      message: 'Une erreur inattendue est survenue. Veuillez réessayer plus tard.',
    };
  }
}
