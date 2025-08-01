'use client';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useState, useEffect, type Dispatch, type SetStateAction } from 'react';

export type FilterState = {
  location: string;
  type: string;
  priceRange: [number, number];
};

type PropertyFiltersProps = {
  filters: FilterState;
  setFilters: Dispatch<SetStateAction<FilterState>>;
};

const MAX_PRICE = 3000000;

export function PropertyFilters({ filters, setFilters }: PropertyFiltersProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, location: e.target.value }));
  };

  const handleTypeChange = (value: string) => {
    setFilters(prev => ({ ...prev, type: value }));
  };

  const handlePriceChange = (value: [number, number]) => {
    setFilters(prev => ({ ...prev, priceRange: value }));
  };

  return (
    <div className="mb-8 rounded-lg bg-card p-6 shadow-lg">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Rechercher par lieu..."
            value={filters.location}
            onChange={handleLocationChange}
            className="pl-10 text-base"
          />
        </div>
        <Select value={filters.type} onValueChange={handleTypeChange}>
          <SelectTrigger className="text-base">
            <SelectValue placeholder="Tous types de biens" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">Tous types de biens</SelectItem>
            <SelectItem value="House">Maison</SelectItem>
            <SelectItem value="Apartment">Appartement</SelectItem>
            <SelectItem value="Condo">Copropriété</SelectItem>
          </SelectContent>
        </Select>
        <div className="space-y-3">
          <label className="block text-sm font-medium text-foreground">
            Fourchette de prix: {isClient ? `$${filters.priceRange[0].toLocaleString()} - $${filters.priceRange[1].toLocaleString()}${filters.priceRange[1] === MAX_PRICE ? '+' : ''}` : 'Chargement...'}
          </label>
          <Slider
            min={0}
            max={MAX_PRICE}
            step={50000}
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            className="w-full"
          />
        </div>
        <Button onClick={() => setFilters({ location: '', type: 'All', priceRange: [0, MAX_PRICE] })} variant="outline" className="h-full">
          Réinitialiser les filtres
        </Button>
      </div>
    </div>
  );
}
