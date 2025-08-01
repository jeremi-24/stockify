'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getRecommendationsAction, type RecommendationFormState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Lightbulb, Loader2 } from 'lucide-react';
import { PropertyCard } from './property-card';
import { properties } from '@/lib/properties';

const initialState: RecommendationFormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Obtention des recommandations...
        </>
      ) : (
        <>
          <Lightbulb className="mr-2 h-4 w-4" />
          Obtenir des recommandations
        </>
      )}
    </Button>
  );
}

export function RecommendationsForm() {
  const [state, formAction] = useFormState(getRecommendationsAction, initialState);

  const recommendedProperties = state.recommendations
    ? properties.filter(p => state.recommendations?.includes(p.id))
    : [];

  return (
    <div className="w-full max-w-4xl">
      <form action={formAction} className="w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Recommandations de propriétés par IA</CardTitle>
            <CardDescription>
              Décrivez ce que vous recherchez dans une propriété, et notre IA vous suggérera les meilleures correspondances.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="prompt">Votre propriété idéale</Label>
              <Textarea id="prompt" name="prompt" placeholder="Ex: 'Je cherche un endroit calme en banlieue avec un grand jardin pour mon chien' ou 'Un appartement moderne proche de la vie nocturne'" rows={4} />
              {state.errors?.prompt && <p className="text-sm text-destructive">{state.errors.prompt[0]}</p>}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <SubmitButton />
            {state.message && !state.recommendations && <p className="text-sm text-destructive">{state.message}</p>}
          </CardFooter>
        </Card>
      </form>
      
      {state.reasoning && (
        <Card className="w-full mt-8 animate-fade-in">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent">Raisonnement de l'IA</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg whitespace-pre-wrap font-body">{state.reasoning}</p>
            </CardContent>
        </Card>
      )}

      {recommendedProperties.length > 0 && (
        <div className="mt-8 animate-fade-in">
          <h2 className="font-headline text-3xl font-bold text-primary mb-6">Voici vos recommandations:</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
