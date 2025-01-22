import { getPostBySlug } from "@/lib/mdx";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: true },
  });

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
    <article className="min-h-screen bg-background">
      {/* Hero Section with Image */}
      <div className="relative h-[60vh] w-full">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content Section */}
      <div className="container max-w-4xl mx-auto -mt-32 relative">
        <div className="bg-card rounded-xl shadow-lg p-8 md:p-12">
          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            {post.date && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
            )}
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            )}
            {post.author?.name && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
          )}

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2 mb-12">
              {post.categories.map((category: string) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {content}
          </div>
        </div>
      </div>
    </article>
  );
}
