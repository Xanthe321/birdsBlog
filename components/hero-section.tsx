"use client";

import { Bird, ArrowRight, Link } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container py-12 md:py-24">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Bird className="h-4 w-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                Kus Turleri
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                Kuşların
                <span className="text-primary block mt-2">
                  Dunyasini Keşfet
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[600px]">
                Kuşlar hakkında bilgi edinmek ve bu büyüleyici canlıların
                dünyasına adım atmak için blogumuzu keşfedin.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/blog"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 bg-[#2563EB] text-white hover:bg-[#2563EB]/90 group transition-colors"
              >
                Keşfetmeye Başla
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/galeri"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 border border-input hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Galeriyi Gör
              </a>
            </div>

            {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 border-t">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">1.2B+</p>
                <p className="text-sm text-muted-foreground mt-1">Kuş Türü</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">50B+</p>
                <p className="text-sm text-muted-foreground mt-1">Fotoğraf</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl md:text-3xl font-bold text-primary">10B+</p>
                <p className="text-sm text-muted-foreground mt-1">Üye</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Image Gallery Column - Keeping the same structure */}
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8 row-span-2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1444464666168-49d633b86797"
                  alt="Uçan kuş"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-black/50 text-white text-xs rounded-full">
                    Öne Çıkan
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-4 space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1520808663317-647b476a81b9"
                  alt="Sinek kuşu yakın çekim"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Görkemli kartal"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
