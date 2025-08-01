
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown, Sparkles, Twitter, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


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
  { name: 'APEX' },
  { name: 'CELESTIAL' },
  { name: 'ECHO' },
  { name: 'QUANTUM' },
];

const testimonials = [
    {
      name: "Jean Dupont",
      title: "Gérant de e-commerce",
      avatar: "https://placehold.co/100x100.png",
      text: "Stockify a transformé ma gestion des stocks. Je gagne un temps précieux et j'ai réduit mes erreurs de 50%. C'est un outil indispensable pour tout commerçant.",
    },
    {
      name: "Marie Curie",
      title: "Directrice des opérations",
      avatar: "https://placehold.co/100x100.png",
      text: "L'intégration du point de vente avec l'inventaire est un véritable game-changer. Tout est synchronisé en temps réel, c'est incroyablement efficace.",
    },
    {
      name: "Pierre Martin",
      title: "Responsable d'entrepôt",
      avatar: "https://placehold.co/100x100.png",
      text: "La fonctionnalité de gestion des cartons a optimisé notre processus de préparation de commandes comme jamais auparavant. Nos clients sont livrés plus vite.",
    },
    {
      name: "Sophie Leroy",
      title: "Fondatrice de startup",
      avatar: "https://placehold.co/100x100.png",
      text: "En tant que startup, nous avions besoin d'une solution tout-en-un. Stockify nous a permis de centraliser nos commandes et de nous concentrer sur notre croissance.",
    },
];

