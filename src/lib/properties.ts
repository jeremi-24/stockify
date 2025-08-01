export type Property = {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  propertyType: 'House' | 'Apartment' | 'Condo';
  images: string[];
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  features: string[];
};

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Loft',
    description: 'A spacious and modern loft in the heart of the city. Features high ceilings, large windows, and an open floor plan. Perfect for urban living.',
    price: 450000,
    location: 'Metropolis',
    propertyType: 'Apartment',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    features: ['Hardwood Floors', 'Updated Kitchen', 'In-unit Laundry', 'City View'],
  },
  {
    id: '2',
    title: 'Cozy Suburban Home',
    description: 'Charming single-family home in a quiet suburban neighborhood. Large backyard, perfect for families. Close to schools and parks.',
    price: 650000,
    location: 'Green Valley',
    propertyType: 'House',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    features: ['Large Backyard', 'Fireplace', 'Two-car Garage', 'Swimming Pool'],
  },
  {
    id: '3',
    title: 'Luxury Beachfront Condo',
    description: 'Stunning condo with panoramic ocean views. Includes access to a private beach, pool, and fitness center. The ultimate coastal living experience.',
    price: 1200000,
    location: 'Oceanview',
    propertyType: 'Condo',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 3,
    bathrooms: 3,
    area: 2000,
    features: ['Ocean View', 'Private Balcony', 'Community Pool', 'Gated Community'],
  },
  {
    id: '4',
    title: 'Rustic Countryside Farmhouse',
    description: 'A beautifully restored farmhouse on 5 acres of land. Features original woodwork, a modern kitchen, and peaceful surroundings.',
    price: 750000,
    location: 'Willow Creek',
    propertyType: 'House',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    features: ['Large Acreage', 'Barn', 'Wraparound Porch', 'Gourmet Kitchen'],
  },
  {
    id: '5',
    title: 'Chic Urban Apartment',
    description: 'A stylish apartment in a trendy neighborhood, close to shops, restaurants, and public transport. Great for a young professional.',
    price: 380000,
    location: 'Metropolis',
    propertyType: 'Apartment',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    features: ['Rooftop Terrace', 'Fitness Center', 'Modern Appliances', 'Exposed Brick'],
  },
  {
    id: '6',
    title: 'Spacious Family Home',
    description: 'A large home with plenty of room for a growing family. Located in a top-rated school district with a vibrant community.',
    price: 890000,
    location: 'Green Valley',
    propertyType: 'House',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 5,
    bathrooms: 4,
    area: 4000,
    features: ['Finished Basement', 'Playroom', 'Home Office', 'Fenced Yard'],
  },
  {
    id: '7',
    title: 'Penthouse with a View',
    description: 'Exclusive penthouse apartment offering breathtaking city skyline views. Top-of-the-line finishes and amenities.',
    price: 2500000,
    location: 'Metropolis',
    propertyType: 'Condo',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 3,
    bathrooms: 4,
    area: 3200,
    features: ['Private Elevator', 'Floor-to-ceiling windows', 'Smart Home Technology', 'Concierge Service'],
  },
  {
    id: '8',
    title: 'Secluded Mountain Cabin',
    description: 'Escape to this peaceful cabin in the woods. Perfect for nature lovers seeking a quiet retreat. Surrounded by hiking trails.',
    price: 420000,
    location: 'Pine Ridge',
    propertyType: 'House',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 2,
    bathrooms: 1,
    area: 1500,
    features: ['Wood-burning Stove', 'Large Deck', 'Mountain Views', 'Secluded Lot'],
  },
];
