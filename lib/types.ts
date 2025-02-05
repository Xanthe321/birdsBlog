export type Category = {
  id: string
  name: string
}

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  readTime: string;
  categories: string[];
  author?: {
    name: string;
    avatar: string;
    role: string;
  };
  content: any;
}

export const categories: Category[] = [
  { id: "all", name: "Tüm Yazılar" },
  { id: "birds-of-prey", name: "Yırtıcı Kuşlar" },
  { id: "songbirds", name: "Ötücü Kuşlar" },
  { id: "waterfowl", name: "Su Kuşları" },
  { id: "hummingbirds", name: "Sinek Kuşları" },
  { id: "photography", name: "Fotoğrafçılık" },
  { id: "conservation", name: "Koruma" }
] 