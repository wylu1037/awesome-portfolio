export interface StatsData {
  iconUrl: string;
  count: string;
  label: string;
}

export const STATS_DATA: StatsData[] = [
  {
    iconUrl: "/assets/example/one/icon1.svg",
    count: "1M+",
    label: "Download Your Pro",
  },
  {
    iconUrl: "/assets/example/one/icon2.svg",
    count: "180",
    label: "Unoptimized Image",
  },
  {
    iconUrl: "/assets/example/one/icon3.svg",
    count: "25",
    label: "Image Component and",
  },
  {
    iconUrl: "/assets/example/one/icon4.svg",
    count: "151",
    label: "Using the Image Co",
  },
];

export interface ServiceData {
  imgUrl: string;
  title: string;
  description: string;
}

export const SERVICES: ServiceData[] = [
  {
    imgUrl: "https://source.unsplash.com/featured/800x600?travel",
    title: "Travel",
    description:
      "Embark on a visual journey around the globe with this category, as photographers capture the essence of exploration and wanderlust.Through vibrant street scenes and immersive cultural experiences, the Travel category showcases the beauty and diversity of destinations near and far.",
  },
  {
    imgUrl: "https://source.unsplash.com/featured/800x600?nature",
    title: "Nature",
    description:
      "Nature's wonders take center stage in this category, where photographers capture the breathtaking landscapes, diverse flora and fauna, and mesmerizing natural phenomena that adorn our planet. From grand vistas to macro shots, these images transport viewers into the heart of the great outdoors.",
  },
  {
    imgUrl: "https://source.unsplash.com/featured/800x600?animals",
    title: "Animals",
    description:
      "This category pays homage to the fascinating world of animals. Photographers capture the diversity, behavior, and beauty of creatures from across the globe, bringing the animal kingdom closer to the viewer's heart and lens.",
  },
];

export interface TestimonialData {
  id: string;
  name: string;
  imgUrl: string;
  review: string;
  description: string;
}

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: "1",
    name: "Jack Chou",
    imgUrl: "/assets/example/one/people1.png",
    review: "Download Your Profile Picture",
    description:
      "Next.js also has support for Image Optimization by default. This allows for resizing, optimizing, and serving images in modern formats like WebP.",
  },
  {
    id: "2",
    name: "Rose Li",
    imgUrl: "/assets/example/one/people2.png",
    review: "mage Component and Image Optimization",
    description:
      "Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized.",
  },
  {
    id: "3",
    name: "Tom Chen",
    imgUrl: "/assets/example/one/logo.png",
    review: "Using the Image Component",
    description:
      "Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them. Unlike static site generators and static-only solutions.",
  },
];
