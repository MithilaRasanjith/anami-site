export type NewsItem = {
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
  featured?: boolean;
  location?: string;
  coverImage?: string;
};

export const newsItems: NewsItem[] = [
  {
    title: "Opening Ceremony of Our New Udugampola Branch",
    slug: "opening-ceremony-udugampola-branch",
    excerpt:
      "ANAMI Japanese Language School officially opened its new Udugampola location last week with a special ceremony.",
    content: [
      "We are happy to announce the opening of our new ANAMI Japanese Language School location in Udugampola.",
      "The opening ceremony was held last week with students, parents, well-wishers, and invited guests.",
      "This new branch marks an important step in making Japanese language education more accessible to students in the area.",
      "We thank everyone who supported us and joined this special occasion.",
    ],
    date: "2026-03-29",
    category: "Event",
    featured: true,
    location: "Udugampola",
    coverImage: "/news/udugampola-opening.jpg",
  },
];