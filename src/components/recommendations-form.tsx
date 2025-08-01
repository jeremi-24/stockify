'use client';

import { useFormStatus } from 'react-dom';
import { type RecommendationFormState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Lightbulb, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg"
      className="absolute right-2.5 top-1/2 -translate-y-1/2"
      aria-label="Obtenir des recommandations"
    >
      {pending ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <Lightbulb className="h-5 w-5" />
      )}
    </Button>
  );
}

type RecommendationsFormProps = {
  formAction: (payload: FormData) => void;
  state: RecommendationFormState;
  className?: string;
};

export function RecommendationsForm({ formAction, state, className }: RecommendationsFormProps) {
  return (
    <form action={formAction} className={cn("w-full", className)}>
      <Card className="shadow-2xl rounded-xl">
        <CardContent className="p-0">
          <div className="relative flex items-center">
            <Textarea
              id="prompt"
              name="prompt"
              placeholder="Ex: 'Je cherche un endroit calme en banlieue avec un grand jardin pour mon chien' ou 'Un appartement moderne proche de la vie nocturne'"
              rows={3}
              className="w-full text-base border-2 rounded-xl focus-visible:ring-accent pr-20 py-4 pl-4 resize-none"
              aria-label="Votre propriété idéale"
            />
            <SubmitButton />
          </div>
        </CardContent>
      </Card>
      {state.errors?.prompt && (
        <p className="mt-2 text-sm text-destructive">{state.errors.prompt[0]}</p>
      )}
      {state.message && !state.recommendations && (
        <p className="mt-2 text-sm text-destructive">{state.message}</p>
      )}
    </form>
  );
}
