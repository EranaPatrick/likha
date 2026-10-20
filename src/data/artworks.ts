// fake data until theres a db
// placeholder images are public domain juan luna paintings (wikimedia commons)

export type Artist = {
  slug: string;
  name: string;
  city: string;
};

export type Artwork = {
  id: string;
  slug: string;
  title: string;
  artist: string;
  medium: string;
  size: string;
  description: string;
  year: number;
  price: number;
  width: number;
  height: number;
  image: string;
  featured: boolean;
  likes: number;
};

export const artists: Artist[] = [
  { slug: "mara-santos", name: "Mara Santos", city: "Quezon City" },
  { slug: "jun-dela-cruz", name: "Jun Dela Cruz", city: "Cebu" },
  { slug: "ana-reyes", name: "Ana Reyes", city: "Baguio" },
  { slug: "leo-bautista", name: "Leo Bautista", city: "Manila" },
];

export const artworks: Artwork[] = [
  {
    id: "1",
    slug: "still-life-with-lemons",
    title: "Still life with lemons",
    artist: "mara-santos",
    medium: "Oil on canvas",
    size: "60 x 80 cm",
    description: "Lemons from my neighbor's tree, painted over a week in the same morning light.",
    year: 2019,
    price: 18000,
    width: 900,
    height: 531,
    image: "/art/01.jpg",
    featured: true,
    likes: 3,
  },
  {
    id: "2",
    slug: "window-afternoon",
    title: "Window, afternoon",
    artist: "jun-dela-cruz",
    medium: "Acrylic on board",
    size: "45 x 60 cm",
    description: "The view from the kitchen window, a little before four.",
    year: 2020,
    price: 9500,
    width: 900,
    height: 739,
    image: "/art/02.jpg",
    featured: false,
    likes: 12,
  },
  {
    id: "3",
    slug: "harbor-study",
    title: "Harbor study",
    artist: "ana-reyes",
    medium: "Oil on linen",
    size: "50 x 70 cm",
    description: "Done on the pier in one sitting, finished at home.",
    year: 2021,
    price: 42000,
    width: 900,
    height: 580,
    image: "/art/03.jpg",
    featured: false,
    likes: 0,
  },
  {
    id: "4",
    slug: "two-figures",
    title: "Two figures",
    artist: "leo-bautista",
    medium: "Gouache on paper",
    size: "30 x 42 cm",
    description: "Two people waiting for a jeep. Quick sketch, then reworked.",
    year: 2022,
    price: 27000,
    width: 900,
    height: 599,
    image: "/art/04.jpg",
    featured: false,
    likes: 7,
  },
  {
    id: "5",
    slug: "tall-grass",
    title: "Tall grass",
    artist: "mara-santos",
    medium: "Oil on canvas",
    size: "70 x 90 cm",
    description: "Tall grass behind the house, it keeps changing every season.",
    year: 2023,
    price: 15000,
    width: 900,
    height: 1246,
    image: "/art/05.jpg",
    featured: true,
    likes: 1,
  },
  {
    id: "6",
    slug: "interior-with-chair",
    title: "Interior with chair",
    artist: "jun-dela-cruz",
    medium: "Acrylic on board",
    size: "40 x 50 cm",
    description: "My aunt's living room, mostly from memory.",
    year: 2024,
    price: 64000,
    width: 900,
    height: 655,
    image: "/art/06.jpg",
    featured: false,
    likes: 24,
  },
  {
    id: "7",
    slug: "low-tide",
    title: "Low tide",
    artist: "ana-reyes",
    medium: "Oil on linen",
    size: "55 x 75 cm",
    description: "The tide going out at five in the morning.",
    year: 2019,
    price: 12000,
    width: 900,
    height: 769,
    image: "/art/07.jpg",
    featured: false,
    likes: 5,
  },
  {
    id: "8",
    slug: "portrait-of-m",
    title: "Portrait of M.",
    artist: "leo-bautista",
    medium: "Gouache on paper",
    size: "30 x 40 cm",
    description: "A friend sitting for about an hour.",
    year: 2020,
    price: 35000,
    width: 900,
    height: 1356,
    image: "/art/08.jpg",
    featured: false,
    likes: 2,
  },
  {
    id: "9",
    slug: "column",
    title: "Column",
    artist: "mara-santos",
    medium: "Oil on canvas",
    size: "80 x 100 cm",
    description: "A single column in an old building, studied over several visits.",
    year: 2021,
    price: 88000,
    width: 900,
    height: 781,
    image: "/art/09.jpg",
    featured: true,
    likes: 9,
  },
  {
    id: "10",
    slug: "small-blue-room",
    title: "Small blue room",
    artist: "jun-dela-cruz",
    medium: "Acrylic on board",
    size: "35 x 45 cm",
    description: "A small room painted mostly in blues.",
    year: 2022,
    price: 7800,
    width: 900,
    height: 1359,
    image: "/art/10.jpg",
    featured: false,
    likes: 4,
  },
  {
    id: "11",
    slug: "field-after-rain",
    title: "Field after rain",
    artist: "ana-reyes",
    medium: "Oil on linen",
    size: "50 x 65 cm",
    description: "A field right after the rain stopped.",
    year: 2023,
    price: 51000,
    width: 900,
    height: 443,
    image: "/art/11.jpg",
    featured: false,
    likes: 0,
  },
  {
    id: "12",
    slug: "sleeping-cat",
    title: "Sleeping cat",
    artist: "leo-bautista",
    medium: "Gouache on paper",
    size: "25 x 35 cm",
    description: "The cat, asleep, who did not care that I was drawing.",
    year: 2024,
    price: 22000,
    width: 900,
    height: 582,
    image: "/art/12.jpg",
    featured: false,
    likes: 6,
  },
];

export function getArtist(slug: string) {
  return artists.find((a) => a.slug === slug);
}

export function formatPrice(n: number) {
  return "P" + n.toLocaleString("en-US");
}

export function featuredArtworks() {
  return artworks.filter((a) => a.featured);
}
