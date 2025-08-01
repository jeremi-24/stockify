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
import { ChevronDown, Sparkles, Twitter, Linkedin, Facebook, Star, CheckCircle2, Check, ArrowUpRight, User, Package, DollarSign } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";

// Helper component for scroll-triggered animations
const AnimatedElement = ({ children, className, variants, amount = 0.5 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <motion.div
            ref={ref}
            className={className}
            variants={variants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
        >
            {children}
        </motion.div>
    );
};


function LogoIcon(props) {
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

const carouselImages = [
    { src: "/order2.svg", alt: "Order management interface", hint: "order management interface" },
    { src: "/order2.svg", alt: "Order details screen", hint: "order details screen" },
    { src: "/order2.svg", alt: "Customer order history", hint: "customer order history" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const BentoCard = ({ className, children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            className={cn("relative rounded-xl border border-border/50 bg-secondary/20 shadow-lg backdrop-blur-sm p-6 overflow-hidden", className)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

const BentoContent = ({ title, text, className, children }) => (
    <div className={cn("relative z-10 flex flex-col h-full", className)}>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2 flex-1">{text}</p>
        {children}
    </div>
);

const BentoImage = ({ src, alt, hint }) => (
    <Image
        src={src}
        alt={alt}
        fill
        className="absolute inset-0 object-cover opacity-10 -z-10"
        data-ai-hint={hint}
    />
);

const stats = [
  {
    icon: <User className="w-8 h-8 text-red-500" />,
    value: "10,000+",
    label: "Commerçants Actifs",
  },
  {
    icon: <Package className="w-8 h-8 text-red-500" />,
    value: "1M+",
    label: "Commandes Traitées",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-red-500" />,
    value: "250K $",
    label: "Générés par nos clients",
  },
];

const proofs = [
  {
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Julien B.",
    text: "Vient d'optimiser son stock de 25% !",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Carla S.",
    text: "A atteint 1000 commandes aujourd'hui.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    name: "Marc V.",
    text: "A économisé 8h de travail cette semaine.",
  },
];


const StatsCard = ({ icon, value, label }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    
    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center text-center p-6 bg-secondary/30 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="mb-4">{icon}</div>
            <p className="text-4xl font-bold bg-gradient-to-b from-red-500 to-orange-500 bg-clip-text text-transparent">{value}</p>
            <p className="text-muted-foreground">{label}</p>
        </motion.div>
    );
};

const ProofCard = ({ avatar, name, text, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            className="flex items-center gap-4 p-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
        >
            <Avatar>
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold text-foreground">{name}</p>
                <p className="text-sm text-muted-foreground">{text}</p>
            </div>
            <CheckCircle2 className="h-6 w-6 text-green-500 ml-auto" />
        </motion.div>
    );
}

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3e3e3e_1px,transparent_1px)] [background-size:16px_16px]"></div>
       <div className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-br from-background via-indigo-950/40 to-background"></div>

       <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300",
        isScrolled 
          ? "h-16 bg-background/80 backdrop-blur-lg border-b border-border/20 shadow-sm"
          : "h-20 bg-transparent"
        )}>
          {isMobileMenuOpen && (
  <div className="md:hidden fixed top-16 left-0 w-full bg-background border-t border-border z-40 px-4 py-4 space-y-4">
    <a href="#" className="block text-sm font-medium text-muted-foreground hover:text-foreground">Fonctionnalités</a>
    <a href="#" className="block text-sm font-medium text-muted-foreground hover:text-foreground">Cas d'usage</a>
    <a href="#" className="block text-sm font-medium text-muted-foreground hover:text-foreground">Nouveautés</a>
    <a href="#" className="block text-sm font-medium text-muted-foreground hover:text-foreground">Tarifs</a>
    <div className="pt-4 border-t border-border flex flex-col gap-2">
      <Button variant="ghost" className="w-full justify-start">Connexion</Button>
      <Button className="w-full justify-center bg-red-500 text-white hover:bg-red-600 rounded-full">Inscription</Button>
    </div>
  </div>
)}

        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2">
              <LogoIcon className="h-6 w-6" />
              <span className="text-xl font-bold">Stockify</span>
            </a>
            <button
  className="md:hidden  flex items-right"
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-foreground"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
    />
  </svg>
</button>
            
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
          <div className="flex hidden md:flex items-center gap-4">
            <Button variant="ghost">Connexion</Button>
            <Button className="rounded-full bg-red-500 px-6 font-semibold text-white transition-colors hover:bg-red-600">
              Inscription
            </Button>
          </div>
        </div>
      </motion.header>

      <main className="container relative mx-auto flex flex-col items-center justify-center px-4  pb-12 text-center md:px-6 pt-28 md:pt-40 md:pb-16">
        <div className="absolute -z-10 -top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[radial-gradient(ellipse_at_center,rgba(214,40,40,0.15),transparent_80%)]"></div>
        
        <motion.div
            className="flex flex-col items-center text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
        >
            <motion.div variants={fadeInUp} className="mb-8 flex items-center gap-2 rounded-full bg-secondary/70 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
              <span className="rounded-full bg-primary/20 p-1 text-primary">
                <Sparkles className="h-4 w-4 fill-primary" />
              </span>
              <span className="text-foreground">NOUVEAU</span> Intégration de l'IA pour prédire vos ventes
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl font-bold tracking-tighter md:text-7xl">
             Gardez le contrôle <br />
              <span className="bg-gradient-to-b from-red-500 to-orange-500 bg-clip-text text-transparent">
                sur tout
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Stockify centralise votre inventaire, suit vos commandes, et vous permet de gérer toute votre boutique en un seul endroit.
            </motion.p>

            <motion.div variants={fadeInUp}>
                <Button size="lg" className="mt-8 rounded-full bg-red-500 px-8 text-lg font-semibold text-white transition-colors hover:bg-red-600">
                  Commencez gratuitement
                </Button>
            </motion.div>
        </motion.div>
      </main>

      <section className="container mx-auto px-4 md:px-6 pb-24">
        <AnimatedElement variants={fadeInUp}>
            <Image
              src="/bento1.svg"
              alt="Aperçu du SaaS"
              width={1200}
              height={600}
              className="mx-auto rounded-xl shadow-2xl"
              data-ai-hint="dashboard screenshot"
            />
        </AnimatedElement>
      </section>
      
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative">
        <div className="absolute inset-0 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-[radial-gradient(ellipse_at_center,rgba(214,40,40,0.1),transparent_80%)]"></div>
        <AnimatedElement variants={staggerContainer} className="text-center mb-12">
            <motion.div variants={fadeInUp}><Badge variant="secondary" className="text-base px-6 py-2 mb-4">Fonctionnalités</Badge></motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight">Une plateforme, un <span className="relative inline-block">contrôle<svg className="absolute -bottom-1 left-0 w-full h-3 text-red-500 transform rotate-6 translate-y-3 " viewBox="0 0 100 8" preserveAspectRatio="none"><path d="M0.7,7.03c11.53-2.06,23.73-3.3,35.73-4.52c11.4-1.16,22.99-2.25,34.36-3.32c11.48-1.08,23.08-2.09,34.58-3.1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg></span> total</motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                De la gestion de stock au point de vente, en passant par le suivi de commande, tout est conçu pour fonctionner ensemble.
            </motion.p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            
            <BentoCard className="md:col-span-4 lg:col-span-3 row-span-2 flex flex-col">
                <div className="">
                    <BentoContent
                        title="Inventaire Précis"
                        text="Suivez vos stocks en temps réel pour ne plus jamais manquer une vente."
                    />
                </div>
                <div className="flex-1 relative w-full h-64 mt-4 rounded-lg overflow-hidden">
                    <Image src="/bento3.svg" alt="Dashboard" layout="fill" className="object-cover" />
                </div>
            </BentoCard>

           
            <BentoCard className="md:col-span-2 lg:col-span-3 row-span-1 group relative flex flex-col justify-between overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
            <div className="relative z-10 p-6 flex flex-col justify-center items-center text-center h-full">
                <div className="transform transition-all duration-500 ease-in-out group-hover:-translate-y-4 group-hover:scale-110">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                </div>
                <div className="transform transition-all duration-500 ease-in-out group-hover:opacity-0">
                    <h3 className="text-xl font-bold text-foreground">Point de Vente Rapide</h3>
                    <p className="text-muted-foreground mt-2">Encaissez vos clients en un éclair.</p>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-white text-lg mb-4">Transformez chaque interaction en opportunité.</p>
                    <button className="bg-white text-red-500 font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
                        Découvrir
                    </button>
                </div>
            </div>
        </BentoCard>
            
            
            <BentoCard className="md:col-span-2 lg:col-span-2 row-span-1">
                 <div className="absolute top-4 right-4 p-2 bg-secondary rounded-full">
                    <DollarSign className="w-6 h-6 text-red-500" />
                </div>
                <div className=" w-full h-40 mt-4 rounded-lg overflow-hidden">
                    <Image src="/bento4.svg" alt="Inventaire" layout="fill" className="object-cover" />
                </div>
            </BentoCard>

            <BentoCard className="md:col-span-4 lg:col-span-1 row-span-1 flex flex-col justify-between">
                <BentoContent
                    title="Préparation Optimisée"
                    text="Accélérez la préparation de vos colis."
                />
                 <div className="mt-4 flex flex-col gap-2 text-sm text-foreground">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-red-500" />
                        <span>Listes intelligentes</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-red-500" />
                        <span>Emballage rapide</span>
                    </div>
                </div>
            </BentoCard>

        </div>
      </section>

      <section className="py-8 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(214,40,40,0.15),transparent_80%)]"></div>
        <div className="container mx-auto px-4 md:px-6">
            <AnimatedElement variants={fadeInUp} className="text-center text-lg font-semibold text-muted-foreground">
            Reconnu par les meilleures entreprises du monde
            </AnimatedElement>
            <AnimatedElement variants={fadeInUp} amount={0.2} className="mt-8">
                {/* Première rangée */}
                <div className="border-y border-border">
  <div className="flex flex-col sm:flex-row justify-around items-center">
    {logos.map((logo, index) => (
      <div
        key={`${logo.name}-${index}-1`}
        className={cn(
          "flex-1 flex justify-center items-center p-8",
          index < logos.length - 1 &&
            "border-b sm:border-b-0 sm:border-r border-border"
        )}
      >
        <span className="text-2xl font-bold tracking-widest text-white">{logo.name}</span>
      </div>
    ))}
  </div>
</div>

             
               
            </AnimatedElement>
        </div>
    </section>

       <section className="container mx-auto px-4 md:px-6 py-8 md:py-12 space-y-16">
        <AnimatedElement variants={staggerContainer} className="flex flex-col items-center text-center gap-8">
            <div className="flex flex-col items-center gap-4">
                <motion.div variants={fadeInUp}><Badge variant="secondary" className="text-base px-6 py-2">Commande</Badge></motion.div>
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight">Centralisez toutes vos commandes</motion.h2>
                <motion.p variants={fadeInUp} className="max-w-2xl text-lg text-muted-foreground">
                    Importez et gérez les commandes de tous vos canaux de vente (e-commerce, magasin, etc.) à partir d'une seule interface unifiée.
                </motion.p>
            </div>

            <AnimatedElement variants={fadeInUp} className="w-full max-w-[1000px] h-[500px] relative overflow-hidden rounded-2xl shadow-xl">
                 <AnimatePresence>
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={carouselImages[currentImageIndex].src}
                            alt={carouselImages[currentImageIndex].alt}
                            width={1200}
                            height={600}
                            className="object-cover"
                            data-ai-hint={carouselImages[currentImageIndex].hint}
                        />
                    </motion.div>
                </AnimatePresence>
            </AnimatedElement>
            <div className="flex justify-center gap-2 mt-4">
              {carouselImages.map((_, index) => (
                  <div
                      key={index}
                      className={cn(
                          "h-2 w-24 rounded-full bg-muted transition-colors",
                          index === currentImageIndex && "bg-red-500"
                      )}
                  />
              ))}
            </div>
        </AnimatedElement>
      </section>

      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(214,40,40,0.1),transparent_80%)]"></div>
        <div className="container mx-auto px-4 md:px-6">
            <AnimatedElement variants={staggerContainer} className="text-center mb-12">
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight">
                  Rejoignez une communauté florissante
                </motion.h2>
                <motion.p variants={fadeInUp} className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Nos outils ne font pas que gérer des stocks, ils propulsent des entreprises. Voyez l'impact par vous-même.
                </motion.p>
            </AnimatedElement>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {stats.map((stat, index) => (
                       <StatsCard key={index} {...stat} />
                   ))}
                </div>
                <div className="flex flex-col gap-6">
                    {proofs.map((proof, index) => (
                        <ProofCard key={index} {...proof} index={index} />
                    ))}
                </div>
            </div>
        </div>
      </section>
      
      <section className="relative w-full py-6 md:py-32 overflow-hidden bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <AnimatedElement variants={staggerContainer} className="relative z-10">
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight">Prêt à transformer votre gestion ?</motion.h2>
                <motion.p variants={fadeInUp} className="mt-4 max-w-xl text-lg text-white/80">
                    Rejoignez des milliers de commerçants qui font confiance à Stockify pour optimiser leur business.
                </motion.p>
            </AnimatedElement>
             <AnimatedElement variants={fadeInUp} className="flex justify-center md:justify-end">
                <Card className="bg-card/80 backdrop-blur-sm border-border/50 text-card-foreground shadow-2xl w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Plan Pro</CardTitle>
                        <CardDescription>La solution complète pour les entreprises en croissance.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-4xl font-bold">
                            29€ <span className="text-lg font-normal text-muted-foreground">/mois</span>
                        </div>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-red-500" />
                                <span>Toutes les fonctionnalités de base</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-red-500" />
                                <span>Support prioritaire</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-red-500" />
                                <span>Analyses avancées</span>
                            </li>
                        </ul>
                        <Button size="lg" className="w-full mt-4 rounded-full bg-red-500 px-8 text-lg font-semibold text-white transition-colors hover:bg-red-600">
                            Passez à l'action
                        </Button>
                    </CardContent>
                </Card>
            </AnimatedElement>
        </div>
      </section>

      <footer className="container mx-auto px-4 md:px-6 py-12 border-t border-border">
        <div className="grid gap-12 md:grid-cols-4">
            <AnimatedElement variants={fadeInUp} className="flex flex-col gap-4 items-start">
                <a href="#" className="flex items-center gap-2">
                    <LogoIcon className="h-6 w-6" />
                    <span className="text-xl font-bold">Stockify</span>
                </a>
                <p className="text-muted-foreground text-sm">
                    La solution tout-en-un pour votre commerce.
                </p>
            </AnimatedElement>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
                <AnimatedElement variants={fadeInUp}>
                    <h3 className="font-semibold mb-4">Fonctionnalités</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-foreground">Inventaire</a></li>
                        <li><a href="#" className="hover:text-foreground">Point de Vente</a></li>
                        <li><a href="#" className="hover:text-foreground">Commandes</a></li>
                        <li><a href="#" className="hover:text-foreground">Analyses</a></li>
                    </ul>
                </AnimatedElement>
                <AnimatedElement variants={fadeInUp}>
                    <h3 className="font-semibold mb-4">Entreprise</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-foreground">À propos</a></li>
                        <li><a href="#" className="hover:text-foreground">Carrières</a></li>
                        <li><a href="#" className="hover:text-foreground">Contact</a></li>
                        <li><a href="#" className="hover:text-foreground">Blog</a></li>
                    </ul>
                </AnimatedElement>
                <AnimatedElement variants={fadeInUp}>
                    <h3 className="font-semibold mb-4">Légal</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-foreground">Conditions d'utilisation</a></li>
                        <li><a href="#" className="hover:text-foreground">Politique de confidentialité</a></li>
                        <li><a href="#" className="hover:text-foreground">Mentions légales</a></li>
                    </ul>
                </AnimatedElement>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Stockify. Tous droits réservés.</p>
            <div className="flex gap-4">
                <motion.a whileHover={{ scale: 1.2, color: 'white' }} href="#" className="text-muted-foreground"><Twitter className="h-5 w-5" /></motion.a>
                <motion.a whileHover={{ scale: 1.2, color: 'white' }} href="#" className="text-muted-foreground"><Facebook className="h-5 w-5" /></motion.a>
                <motion.a whileHover={{ scale: 1.2, color: 'white' }} href="#" className="text-muted-foreground"><Linkedin className="h-5 w-5" /></motion.a>
            </div>
        </div>
      </footer>

    </div>
  );
}