const TestimonialCard = ({ testimonial, index, scrollYProgress }: { testimonial: (typeof testimonials)[0], index: number, scrollYProgress: any }) => {
    const scale = useTransform(scrollYProgress, [index * 0.25, (index + 1) * 0.25], [0.8, 1]);
    const translateY = useTransform(scrollYProgress, [index * 0.25, (index + 1) * 0.25], [100, 0]);

    return (
      <motion.div
        style={{
          scale,
          translateY,
          zIndex: index,
        }}
        className={cn(
          "w-full max-w-2xl absolute top-1/2 -translate-y-[calc(50%_-_100px)]"
        )}
      >
        <Card>
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground mb-6">"{testimonial.text}"</p>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
};

export default function Home() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start start", "end end"]
    });

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
      
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="text-base px-6 py-2 mb-4">Inventaire</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Gérez votre inventaire avec précision</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Suivez vos niveaux de stock en temps réel, recevez des alertes de stock bas et automatisez vos processus de réapprovisionnement pour ne jamais manquer une vente.
            </p>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Gestion d'inventaire"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl"
            data-ai-hint="inventory management"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Point de Vente"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl md:order-last"
            data-ai-hint="point of sale system"
          />
          <div>
            <Badge variant="secondary" className="text-base px-6 py-2 mb-4">Point de Vente</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Un système de point de vente intégré</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Acceptez les paiements en ligne et en magasin avec un système POS complet, synchronisé automatiquement avec votre inventaire.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-center text-lg font-semibold text-muted-foreground">
            Reconnu par les meilleures entreprises du monde
            </h2>
            <div className="mt-8 border-y border-border">
                <div className="flex justify-around items-center">
                    {logos.map((logo, index) => (
                        <div key={logo.name} className={cn(
                            "flex-1 flex justify-center items-center p-8",
                            index < logos.length - 1 && "border-r border-border"
                        )}>
                            <span className="text-2xl font-bold tracking-widest text-white">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

       <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="text-base px-6 py-2 mb-4">Gestion de Cartons</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Optimisez la préparation des commandes</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Organisez votre entrepôt, générez des listes de prélèvement et emballez vos commandes plus rapidement avec notre module de gestion de cartons.
            </p>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Gestion de Cartons"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl"
            data-ai-hint="warehouse shipping boxes"
          />
        </div>

        <div className="flex flex-col items-center text-center gap-8">
            <div className="flex flex-col items-center gap-4">
                <Badge variant="secondary" className="text-base px-6 py-2">Commande</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Centralisez toutes vos commandes</h2>
                <p className="max-w-2xl text-lg text-muted-foreground">
                    Importez et gérez les commandes de tous vos canaux de vente (e-commerce, magasin, etc.) à partir d'une seule interface unifiée.
                </p>
            </div>

            <div className="relative w-full flex justify-center items-center">
                <div className="relative z-10 flex items-center justify-center w-full max-w-4xl gap-8">
                    <Image
                        src="https://placehold.co/300x300.png"
                        alt="Commande 1"
                        width={300}
                        height={300}
                        className="rounded-2xl shadow-xl transition-all duration-300 hover:shadow-red-500/50 hover:shadow-2xl"
                        data-ai-hint="order management interface"
                    />
                    <Image
                        src="https://placehold.co/300x300.png"
                        alt="Commande 2"
                        width={300}
                        height={300}
                        className="rounded-2xl shadow-xl transition-all duration-300 hover:shadow-red-500/50 hover:shadow-2xl"
                        data-ai-hint="order details screen"
                    />
                    <Image
                        src="https://placehold.co/300x300.png"
                        alt="Commande 3"
                        width={300}
                        height={300}
                        className="rounded-2xl shadow-xl transition-all duration-300 hover:shadow-red-500/50 hover:shadow-2xl"
                        data-ai-hint="customer order history"
                    />
                </div>
            </div>
        </div>
      </section>

      <section ref={sectionRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-24 overflow-hidden">
            <h2 className="text-center text-3xl md:text-4xl mb-10 font-bold tracking-tight">
                Ce que nos clients disent de nous
            </h2>
            <div className="relative w-full h-96 flex items-start justify-center">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard 
                        key={index} 
                        testimonial={testimonial} 
                        index={index} 
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>
        </div>
      </section>
      
      <section className="relative w-full py-24 md:py-32 overflow-hidden">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="CTA Background"
          fill
          className="absolute inset-0 object-cover -z-20"
          data-ai-hint="abstract background texture"
        />
        <div className="absolute inset-0 bg-black/60 -z-10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Prêt à transformer votre gestion ?</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-white/80">
            Rejoignez des milliers de commerçants qui font confiance à Stockify pour optimiser leur business.
          </p>
          <Button size="lg" className="mt-8 rounded-full bg-red-500 px-8 text-lg font-semibold text-white transition-colors hover:bg-red-600">
            Passez à l'action
          </Button>
        </div>
      </section>

      <footer className="container mx-auto px-4 md:px-6 py-12 border-t border-border">
        <div className="grid gap-12 md:grid-cols-4">
            <div className="flex flex-col gap-4 items-start">
                <a href="#" className="flex items-center gap-2">
                    <LogoIcon className="h-6 w-6" />
                    <span className="text-xl font-bold">Stockify</span>
                </a>
                <p className="text-muted-foreground text-sm">
                    La solution tout-en-un pour votre commerce.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
                <div>
                    <h3 className="font-semibold mb-4">Fonctionnalités</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-foreground">Inventaire</a></li>
                        <li><a href="#" className="hover:text-foreground">Point de Vente</a></li>
                        <li><a href="#" className="hover:text-foreground">Commandes</a></li>
                        <li><a href="#" className="hover:text-foreground">Analyses</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Entreprise</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-foreground">À propos</a></li>
                        <li><a href="#" className="hover:text-foreground">Carrières</a></li>
                        <li><a href="#" className="hover:text-foreground">Contact</a></li>
                        <li><a href="#" className="hover:text-foreground">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Légal</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-foreground">Conditions d'utilisation</a></li>
                        <li><a href="#" className="hover:text-foreground">Politique de confidentialité</a></li>
                        <li><a href="#" className="hover:text-foreground">Mentions légales</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Stockify. Tous droits réservés.</p>
            <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
            </div>
        </div>
      </footer>

    </div>
  );
}
