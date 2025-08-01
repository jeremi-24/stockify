"use client";

import { BorderBeamInput } from "@/components/ui/border-beam-input";
import { Code, Copy } from "lucide-react";

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

const codeString = `
import { cn } from "@/lib/utils";
import React from "react";

interface BorderBeamInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  containerClassName?: string;
}

export const BorderBeamInput = React.forwardRef<
  HTMLInputElement,
  BorderBeamInputProps
>(({ className, containerClassName, ...props }, ref) => {
  return (
    <div
      className={cn(
        "group relative w-full",
        containerClassName
      )}
    >
      <div
        className="absolute -inset-[1.5px] rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100"
        aria-hidden="true"
      />
      <input
        ref={ref}
        className={cn(
          "relative w-full rounded-lg border border-transparent bg-background px-4 py-2 text-base text-foreground transition-shadow duration-200 placeholder:text-muted-foreground focus:outline-none focus:shadow-[0_0_0_2px_hsl(var(--background))]",
          className
        )}
        {...props}
      />
    </div>
  );
});

BorderBeamInput.displayName = "BorderBeamInput";
`;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Mon Entreprise</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-base font-medium hover:underline underline-offset-4"
            href="#"
          >
            Fonctionnalités
          </a>
          <a
            className="text-base font-medium hover:underline underline-offset-4"
            href="#"
          >
            Tarifs
          </a>
          <a
            className="text-base font-medium hover:underline underline-offset-4"
            href="#"
          >
            À propos
          </a>
          <a
            className="text-base font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Créez des sites web encore plus rapidement
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Avec des composants de qualité production basés sur Tailwind
                  CSS.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Input avec Faisceau de Bordure
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Cliquez sur le champ de saisie pour voir l'animation du
                    faisceau de bordure. C'est un excellent moyen d'attirer
                    l'attention sur les champs actifs.
                  </p>
                </div>
                <div className="w-full max-w-sm">
                  <BorderBeamInput
                    type="text"
                    placeholder="Votre email..."
                  />
                </div>
              </div>
              <div className="relative rounded-xl bg-secondary/50">
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => navigator.clipboard.writeText(codeString)}
                    className="p-2 rounded-lg bg-background/70 hover:bg-background transition-colors"
                  >
                    <Copy className="w-5 h-5" />
                    <span className="sr-only">Copier le code</span>
                  </button>
                </div>
                <pre className="p-4 overflow-auto text-sm text-left bg-transparent rounded-lg">
                  <code className="font-mono text-white">{codeString}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
