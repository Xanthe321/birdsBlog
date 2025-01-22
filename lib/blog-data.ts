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

export const featuredPosts: Post[] = [
  {
    title: "Görkemli Kel Kartal",
    excerpt: "Kuzey Amerika'nın en ikonik yırtıcı kuşunun avlanma teknikleri ve yuvalama alışkanlıklarını keşfedin.",
    image: "https://images.unsplash.com/photo-1548715089-038b5579d689",
    categories: ["birds-of-prey", "conservation"],
    date: "24 Ocak 2024",
    readTime: "5 dk okuma",
    slug: "gorkemli-kel-kartal"
  },
  {
    title: "Sinek Kuşları: Doğanın Helikopterleri",
    excerpt: "Bu olağanüstü minik kuşların benzersiz uçuş yetenekleri ve beslenme düzenleri hakkında bilgi edinin.",
    image: "https://images.unsplash.com/photo-1520808663317-647b476a81b9",
    categories: ["hummingbirds"],
    date: "22 Ocak 2024",
    readTime: "4 dk okuma",
    slug: "sinek-kuslari-doganin-helikopterleri"
  },
  {
    title: "Gökdoğan: Hız Şampiyonu",
    excerpt: "Bu hava ustalarının inanılmaz dalış hızları ve avlanma stratejilerini keşfedin.",
    image: "https://images.unsplash.com/photo-1609152759069-fd3fb6425e12",
    categories: ["birds-of-prey"],
    date: "20 Ocak 2024",
    readTime: "6 dk okuma",
    slug: "gokdogan-hiz-sampiyonu"
  },
  {
    title: "Kuş Fotoğrafçılığı Sanatı",
    excerpt: "Doğal ortamlarında muhteşem kuş fotoğrafları çekme tekniklerini öğrenin.",
    image: "https://images.unsplash.com/photo-1621632361333-4649f0e10862",
    categories: ["photography"],
    date: "18 Ocak 2024",
    readTime: "8 dk okuma",
    slug: "kus-fotografciligi-rehberi"
  },
  {
    title: "Sulak Alan Savaşçıları: Balıkçıllar",
    excerpt: "Bataklıklarımızın ve su yollarımızın zarif avcılarına yakından bakış.",
    image: "https://images.unsplash.com/photo-1572402230267-f3e267c1e5a2",
    categories: ["waterfowl", "conservation"],
    date: "16 Ocak 2024",
    readTime: "7 dk okuma",
    slug: "sulak-alan-savascilari"
  },
  {
    title: "Baharın Ötücü Kuşları",
    excerpt: "İlkbaharda bahçelerimizi dolduran melodili sesleri tanıyın.",
    image: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a",
    categories: ["songbirds"],
    date: "14 Ocak 2024",
    readTime: "6 dk okuma",
    slug: "baharin-otucu-kuslari"
  }
]