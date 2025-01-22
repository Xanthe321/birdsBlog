"use client";

import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/types";
import { getAllPosts } from "@/lib/mdx";
import type { Post } from "@/lib/types";
import MDXContent from "./mdx-content";

type BlogPreviewProps = {
  post: Post & {
    content: string;
    author: {
      name: string;
      avatar: string;
      role: string;
    };
  };
};

export function BlogPreview({ post }: BlogPreviewProps) {
  // Get the 3 most recent posts, excluding the current post
  const recentPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="max-w-4xl mx-auto py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/blog" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Header */}
      <header className="space-y-8 mb-12">
        <div className="space-y-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {post.categories.map((categoryId) => {
              const category = categories.find((c) => c.id === categoryId);
              return (
                category && (
                  <span
                    key={categoryId}
                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {category.name}
                  </span>
                )
              );
            })}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-muted">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 pt-4 border-t">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">{post.author.role}</p>
          </div>
          <Button variant="outline" size="sm" className="ml-auto group">
            <Share2 className="mr-2 h-4 w-4" />
            Share Article
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="lead text-muted-foreground text-xl mb-8">
          {post.excerpt}
        </p>
        <div className="prose prose-lg dark:prose-invert mt-8">
          <MDXContent source={post.content} />
        </div>
      </div>

      {/* Footer with Recent Posts */}
      <footer className="mt-16 pt-8 border-t space-y-12">
        <div className="space-y-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Recent Posts</h2>
            <p className="text-muted-foreground">
              Continue exploring our latest articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((recentPost) => (
              <Link
                key={recentPost.slug}
                href={`/blog/${recentPost.slug}`}
                className="group space-y-3"
              >
                <div className="aspect-[16/9] relative overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={recentPost.image}
                    alt={recentPost.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 text-sm">
                    {recentPost.categories.map((categoryId) => {
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
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {recentPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {recentPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog" className="group">
              View All Posts
              <ArrowLeft className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </footer>
    </article>
  );
}
