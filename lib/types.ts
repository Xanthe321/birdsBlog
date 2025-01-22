export type Category = {
  id: string
  name: string
}

export type Post = {
  title: string
  excerpt: string
  image: string
  categories: string[]
  date: string
  readTime: string
  slug: string
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