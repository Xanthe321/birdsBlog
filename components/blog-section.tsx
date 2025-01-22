"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { categories } from "@/lib/types";
import type { Post } from "@/lib/types";

type BlogSectionProps = {
  initialPosts: Post[];
};

export function BlogSection({ initialPosts }: BlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts =
    selectedCategory === "all"
      ? initialPosts
      : initialPosts.filter((post) =>
          post.categories.includes(selectedCategory)
        );

  // Sadece ilk 9 postu göster
  const displayedPosts = filteredPosts.slice(0, 9);

  return (
    <section className="pb-24 pt-16 bg-background">
      <div className="container">
        <div className="space-y-16">
          <header className="space-y-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight mb-3">
                Etkileyici Hikayeler
              </h2>
              <p className="text-muted-foreground">
                Kuşların büyüleyici dünyası hakkında özenle seçilmiş makaleler
                koleksiyonumuzu keşfedin.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {displayedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group space-y-4"
              >
                <div className="aspect-[16/9] relative overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    {post.categories.map((categoryId) => {
                      const category = categories.find(
                        (c) => c.id === categoryId
                      );
                      return (
                        category && (
                          <span
                            key={categoryId}
                            className="text-primary font-medium"
                          >
                            {category.name}
                          </span>
                        )
                      );
                    })}
                    <span className="text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length > 9 && (
            <div className="flex justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog" className="group">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
