export type Property = {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  propertyType: 'Maison' | 'Appartement' | 'Copropriété';
  images: string[];
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  features: string[];
};

export const properties: Property[] = [
  {
    id: '1',
    title: 'Loft Moderne en Centre-Ville',
    description: 'Un loft spacieux et moderne au cœur de la ville. Plafonds hauts, grandes fenêtres et plan ouvert. Parfait pour la vie urbaine.',
    price: 450000,
    location: 'Metropolis',
    propertyType: 'Appartement',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    features: ['Planchers de bois franc', 'Cuisine rénovée', 'Buanderie intégrée', 'Vue sur la ville'],
  },
  {
    id: '2',
    title: 'Maison de Banlieue Agréable',
    description: 'Charmante maison unifamiliale dans un quartier de banlieue tranquille. Grand jardin, parfait pour les familles. Proche des écoles et des parcs.',
    price: 650000,
    location: 'Green Valley',
    propertyType: 'Maison',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    features: ['Grand jardin', 'Cheminée', 'Garage double', 'Piscine'],
  },
  {
    id: '3',
    title: 'Condo de Luxe en Bord de Mer',
    description: 'Superbe condo avec vue panoramique sur l\'océan. Accès à une plage privée, une piscine et un centre de fitness. L\'expérience de vie côtière ultime.',
    price: 1200000,
    location: 'Oceanview',
    propertyType: 'Copropriété',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 3,
    bathrooms: 3,
    area: 2000,
    features: ['Vue sur l\'océan', 'Balcon privé', 'Piscine communautaire', 'Communauté fermée'],
  },
  {
    id: '4',
    title: 'Ferme Rustique à la Campagne',
    description: 'Une ferme magnifiquement restaurée sur 5 acres de terrain. Boiseries d\'origine, cuisine moderne et environnement paisible.',
    price: 750000,
    location: 'Willow Creek',
    propertyType: 'Maison',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    features: ['Grand terrain', 'Grange', 'Véranda', 'Cuisine de chef'],
  },
  {
    id: '5',
    title: 'Appartement Urbain Chic',
    description: 'Un appartement élégant dans un quartier branché, à proximité des commerces, des restaurants et des transports en commun. Idéal pour un jeune professionnel.',
    price: 380000,
    location: 'Metropolis',
    propertyType: 'Appartement',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    features: ['Terrasse sur le toit', 'Centre de fitness', 'Appareils modernes', 'Briques apparentes'],
  },
  {
    id: '6',
    title: 'Maison Familiale Spacieuse',
    description: 'Une grande maison avec beaucoup d\'espace pour une famille grandissante. Située dans un district scolaire de premier ordre avec une communauté dynamique.',
    price: 890000,
    location: 'Green Valley',
    propertyType: 'Maison',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 5,
    bathrooms: 4,
    area: 4000,
    features: ['Sous-sol aménagé', 'Salle de jeux', 'Bureau à domicile', 'Cour clôturée'],
  },
  {
    id: '7',
    title: 'Penthouse avec Vue',
    description: 'Appartement penthouse exclusif offrant une vue imprenable sur la ville. Finitions et équipements haut de gamme.',
    price: 2500000,
    location: 'Metropolis',
    propertyType: 'Copropriété',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 3,
    bathrooms: 4,
    area: 3200,
    features: ['Ascenseur privé', 'Fenêtres du sol au plafond', 'Domotique', 'Service de conciergerie'],
  },
  {
    id: '8',
    title: 'Chalet Isolé en Montagne',
    description: 'Évadez-vous dans ce chalet paisible dans les bois. Parfait pour les amoureux de la nature à la recherche d\'un refuge tranquille. Entouré de sentiers de randonnée.',
    price: 420000,
    location: 'Pine Ridge',
    propertyType: 'Maison',
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    bedrooms: 2,
    bathrooms: 1,
    area: 1500,
    features: ['Poêle à bois', 'Grande terrasse', 'Vue sur la montagne', 'Terrain isolé'],
  },
];
