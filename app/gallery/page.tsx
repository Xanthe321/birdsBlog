"use client"

import { useState } from "react"
import Image from "next/image"
import { Bird, Filter, Search, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog"

const galleryImages = [
  {
    id: 1,
    title: "Süzülen Kartal",
    category: "birds-of-prey",
    photographer: "Michael Rivers",
    location: "Kayalık Dağları",
    url: "https://images.unsplash.com/photo-1548715089-038b5579d689",
  },
  {
    id: 2,
    title: "Uçuştaki Sinek Kuşu",
    category: "hummingbirds",
    photographer: "Sarah Wilson",
    location: "Kosta Rika",
    url: "https://images.unsplash.com/photo-1520808663317-647b476a81b9",
  },
  {
    id: 3,
    title: "Görkemli Baykuş",
    category: "birds-of-prey",
    photographer: "David Chen",
    location: "Pasifik Kuzeybatısı",
    url: "https://images.unsplash.com/photo-1609152759069-fd3fb6425e12",
  },
  {
    id: 4,
    title: "Yalıçapkını'nın Avı",
    category: "waterfowl",
    photographer: "Emma Thompson",
    location: "Amazon Nehri",
    url: "https://images.unsplash.com/photo-1621632361333-4649f0e10862",
  },
  {
    id: 5,
    title: "Zarif Balıkçıl",
    category: "waterfowl",
    photographer: "James Wilson",
    location: "Florida Bataklıkları",
    url: "https://images.unsplash.com/photo-1572402230267-f3e267c1e5a2",
  },
  {
    id: 6,
    title: "Sabah Ötücüsü",
    category: "songbirds",
    photographer: "Lisa Park",
    location: "İngiliz Kırları",
    url: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a",
  },
  {
    id: 7,
    title: "Gün Batımında Pelikan",
    category: "waterfowl",
    photographer: "Robert James",
    location: "Kaliforniya Sahili",
    url: "https://images.unsplash.com/photo-1444464666168-49d633b86797",
  },
  {
    id: 8,
    title: "Gökkuşağı Makaw",
    category: "exotic",
    photographer: "Maria Garcia",
    location: "Brezilya Yağmur Ormanı",
    url: "https://images.unsplash.com/photo-1552728089-57bdde30beb3",
  },
] as const

export default function GalleryPage() {
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null)

  const filteredImages = galleryImages.filter(image => {
    const matchesFilter = filter === "all" || image.category === filter
    const matchesSearch = image.title.toLowerCase().includes(search.toLowerCase()) ||
      image.photographer.toLowerCase().includes(search.toLowerCase()) ||
      image.location.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const handlePrevious = () => {
    setSlideDirection("left")
    setSelectedImageIndex(prev => 
      prev === null ? null : prev === 0 ? filteredImages.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setSlideDirection("right")
    setSelectedImageIndex(prev => 
      prev === null ? null : prev === filteredImages.length - 1 ? 0 : prev + 1
    )
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious()
    if (e.key === "ArrowRight") handleNext()
    if (e.key === "Escape") setSelectedImageIndex(null)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
          <div className="absolute inset-0" />
          <div className="container relative pt-12 md:pt-20 md:pb-4">
            <div className="max-w-2xl space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <Bird className="h-4 w-4" />
                  <span className="text-sm font-medium tracking-wide uppercase">
                  Fotoğraf Galerisi
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-5xl">
                  Doğanın Zarafetini Yakalamak
                </h1>
                <p className="text-base md:text-lg text-muted-foreground">
                  Dünyanın dört bir yanından seçilmiş etkileyici kuş fotoğrafları koleksiyonu.
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Başlık, fotoğrafçı veya konum ara..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tüm Kategoriler</SelectItem>
                <SelectItem value="birds-of-prey">Yırtıcı Kuşlar</SelectItem>
                <SelectItem value="songbirds">Ötücü Kuşlar</SelectItem>
                <SelectItem value="waterfowl">Su Kuşları</SelectItem>
                <SelectItem value="hummingbirds">Sinek Kuşları</SelectItem>
                <SelectItem value="exotic">Egzotik Kuşlar</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-background rounded-lg overflow-hidden border shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => {
                setSlideDirection(null)
                setSelectedImageIndex(index)
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setSlideDirection(null)
                  setSelectedImageIndex(index)
                }
              }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg">{image.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{image.photographer}</span>
                  <span>{image.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <Dialog 
        open={selectedImageIndex !== null} 
        onOpenChange={(open) => !open && setSelectedImageIndex(null)}
      >
        <DialogContent 
          className="max-w-[95vw] h-[90vh] p-0 bg-background/95 backdrop-blur-xl"
          onKeyDown={handleKeyDown}
        >
          {selectedImageIndex !== null && (
            <>
              <DialogTitle className="sr-only">
                {filteredImages[selectedImageIndex].title}
              </DialogTitle>
              
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <DialogClose className="absolute top-4 right-4 z-50">
                  <span className="h-10 w-10 flex items-center justify-center rounded-full bg-background/50 hover:bg-background/70 transition-colors">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Kapat</span>
                  </span>
                </DialogClose>

                {/* Navigation Buttons */}
                <div 
                  className="absolute left-4 z-50"
                  onClick={handlePrevious}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      handlePrevious()
                    }
                  }}
                >
                  <span className="h-10 w-10 flex items-center justify-center rounded-full bg-background/50 hover:bg-background/70 transition-colors cursor-pointer">
                    <ChevronLeft className="h-6 w-6" />
                    <span className="sr-only">Önceki görsel</span>
                  </span>
                </div>
                
                <div 
                  className="absolute right-4 z-50"
                  onClick={handleNext}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      handleNext()
                    }
                  }}
                >
                  <span className="h-10 w-10 flex items-center justify-center rounded-full bg-background/50 hover:bg-background/70 transition-colors cursor-pointer">
                    <ChevronRight className="h-6 w-6" />
                    <span className="sr-only">Sonraki görsel</span>
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                      <Image
                        src={filteredImages[selectedImageIndex].url}
                        alt={filteredImages[selectedImageIndex].title}
                        fill
                        className={`
                          object-contain transition-transform duration-300
                          ${slideDirection === "left" ? "animate-slide-left" : ""}
                          ${slideDirection === "right" ? "animate-slide-right" : ""}
                        `}
                        onLoad={() => setSlideDirection(null)}
                      />
                    </div>
                  </div>
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent text-white">
                    <h3 className="text-xl font-semibold">
                      {filteredImages[selectedImageIndex].title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {filteredImages[selectedImageIndex].photographer} • {filteredImages[selectedImageIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}