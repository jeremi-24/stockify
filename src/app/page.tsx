
'use client';

import { useActionState } from 'react';
import Image from 'next/image';
import { RecommendationsForm } from '@/components/recommendations-form';
import { PropertyCard } from '@/components/property-card';
import { properties } from '@/lib/properties';
import { RecommendationFormState, getRecommendationsAction } from '@/lib/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MessageSquare, Search, Users } from 'lucide-react';

const initialState: RecommendationFormState = {
  message: '',
};

export default function Home() {
  const [state, formAction] = useActionState(getRecommendationsAction, initialState);

  const recommendedProperties = state.recommendations
    ? properties.filter(p => state.recommendations?.includes(p.id))
    : [];

  const marqueeColors = [
    'bg-primary/20',
    'bg-accent/20',
    'bg-primary/30',
    'bg-accent/30',
    'bg-primary/40',
  ];

  return (
    <div className="flex flex-col">
      <section id="ai-search" className="w-full py-20 md:py-32 bg-transparent relative overflow-hidden px-4 md:px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full-squircle animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full-squircle animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] bg-accent/5 rounded-full-squircle blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">Trouvez votre maison ou chambre grâce à l'IA</h1>
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

      {(state.reasoning || recommendedProperties.length > 0) && (
        <section className="w-full py-16 md:py-24 bg-transparent px-4 md:px-6 my-16">
          <div className="container mx-auto px-4 md:px-6">
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
      )}

      <section className="w-full py-20 md:py-32 bg-transparent my-16 px-4 md:px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-w-lg">
                <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Toutes vos annonces au même endroit.</h2>
                <p className="text-lg text-muted-foreground">
                    Gérez et consultez facilement toutes vos annonces immobilières depuis une seule interface simple et intuitive. Ne perdez plus jamais le fil de vos propriétés.
                </p>
                <ul className="space-y-4 text-lg mt-8">
                    <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-accent" />
                        <span>Centralisation de toutes vos offres.</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-accent" />
                        <span>Interface simple et épurée.</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-accent" />
                        <span>Gain de temps et d'efficacité.</span>
                    </li>
                </ul>
            </div>
            <div className="relative w-full h-96 group [mask-image:linear-gradient(to_right,transparent_5%,white_25%,white_75%,transparent_95%)]">
              <div className="flex animate-marquee group-hover:pause">
                  {[...marqueeColors, ...marqueeColors].map((color, index) => (
                      <div key={index} className="flex-shrink-0 w-80 h-80 p-4">
                        <div className={`w-full h-full rounded-xl shadow-2xl ${color}`} />
                      </div>
                  ))}
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
