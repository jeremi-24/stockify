'use client';

import { useFavorites } from '@/hooks/use-favorites';
import { properties } from '@/lib/properties';
import { PropertyCard } from '@/components/property-card';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoriteProperties = properties.filter(p => favorites.includes(p.id));

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-headline text-4xl font-bold text-primary mb-8">
        Your Favorite Properties
      </h1>
      {favoriteProperties.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favoriteProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-24 border-2 border-dashed rounded-lg">
          <Heart className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="font-headline text-2xl font-bold text-primary">
            You have no favorites yet.
          </h2>
          <p className="text-muted-foreground mt-2 mb-6">
            Click the heart icon on any property to save it here.
          </p>
          <Button asChild>
            <Link href="/">Browse Properties</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
