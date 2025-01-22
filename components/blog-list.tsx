"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bird, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/lib/types";
import { MDXRemote } from "next-mdx-remote";
import type { Post } from "@/lib/types";

type BlogListProps = {
  featuredPost: Post;
  regularPosts: Post[];
};

export function BlogList({ featuredPost, regularPosts }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filterPosts = (posts: Post[]) => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" ||
        post.categories.includes(selectedCategory);
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  const filteredRegularPosts = filterPosts(regularPosts);

  const PostCard = ({ post }: { post: Post }) => (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="aspect-[16/9] relative overflow-hidden rounded-lg bg-muted">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex flex-wrap gap-2">
          {post.categories.map((categoryId) => {
            const category = categories.find((c) => c.id === categoryId);
            return (
              category && (
                <span
                  key={categoryId}
                  className="text-sm text-primary font-medium"
                >
                  {category.name}
                </span>
              )
            );
          })}
        </div>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="container py-8 space-y-8">
      {/* Search and Categories */}
      <div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={category.id === selectedCategory ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Featured Post */}
        <div className="lg:col-span-2 lg:row-span-2">
          <PostCard post={featuredPost} />
        </div>

        {/* Regular Posts */}
        {filteredRegularPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
