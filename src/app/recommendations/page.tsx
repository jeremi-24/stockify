import { PropertyListings } from '@/components/property-listings';
import { properties } from '@/lib/properties';

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-headline text-4xl font-bold text-primary mb-8 text-center">
        Explorer toutes les propriétés
      </h1>
      <PropertyListings initialProperties={properties} />
    </div>
  );
}
