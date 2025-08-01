'use client';

import { useState, useMemo } from 'react';
import type { Property } from '@/lib/properties';
import { PropertyCard } from '@/components/property-card';
import { PropertyFilters, type FilterState } from '@/components/property-filters';

const MAX_PRICE = 3000000;

type PropertyListingsProps = {
  initialProperties: Property[];
};

export function PropertyListings({ initialProperties }: PropertyListingsProps) {
  const [filters, setFilters] = useState<FilterState>({
    location: '',
    type: 'All',
    priceRange: [0, MAX_PRICE],
  });

  const filteredProperties = useMemo(() => {
    return initialProperties.filter(property => {
      const { location, type, priceRange } = filters;
      const [minPrice, maxPrice] = priceRange;

      const locationMatch = property.location.toLowerCase().includes(location.toLowerCase());
      const typeMatch = type === 'All' || property.propertyType === type;
      const priceMatch = property.price >= minPrice && (maxPrice === MAX_PRICE ? true : property.price <= maxPrice);

      return locationMatch && typeMatch && priceMatch;
    });
  }, [initialProperties, filters]);

  return (
    <>
      <PropertyFilters filters={filters} setFilters={setFilters} />
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="font-headline text-2xl font-bold">Aucune propriété trouvée</h2>
          <p className="text-muted-foreground mt-2">
            Essayez d'ajuster vos filtres pour trouver plus de propriétés.
          </p>
        </div>
      )}
    </>
  );
}
