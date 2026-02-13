export type FloorPlan = {
  id: string;
  title: string;
  description: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  features: string[];
  order: string;
  order2: string;
};

export const floorPlansData: FloorPlan[] = [
  {
    id: "1",
    title: "Modern Ranch Style",
    description:
      "We offer a streamlined, flexible building process designed to meet homeowners wherever they are in their planning journey. This modern ranch-style floor plan features an open-concept living area, spacious master suite, and efficient kitchen layout perfect for contemporary family living.",
    image: "/images/florearcitecture.jpg",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    features: [
      "Open-concept living and dining",
      "Master suite with walk-in closet",
      "Modern kitchen with island",
      "Two-car garage",
      "Covered patio",
      "Energy-efficient design",
    ],
    order: "md:order-1",
    order2: "md:order-2",
  },
  {
    id: "2",
    title: "Two-Story Traditional",
    description:
      "Classic two-story design with formal living spaces on the main floor and private bedrooms upstairs. This tried-and-true floor plan has been carefully designed and built successfully, giving you confidence in both layout and functionality.",
    image: "/images/florearcitecture.jpg",
    bedrooms: 4,
    bathrooms: 2.5,
    sqft: 2400,
    features: [
      "Formal living and dining rooms",
      "Spacious family room",
      "Gourmet kitchen with pantry",
      "Master suite with luxury bath",
      "Upstairs laundry room",
      "Three additional bedrooms",
    ],
    order: "md:order-2",
    order2: "md:order-1",
  },
  {
    id: "3",
    title: "Single-Level Bungalow",
    description:
      "Perfect for aging-in-place or those who prefer single-level living. This thoughtful design maximizes space efficiency while providing all the amenities of modern living in an accessible, comfortable layout.",
    image: "/images/florearcitecture.jpg",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1450,
    features: [
      "No-step entry design",
      "Wide hallways and doorways",
      "Split bedroom layout",
      "Open kitchen to living area",
      "Attached one-car garage",
      "Low-maintenance exterior",
    ],
    order: "md:order-1",
    order2: "md:order-2",
  },
  {
    id: "4",
    title: "Craftsman Style Home",
    description:
      "Timeless craftsman design with attention to detail and quality finishes throughout. This floor plan combines classic architectural elements with modern functionality for a home that will never go out of style.",
    image: "/images/florearcitecture.jpg",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2150,
    features: [
      "Covered front porch",
      "Built-in cabinetry",
      "Coffered ceilings",
      "Mudroom with storage",
      "Bonus room above garage",
      "Custom millwork details",
    ],
    order: "md:order-2",
    order2: "md:order-1",
  },
  {
    id: "5",
    title: "Modern Farmhouse",
    description:
      "Popular modern farmhouse style with open living spaces and rustic charm. Whether you want a proven layout or a tailored adjustment, this versatile design can be customized to fit your family's needs.",
    image: "/images/florearcitecture.jpg",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2650,
    features: [
      "Great room with vaulted ceiling",
      "Farmhouse-style kitchen",
      "Main-floor master suite",
      "Guest suite on main floor",
      "Two bedrooms upstairs",
      "Large rear covered porch",
    ],
    order: "md:order-1",
    order2: "md:order-2",
  },
  {
    id: "6",
    title: "Compact Starter Home",
    description:
      "Efficient design perfect for first-time homebuyers or those downsizing. This compact floor plan maximizes every square foot while maintaining comfortable living spaces and modern amenities.",
    image: "/images/florearcitecture.jpg",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1150,
    features: [
      "Efficient layout design",
      "Combined living and dining",
      "Galley kitchen with storage",
      "Full bathroom with tub",
      "Laundry closet",
      "Single-car attached garage",
    ],
    order: "md:order-2",
    order2: "md:order-1",
  },
  {
    id: "7",
    title: "Luxury Estate Plan",
    description:
      "Spacious luxury home with premium features throughout. Our experienced team can turn your vision of an upscale home into a well-built, lasting estate with custom details and high-end finishes.",
    image: "/images/florearcitecture.jpg",
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4200,
    features: [
      "Grand two-story foyer",
      "Chef's kitchen with butler's pantry",
      "Master suite with sitting area",
      "Home office with built-ins",
      "Finished basement with rec room",
      "Three-car garage",
    ],
    order: "md:order-2",
    order2: "md:order-1",
  },
];
