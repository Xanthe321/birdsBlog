import { HeroSection } from "@/components/hero-section";
import { BlogSection } from "@/components/blog-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { getAllBlogPosts } from "@/lib/mdx";


export default async function Home() {
  const posts = await getAllBlogPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <BlogSection initialPosts={posts} />
      {/* <NewsletterSection /> */}
    </div>
  );
}
