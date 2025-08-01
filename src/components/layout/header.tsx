'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home as HomeIcon, Sparkles, Heart, Menu, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Recommandations IA', icon: HomeIcon },
  { href: '/favorites', label: 'Favoris', icon: Heart },
  { href: '/enhance-description', label: 'Améliorer la description', icon: Sparkles },
  { href: '/recommendations', label: 'Toutes les propriétés', icon: Building2 },
];

export function Header() {
  const pathname = usePathname();

  const renderNavLinks = (isMobile = false) =>
    navLinks.map(({ href, label, icon: Icon }) => (
      <Button
        key={href}
        variant="ghost"
        asChild
        className={cn(
          'justify-start text-base',
          pathname === href ? 'bg-accent/20 text-accent-foreground' : 'text-primary-foreground',
          isMobile && 'text-foreground'
        )}
      >
        <Link href={href}>
          <Icon className="mr-2 h-5 w-5" />
          {label}
        </Link>
      </Button>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary shadow-md">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-accent p-2">
            <HomeIcon className="h-6 w-6 text-accent-foreground" />
          </div>
          <span className="font-headline text-2xl font-bold text-primary-foreground">
            ImmoFind
          </span>
        </Link>
        <nav className="hidden items-center space-x-4 md:flex">
          {renderNavLinks()}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary-foreground" />
                <span className="sr-only">Ouvrir le menu de navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-8 flex flex-col space-y-4">
                {renderNavLinks(true)}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
