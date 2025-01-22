import { HeroSection } from "@/components/hero-section";
import { BlogSection } from "@/components/blog-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <BlogSection initialPosts={posts} />
      {/* <NewsletterSection /> */}
    </div>
  );
}
