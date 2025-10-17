import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface Property {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  imageUrl: string;
  isNew?: boolean;
  coordinates: [number, number]; // [longitude, latitude]
  category: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    rating: 4.9,
    reviewCount: 127,
    price: 285,
    imageUrl: property1,
    isNew: true,
    coordinates: [-106.8175, 39.1911],
    category: "cabins",
  },
  {
    id: "2", 
    title: "Luxury Beachfront Villa",
    location: "Malibu, California",
    rating: 4.8,
    reviewCount: 89,
    price: 650,
    imageUrl: property2,
    coordinates: [-118.7798, 34.0259],
    category: "beachfront",
  },
  {
    id: "3",
    title: "Charming European Apartment",
    location: "Prague, Czech Republic",
    rating: 4.7,
    reviewCount: 203,
    price: 95,
    imageUrl: property3,
    coordinates: [14.4378, 50.0755],
    category: "iconic-cities",
  },
  {
    id: "4",
    title: "Desert Modern House",
    location: "Joshua Tree, California",
    rating: 4.9,
    reviewCount: 156,
    price: 320,
    imageUrl: property4,
    isNew: true,
    coordinates: [-116.0124, 34.1347],
    category: "amazing-views",
  },
  {
    id: "5",
    title: "Magical Treehouse Retreat",
    location: "Olympic Peninsula, Washington",
    rating: 4.8,
    reviewCount: 94,
    price: 180,
    imageUrl: property5,
    coordinates: [-124.0207, 47.7511],
    category: "unique-stays",
  },
  {
    id: "6",
    title: "Industrial Loft Downtown",
    location: "Brooklyn, New York",
    rating: 4.6,
    reviewCount: 78,
    price: 220,
    imageUrl: property6,
    coordinates: [-73.9442, 40.6782],
    category: "design",
  },
  {
    id: "7",
    title: "Modern Tokyo Apartment",
    location: "Shibuya, Tokyo",
    rating: 4.8,
    reviewCount: 156,
    price: 180,
    imageUrl: property1,
    coordinates: [139.7016, 35.6598],
    category: "iconic-cities",
  },
  {
    id: "8",
    title: "Traditional Ryokan Suite", 
    location: "Kyoto, Tokyo",
    rating: 4.9,
    reviewCount: 89,
    price: 320,
    imageUrl: property2,
    isNew: true,
    coordinates: [135.7681, 35.0116],
    category: "luxury",
  },
  {
    id: "9",
    title: "Luxury Condo in Makati",
    location: "Makati, Manila",
    rating: 4.7,
    reviewCount: 134,
    price: 95,
    imageUrl: property3,
    coordinates: [121.0244, 14.5547],
    category: "iconic-cities",
  },
  {
    id: "10",
    title: "Beachfront Villa",
    location: "Boracay, Manila", 
    rating: 4.8,
    reviewCount: 67,
    price: 250,
    imageUrl: property4,
    coordinates: [121.9246, 11.9674],
    category: "beachfront",
  },
  {
    id: "11",
    title: "Manhattan Penthouse",
    location: "Manhattan, New York",
    rating: 4.9,
    reviewCount: 203,
    price: 850,
    imageUrl: property5,
    isNew: true,
    coordinates: [-73.9712, 40.7831],
    category: "luxury",
  },
  {
    id: "12",
    title: "Brooklyn Brownstone",
    location: "Park Slope, New York",
    rating: 4.6,
    reviewCount: 145,
    price: 290,
    imageUrl: property6,
    coordinates: [-73.9903, 40.6736],
    category: "iconic-cities",
  },
  {
    id: "13",
    title: "Eiffel Tower View Apartment",
    location: "Champs-Élysées, Paris",
    rating: 4.9,
    reviewCount: 245,
    price: 420,
    imageUrl: property1,
    isNew: true,
    coordinates: [2.3522, 48.8566],
    category: "iconic-cities",
  },
  {
    id: "14",
    title: "Thames Riverside Flat",
    location: "Westminster, London",
    rating: 4.7,
    reviewCount: 189,
    price: 380,
    imageUrl: property2,
    coordinates: [-0.1276, 51.5074],
    category: "iconic-cities",
  },
  {
    id: "15",
    title: "Burj Khalifa Luxury Suite",
    location: "Downtown, Dubai",
    rating: 4.9,
    reviewCount: 312,
    price: 750,
    imageUrl: property3,
    isNew: true,
    coordinates: [55.2708, 25.2048],
    category: "luxury",
  },
  {
    id: "16",
    title: "Marina Bay Penthouse",
    location: "Marina Bay, Singapore",
    rating: 4.8,
    reviewCount: 198,
    price: 580,
    imageUrl: property4,
    coordinates: [103.8518, 1.3521],
    category: "luxury",
  },
  {
    id: "17",
    title: "Gothic Quarter Loft",
    location: "El Raval, Barcelona",
    rating: 4.7,
    reviewCount: 167,
    price: 175,
    imageUrl: property5,
    coordinates: [2.1734, 41.3851],
    category: "iconic-cities",
  },
  {
    id: "18",
    title: "Amalfi Coast Villa",
    location: "Positano, Italy",
    rating: 4.9,
    reviewCount: 221,
    price: 520,
    imageUrl: property6,
    isNew: true,
    coordinates: [14.4843, 40.6280],
    category: "beachfront",
  },
  {
    id: "19",
    title: "Santorini Sunset House",
    location: "Oia, Greece",
    rating: 4.9,
    reviewCount: 278,
    price: 450,
    imageUrl: property1,
    coordinates: [25.3753, 36.4618],
    category: "amazing-views",
  },
  {
    id: "20",
    title: "Sydney Harbour Apartment",
    location: "The Rocks, Sydney",
    rating: 4.8,
    reviewCount: 156,
    price: 340,
    imageUrl: property2,
    coordinates: [151.2093, -33.8688],
    category: "iconic-cities",
  },
];

export const groupPropertiesByCity = () => {
  const grouped = properties.reduce((acc, property) => {
    const city = property.location.split(", ").pop() || "";
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(property);
    return acc;
  }, {} as Record<string, Property[]>);
  
  return grouped;
};