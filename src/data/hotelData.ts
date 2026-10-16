export interface Room {
  id: string;
  name: string;
  capacity: string;
  size: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
}

export const roomsData: Room[] = [
  {
    id: 'deluxe',
    name: 'Chambre Deluxe',
    capacity: '2 personnes',
    size: '28 m²',
    description: 'Élégante et confortable avec balcon privé.',
    price: '85 000 FCFA',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    popular: true,
  },
  {
    id: 'superieure',
    name: 'Chambre Supérieure',
    capacity: '2 personnes',
    size: '35 m²',
    description: "Plus d'espace et une vue magnifique sur la mer.",
    price: '110 000 FCFA',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'presidentielle',
    name: 'Suite Présidentielle',
    capacity: '2 personnes',
    size: '60 m²',
    description: 'Luxe absolu avec salon privé et baignoire spa.',
    price: '190 000 FCFA',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
  },
];