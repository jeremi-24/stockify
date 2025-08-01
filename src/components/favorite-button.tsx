'use client';

import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/use-favorites';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type FavoriteButtonProps = {
  propertyId: string;
  className?: string;
};

export function FavoriteButton({ propertyId, className }: FavoriteButtonProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const isFav = isFavorite(propertyId);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFav) {
      removeFavorite(propertyId);
    } else {
      addFavorite(propertyId);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn('h-8 w-8 rounded-full bg-white/80 hover:bg-white', className)}
      onClick={toggleFavorite}
      aria-label={isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
    >
      <Heart
        className={cn(
          'h-5 w-5 text-gray-500 transition-all duration-300',
          isFav && 'fill-accent text-accent'
        )}
      />
    </Button>
  );
}
