'use client';

import { useActionState, useFormStatus } from 'react-dom';
import { enhanceDescriptionAction, type EnhanceFormState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Sparkles, Loader2 } from 'lucide-react';

const initialState: EnhanceFormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Amélioration...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Améliorer avec l'IA
        </>
      )}
    </Button>
  );
}

export function EnhanceDescriptionForm() {
  const [state, formAction] = useActionState(enhanceDescriptionAction, initialState);

  return (
    <form action={formAction}>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Améliorateur de description IA</CardTitle>
          <CardDescription>
            Fournissez quelques détails sur une propriété, et notre IA rédigera une description convaincante pour vous.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="propertyType">Type de propriété</Label>
            <Input id="propertyType" name="propertyType" placeholder="Ex: Maison, Appartement, Condo" />
            {state.errors?.propertyType && <p className="text-sm text-destructive">{state.errors.propertyType[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Emplacement</Label>
            <Input id="location" name="location" placeholder="Ex: Green Valley, Metropolis" />
            {state.errors?.location && <p className="text-sm text-destructive">{state.errors.location[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="keyFeatures">Caractéristiques clés (séparées par des virgules)</Label>
            <Input id="keyFeatures" name="keyFeatures" placeholder="Ex: Grand jardin, Cheminée, Vue sur la ville" />
            {state.errors?.keyFeatures && <p className="text-sm text-destructive">{state.errors.keyFeatures[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description originale</Label>
            <Textarea id="description" name="description" placeholder="Entrez la description actuelle de la propriété..." rows={6} />
            {state.errors?.description && <p className="text-sm text-destructive">{state.errors.description[0]}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <SubmitButton />
          {state.message && !state.enhancedDescription && <p className="text-sm text-destructive">{state.message}</p>}
        </CardFooter>
      </Card>
      
      {state.enhancedDescription && (
        <Card className="w-full max-w-2xl mt-8 animate-fade-in">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">Description améliorée</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg whitespace-pre-wrap font-body">{state.enhancedDescription}</p>
          </CardContent>
        </Card>
      )}
    </form>
  );
}
