'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BedDouble, Bath, SquareGanttChart } from 'lucide-react';
import type { Property } from '@/lib/properties';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { FavoriteButton } from './favorite-button';
import { useState, useEffect } from 'react';

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  const [formattedPrice, setFormattedPrice] = useState<string | null>(null);

  useEffect(() => {
    // navigator.language can be used here to determined the user's locale
    setFormattedPrice(new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(property.price));
  }, [property.price]);


  return (
    <Link href={`/property/${property.id}`} className="group block">
      <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={property.images[0]}
              alt={`Image of ${property.title}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={`${property.propertyType.toLowerCase()} exterior`}
            />
            <div className="absolute top-3 left-3">
              <Badge variant="default" className="bg-primary/80 text-primary-foreground backdrop-blur-sm">
                {property.propertyType}
              </Badge>
            </div>
            <div className="absolute top-3 right-3">
              <FavoriteButton propertyId={property.id} />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-headline text-xl font-bold text-primary truncate">
            {property.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{property.location}</p>
          <p className="font-headline text-2xl font-bold text-accent mb-4">
            {formattedPrice ? formattedPrice : '...'}
          </p>
          <div className="flex justify-between border-t pt-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <BedDouble className="h-4 w-4" />
              <span>{property.bedrooms} Ch.</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms} Sdb.</span>
            </div>
            <div className="flex items-center gap-2">
              <SquareGanttChart className="h-4 w-4" />
              <span>{property.area.toLocaleString()} pi²</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
