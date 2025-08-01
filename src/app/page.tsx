import { properties } from '@/lib/properties';
import { PropertyListings } from '@/components/property-listings';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PropertyListings initialProperties={properties} />
    </div>
  );
}
