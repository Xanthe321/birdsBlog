import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { ShareButton } from "@/components/share-button";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  // Format date manually since we removed date-fns
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <article className="max-w-2xl mx-auto px-6 py-8">
      {/* Category */}
      <Link
        href={`/categories/${post.categories[0]}`}
        className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6"
      >
        {post.categories[0]}
      </Link>

      {/* Title */}
      <h1 className="text-3xl font-bold tracking-tight mb-4">{post.title}</h1>

      {/* Meta Info */}
      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-8">
        <time dateTime={post.date} className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {formatDate(post.date)}
        </time>
        <span>·</span>
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {post.readTime}
        </span>
      </div>

      {/* Featured Image */}
      <div className="mb-6">
        <div className="relative aspect-[16/9]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-b mb-6" />

      {/* Author and Share Section */}
      <div className="flex items-center justify-between mb-8">
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
            {post.author.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-medium text-base">{post.author.name}</h3>
            <p className="text-muted-foreground text-sm">{post.author.role}</p>
          </div>
        </div>

        {/* Share Button */}
        <ShareButton />
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        <MDXRemote source={post.content} />
      </div>

      {/* Recent Posts */}
      <div className="mt-16 pt-8 border-t">
        <h2 className="text-lg font-medium mb-6">Recent Posts</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Recent post cards buraya gelecek */}
        </div>
      </div>
    </article>
  );
}
