"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";

function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.21621 3.51351C6.21621 2.2158 7.26551 1.1665 8.56322 1.1665H18.8335C20.1312 1.1665 21.1805 2.2158 21.1805 3.51351V13.7838C21.1805 15.0815 20.1312 16.1308 18.8335 16.1308H8.56322C7.26551 16.1308 6.21621 15.0815 6.21621 13.7838V3.51351Z"
        className="fill-red-500"
      />
      <path
        d="M2.81944 7.82021C2.81944 6.5225 3.86874 5.47321 5.16645 5.47321H15.4367C16.7344 5.47321 17.7837 6.5225 17.7837 7.82021V18.0905C17.7837 19.3882 16.7344 20.4375 15.4367 20.4375H5.16645C3.86874 20.4375 2.81944 19.3882 2.81944 18.0905V7.82021Z"
        className="fill-red-500"
      />
    </svg>
  );
}

const logos = [
  { name: 'Apex', component: (props: any) => <svg {...props} viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M74.08 197.5a64.21 64.21 0 0 1-4.71-12.35a8 8 0 0 1 15.49-4.3A48.24 48.24 0 0 0 128 200a48.25 48.25 0 0 0 43.14-23.15a8 8 0 0 1 15.49 4.3a64.21 64.21 0 0 1-4.71 12.35a87.81 87.81 0 0 1-107.84 0M180 140a8 8 0 0 1-8 8H84a8 8 0 0 1 0-16h88a8 8 0 0 1 8 8m-20-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-64 0a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/></svg> },
  { name: 'Celestial', component: (props: any) => <svg {...props} viewBox="0 0 256 256"><path fill="currentColor" d="M203.2 173.81a8 8 0 0 1-7.06 12.11l-58.85-24.16a80.11 80.11 0 1 1 29.3-51.08a8 8 0 1 1-15.09-5.34a64.09 64.09 0 1 0-22.18 43l53.88 22.14a7.82 7.82 0 0 1 4.51 1.28a8 8 0 0 1 2.55 10.83m-60.57-2.61a8 8 0 0 1 6.51 10.15a48 48 0 1 0-71-47.38a8 8 0 1 1-15.18-5a64 64 0 1 1 86.18 48.74a8 8 0 0 1-6.51-10.15a8 8 0 0 1 10-6.36"/></svg> },
  { name: 'Echo', component: (props: any) => <svg {...props} viewBox="0 0 256 256"><path fill="currentColor" d="M128 32a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m45.66-109.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L108 128.69l34.34-34.35a8 8 0 0 1 11.32 0"/></svg> },
  { name: 'Quantum', component: (props: any) => <svg {...props} viewBox="0 0 256 256"><path fill="currentColor" d="m224.43 145.41l-40.05-20a8 8 0 0 0-9.45 1.33l-22.82 22.82a80 80 0 0 1-46-46l22.82-22.82a8 8 0 0 0 1.33-9.45l-20-40.05a8 8 0 0 0-9.45-5.69L64 54.71a8 8 0 0 0-5.69 9.45l20 40a8 8 0 0 0 9.48 5.72l28.48-7.12a8 8 0 0 0 6.13-6.13l7.12-28.48a8 8 0 0 0-5.72-9.48l-40-20a8 8 0 0 0-9.45 5.69L48.59 81a8 8 0 0 0 5.69 9.45l40.05 20a8 8 0 0 0 9.45-1.33l22.82-22.82a80 80 0 0 1 46 46l-22.82 22.82a8 8 0 0 0-1.33 9.45l20 40.05a8 8 0 0 0 9.45 5.69L208 181.29a8 8 0 0 0 9.45-5.69l20-40a8 8 0 0 0-5.72-9.48l-28.48-7.12a8 8 0 0 0-6.13 6.13l-7.12 28.48a8 8 0 0 0 5.72 9.48l40 20a8 8 0 0 0 9.45-5.69l12.14-36.41a8 8 0 0 0-5.69-9.45Z"/></svg> },
  { name: 'Pulse', component: (props: any) => <svg {...props} viewBox="0 0 256 256"><path fill="currentColor" d="M128 32a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m75-80a8 8 0 0 1-8 8h-28.49l-14.08 35.2a8 8 0 1 1-15.06-6l18.82-47.05H128a8 8 0 0 1 0-16h22.77l-18.82-47.05a8 8 0 0 1 15.06-6L164.49 120H192a8 8 0 0 1 8 8"/></svg> },
  { name: 'Zenith', component: (props: any) => <svg {...props} viewBox="0 0 256 256"><path fill="currentColor" d="M228.44 100.22a8 8 0 0 0-8.66-1.16l-36.43 14.57a80.06 80.06 0 0 0-66.69 0L80.22 99.06a8 8 0 1 0-7.5 14.56l36.43 14.57a80.06 80.06 0 0 0 0 15.18l-36.43 14.57a8 8 0 1 0 7.5 14.56l36.43-14.57a80.06 80.06 0 0 0 66.69 0l36.43 14.57a8 8 0 1 0 7.5-14.56l-36.43-14.57a80.06 80.06 0 0 0 0-15.18l36.43-14.57a8 8 0 0 0 1.16-13.4Z"/></svg> },
];

