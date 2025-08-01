
'use client';

import { useActionState } from 'react';
import { RecommendationsForm } from '@/components/recommendations-form';
import { PropertyCard } from '@/components/property-card';
import { properties } from '@/lib/properties';
import { RecommendationFormState, getRecommendationsAction } from '@/lib/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const initialState: RecommendationFormState = {
  message: '',
};

export default function Home() {
  const [state, formAction] = useActionState(getRecommendationsAction, initialState);

  const recommendedProperties = state.recommendations
    ? properties.filter(p => state.recommendations?.includes(p.id))
    : [];

  return (
    <>
      <section className="w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                Trouvez la maison de vos <span className="text-accent">rêves</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Notre IA vous aide à découvrir des propriétés qui correspondent parfaitement à votre style de vie. Décrivez simplement ce que vous cherchez.
              </p>
            </div>
            <div className="w-full max-w-2xl">
              <RecommendationsForm formAction={formAction} state={state} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {state.reasoning && (
            <div className="w-full max-w-4xl mx-auto mb-12 animate-fade-in">
              <Card>
                  <CardHeader>
                      <CardTitle className="font-headline text-2xl text-accent">Raisonnement de l'IA</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p className="text-lg whitespace-pre-wrap font-body">{state.reasoning}</p>
                  </CardContent>
              </Card>
            </div>
          )}

          {recommendedProperties.length > 0 && (
            <div className="w-full max-w-6xl mx-auto animate-fade-in">
              <h2 className="font-headline text-3xl font-bold text-primary mb-8 text-center">Voici vos recommandations :</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recommendedProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
