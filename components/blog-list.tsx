"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/types";

type BlogListProps = {
  featuredPost: Post;
  regularPosts: Post[];
};

export function BlogList({ featuredPost, regularPosts }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  // Get unique categories and format them
  const categories = useMemo(() => {
    const allPosts = [featuredPost, ...regularPosts];
    const allCategories = allPosts.flatMap((post) => post.categories);
    const uniqueCategories = Array.from(new Set(allCategories)).map(
      (category) => {
        // Remove slashes if any
        const withoutSlash = category.replace(/\//g, " ");

        // Split by hyphen and capitalize each word
        return withoutSlash
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }
    );

    // Sort alphabetically and add "Tümü" at the beginning
    return ["Tümü", ...uniqueCategories.sort()];
  }, [featuredPost, regularPosts]);

  // Filter and sort all posts including featured post
  const filteredPosts = useMemo(() => {
    const allPosts = [featuredPost, ...regularPosts];

    // First filter by category
    const filtered =
      selectedCategory === "Tümü"
        ? allPosts
        : allPosts.filter((post) =>
            post.categories.some(
              (cat) =>
                cat.toLowerCase() ===
                selectedCategory.toLowerCase().replace(/\s+/g, "-")
            )
          );

    // Then sort by date
    return filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  }, [featuredPost, regularPosts, selectedCategory]);

  const PostCard = ({
    post,
    isFeatured,
  }: {
    post: Post;
    isFeatured?: boolean;
  }) => (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block ${
        isFeatured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      <div className="aspect-[16/9] relative overflow-hidden rounded-lg bg-muted">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          {post.categories.map((category) => (
            <span key={category} className="text-primary font-medium">
              {category}
            </span>
          ))}
          <span className="text-muted-foreground">{post.readTime}</span>
        </div>
        <h3
          className={`font-semibold tracking-tight group-hover:text-primary transition-colors ${
            isFeatured ? "text-2xl" : "text-xl"
          }`}
        >
          {post.title}
        </h3>
        <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="container py-8 space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <PostCard key={post.slug} post={post} isFeatured={index === 0} />
        ))}
      </div>
    </div>
  );
}
