import { notFound } from 'next/navigation';
import Image from 'next/image';
import { properties } from '@/lib/properties';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BedDouble, Bath, SquareGanttChart, MapPin } from 'lucide-react';
import { FavoriteButton } from '@/components/favorite-button';

type PropertyPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return properties.map(property => ({
    id: property.id,
  }));
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = properties.find(p => p.id === params.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <CardHeader className="p-0 relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {property.images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video relative">
                        <Image
                          src={src}
                          alt={`${property.title} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                          data-ai-hint={`${property.propertyType.toLowerCase()} interior`}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4" />
                <CarouselNext className="absolute right-4" />
              </Carousel>
              <div className="absolute top-4 right-4 z-10">
                <FavoriteButton propertyId={property.id} className="bg-white/90 hover:bg-white h-10 w-10" />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h1 className="font-headline text-4xl font-bold text-primary mb-2">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-5 w-5" />
                <span>{property.location}</span>
              </div>
              <p className="text-lg">{property.description}</p>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-accent text-4xl font-bold">
                ${property.price.toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 text-lg">
              <div className="flex items-center gap-2">
                <BedDouble className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-bold">{property.bedrooms}</div>
                  <div className="text-sm text-muted-foreground">Bedrooms</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-bold">{property.bathrooms}</div>
                  <div className="text-sm text-muted-foreground">Bathrooms</div>
                </div>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <SquareGanttChart className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-bold">{property.area.toLocaleString()} sqft</div>
                  <div className="text-sm text-muted-foreground">Area</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Features</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {property.features.map(feature => (
                <Badge key={feature} variant="secondary" className="text-base px-3 py-1">
                  {feature}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