const Logos = () => (
  <>
    {logos.map((logo, index) => (
      <div key={index} className="flex-shrink-0 w-40">
        <logo.component className="h-10 w-auto text-muted-foreground" />
      </div>
    ))}
  </>
);

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3e3e3e_1px,transparent_1px)] [background-size:16px_16px]"></div>
       <div className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-br from-background via-indigo-950/40 to-background"></div>

      <header className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2">
            <LogoIcon className="h-6 w-6" />
            <span className="text-xl font-bold">Stockify</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground">
                Fonctionnalités <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Gestion des stocks</DropdownMenuItem>
                <DropdownMenuItem>Commandes</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground">
                Cas d'usage <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Pour les PME</DropdownMenuItem>
                <DropdownMenuItem>Pour les e-commerçants</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Nouveautés
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Tarifs
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Connexion</Button>
          <Button className="rounded-full bg-red-500 px-6 font-semibold text-white transition-colors hover:bg-red-600">
            Inscription
          </Button>
        </div>
      </header>

      <main className="container mx-auto flex flex-col items-center justify-center px-4 pt-24 pb-12 text-center md:px-6 md:pt-32 md:pb-16">
        <div className="mb-8 flex items-center gap-2 rounded-full bg-secondary/70 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
          <span className="rounded-full bg-primary/20 p-1 text-primary">
            <Sparkles className="h-4 w-4 fill-primary" />
          </span>
          <span className="text-foreground">NOUVEAU</span> Intégration de l'IA pour prédire vos ventes
        </div>

        <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
         Gardez le contrôle <br />
          <span className="bg-gradient-to-b from-red-500 to-orange-500 bg-clip-text text-transparent">
            sur tout
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Stockify centralise votre inventaire, suit vos commandes, et vous permet de gérer toute votre boutique en un seul endroit.
        </p>

        <Button size="lg" className="mt-8 rounded-full bg-red-500 px-8 text-lg font-semibold text-white transition-colors hover:bg-red-600">
          Commencez gratuitement
        </Button>
      </main>

      <section className="container mx-auto px-4 md:px-6 pb-24">
        <Image
          src="https://placehold.co/1200x600.png"
          alt="Aperçu du SaaS"
          width={1200}
          height={600}
          className="mx-auto rounded-xl shadow-2xl"
          data-ai-hint="dashboard screenshot"
        />
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-center text-lg font-semibold text-muted-foreground">
            Reconnu par les meilleures entreprises du monde
            </h2>
            <div className="relative mt-8">
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"
                aria-hidden="true"
              ></div>
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"
                aria-hidden="true"
              ></div>
              <div className="overflow-hidden">
                <div className="flex w-max animate-marquee items-center gap-16 [--duration:40s] hover:[animation-play-state:paused]">
                    <Logos />
                    <Logos />
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );

    