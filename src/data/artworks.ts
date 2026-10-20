// fake data until theres a db
// images are public domain from art institute of chicago

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
    year: 2019,
    price: 18000,
    width: 6125,
    height: 8002,
    image: "https://www.artic.edu/iiif/2/7b7a6f39-1cd8-ea2f-9811-18b0e23edac0/full/843,/0/default.jpg",
    featured: true,
    likes: 3,
  },
  {
    id: "2",
    slug: "window-afternoon",
    title: "Window, afternoon",
    artist: "jun-dela-cruz",
    medium: "Acrylic on board",
    year: 2020,
    price: 9500,
    width: 1938,
    height: 2250,
    image: "https://www.artic.edu/iiif/2/b55d836c-ee20-59f8-1f0c-a95e09905361/full/843,/0/default.jpg",
    featured: false,
    likes: 12,
  },
  {
    id: "3",
    slug: "harbor-study",
    title: "Harbor study",
    artist: "ana-reyes",
    medium: "Oil on linen",
    year: 2021,
    price: 42000,
    width: 10490,
    height: 8127,
    image: "https://www.artic.edu/iiif/2/18092196-50ae-3ff1-9205-1b3110e966c3/full/843,/0/default.jpg",
    featured: false,
    likes: 0,
  },
  {
    id: "4",
    slug: "two-figures",
    title: "Two figures",
    artist: "leo-bautista",
    medium: "Gouache on paper",
    year: 2022,
    price: 27000,
    width: 9987,
    height: 7755,
    image: "https://www.artic.edu/iiif/2/f8fd76e9-c396-5678-36ed-6a348c904d27/full/843,/0/default.jpg",
    featured: false,
    likes: 7,
  },
  {
    id: "5",
    slug: "tall-grass",
    title: "Tall grass",
    artist: "mara-santos",
    medium: "Oil on canvas",
    year: 2023,
    price: 15000,
    width: 8470,
    height: 12853,
    image: "https://www.artic.edu/iiif/2/3b885ae0-4d46-5fe4-d70a-00474827f02c/full/843,/0/default.jpg",
    featured: true,
    likes: 1,
  },
  {
    id: "6",
    slug: "interior-with-chair",
    title: "Interior with chair",
    artist: "jun-dela-cruz",
    medium: "Acrylic on board",
    year: 2024,
    price: 64000,
    width: 8808,
    height: 8460,
    image: "https://www.artic.edu/iiif/2/3c27b499-af56-f0d5-93b5-a7f2f1ad5813/full/843,/0/default.jpg",
    featured: false,
    likes: 24,
  },
  {
    id: "7",
    slug: "low-tide",
    title: "Low tide",
    artist: "ana-reyes",
    medium: "Oil on linen",
    year: 2019,
    price: 12000,
    width: 9310,
    height: 6237,
    image: "https://www.artic.edu/iiif/2/2d484387-2509-5e8e-2c43-22f9981972eb/full/843,/0/default.jpg",
    featured: false,
    likes: 5,
  },
  {
    id: "8",
    slug: "portrait-of-m",
    title: "Portrait of M.",
    artist: "leo-bautista",
    medium: "Gouache on paper",
    year: 2020,
    price: 35000,
    width: 2829,
    height: 2250,
    image: "https://www.artic.edu/iiif/2/3a34f988-f779-2e96-1786-8945b6b9c87d/full/843,/0/default.jpg",
    featured: false,
    likes: 2,
  },
  {
    id: "9",
    slug: "column",
    title: "Column",
    artist: "mara-santos",
    medium: "Oil on canvas",
    year: 2021,
    price: 88000,
    width: 9583,
    height: 16906,
    image: "https://www.artic.edu/iiif/2/c8ee825f-bc8c-c76b-1f05-5d692d9a6b47/full/843,/0/default.jpg",
    featured: true,
    likes: 9,
  },
  {
    id: "10",
    slug: "small-blue-room",
    title: "Small blue room",
    artist: "jun-dela-cruz",
    medium: "Acrylic on board",
    year: 2022,
    price: 7800,
    width: 1850,
    height: 2250,
    image: "https://www.artic.edu/iiif/2/e204d686-0e19-c10c-cf72-1000aae5be4a/full/843,/0/default.jpg",
    featured: false,
    likes: 4,
  },
  {
    id: "11",
    slug: "field-after-rain",
    title: "Field after rain",
    artist: "ana-reyes",
    medium: "Oil on linen",
    year: 2023,
    price: 51000,
    width: 12640,
    height: 10094,
    image: "https://www.artic.edu/iiif/2/52ac8996-3460-cf71-cb42-5c4d0aa29b74/full/843,/0/default.jpg",
    featured: false,
    likes: 0,
  },
  {
    id: "12",
    slug: "sleeping-cat",
    title: "Sleeping cat",
    artist: "leo-bautista",
    medium: "Gouache on paper",
    year: 2024,
    price: 22000,
    width: 1832,
    height: 2250,
    image: "https://www.artic.edu/iiif/2/d55b0cfc-0716-d6cd-3b38-5742903ce046/full/843,/0/default.jpg",
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
