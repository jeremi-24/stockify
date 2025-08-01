'use server';

import { z } from 'zod';
import { enhancePropertyDescription } from '@/ai/flows/enhance-property-description';

const EnhanceFormSchema = z.object({
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  propertyType: z.string().min(1, 'Property type is required.'),
  location: z.string().min(1, 'Location is required.'),
  keyFeatures: z.string().min(1, 'Please list at least one key feature.'),
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
      message: 'Failed to enhance description. Please check the fields.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await enhancePropertyDescription(validatedFields.data);
    return {
      message: 'Description enhanced successfully!',
      enhancedDescription: result.enhancedDescription,
    };
  } catch (error) {
    console.error('AI enhancement failed:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
