import { BlogList } from "@/components/blog-list";
import { getAllPosts } from "@/lib/mdx";

import { Bird } from "lucide-react";

export default function BlogPage() {
  try {
    const posts = getAllPosts();
    
    if (!posts || posts.length === 0) {
      return (
        <div className="container py-8">Henüz blog yazısı bulunmamaktadır.</div>
      );
    }

    const featuredPost = posts[0];
    const regularPosts = posts.slice(1);

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
                    Blog
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-5xl">
                  Hikayeler ve İçgörüler
                </h1>
                <p className="text-base md:text-lg text-muted-foreground">
                  Kuş fotoğrafçılığı, koruma ve kuşların büyüleyici dünyası
                  hakkındaki makalelerimizi keşfedin.
                </p>
              </div>
            </div>
          </div>
        </section>

        <BlogList featuredPost={featuredPost} regularPosts={regularPosts} />
      </div>
    );
  } catch (error) {
    console.error("Error in BlogPage:", error);
    return (
      <div className="container py-8">
        Bir hata oluştu. Lütfen daha sonra tekrar deneyin.
      </div>
    );
  }
}
