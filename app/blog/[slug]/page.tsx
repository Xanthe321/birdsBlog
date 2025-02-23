import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { ShareButton } from "@/components/share-button";
import { getBlogBySlug, getAllBlogPosts } from "@/lib/mdx";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogBySlug(params.slug);
  const allPosts = await getAllBlogPosts();

  if (!post) {
    return <div>Post not found</div>;
  }

  // Önce aynı kategorideki yazıları dene, yoksa son yazıları al
  let recentPosts = allPosts
    .filter(
      (p) =>
        p.slug !== params.slug && // Mevcut yazıyı hariç tut
        p.categories.some((cat) => post.categories.includes(cat)) // Aynı kategoride olanları al
    )
    .slice(0, 3); // Son 3 yazıyı al

  // Eğer aynı kategoride yeterli yazı yoksa, son yazılardan tamamla
  if (recentPosts.length < 3) {
    const remainingPosts = allPosts
      .filter(
        (p) =>
          p.slug !== params.slug && // Mevcut yazıyı hariç tut
          !recentPosts.some((rp) => rp.slug === p.slug) // Zaten eklenen yazıları hariç tut
      )
      .slice(0, 3 - recentPosts.length); // Kalan boşlukları doldur

    recentPosts = [...recentPosts, ...remainingPosts];
  }

  // Tarihe göre sırala
  recentPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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
      {/* <Link
        href={`/categories/${post.categories[0]}`}
        className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6"
      >
        {post.categories[0]}
      </Link> */}

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
            {post.author?.name.charAt(0)}
          </div>
          <div>
            <h3 className="font-medium text-base">{post.author?.name}</h3>
            <p className="text-muted-foreground text-sm">{post.author?.role}</p>
          </div>
        </div>

        {/* Share Button */}
        <ShareButton />
      </div>

      {/* MDX Content */}
      <div
        className="prose prose-lg max-w-none
        /* Başlıklar */
        prose-headings:font-bold
        prose-h1:text-3xl
        prose-h2:text-2xl
        prose-h3:text-xl
        prose-headings:text-gray-900
        prose-headings:my-6

        /* Paragraflar */
        prose-p:text-gray-600
        prose-p:leading-relaxed
        prose-p:my-4

        /* Listeler */
        prose-ul:list-disc
        prose-ol:list-decimal
        prose-li:text-gray-600
        prose-li:my-2

        /* Linkler */
        prose-a:text-blue-600
        prose-a:font-medium
        prose-a:no-underline
        hover:prose-a:underline

        /* Resimler */
        prose-img:rounded-lg
        prose-img:my-8

        /* Alıntılar */
        prose-blockquote:border-l-4
        prose-blockquote:border-gray-300
        prose-blockquote:pl-4
        prose-blockquote:italic
        prose-blockquote:text-gray-700

        /* Kod blokları */
        prose-code:text-blue-600
        prose-code:bg-blue-50
        prose-code:px-1.5
        prose-code:py-0.5
        prose-code:rounded
        prose-pre:bg-gray-900
        prose-pre:text-gray-100
        prose-pre:p-4
        prose-pre:rounded-lg

        /* Tablolar */
        prose-table:border-collapse
        prose-th:border
        prose-th:border-gray-300
        prose-th:p-2
        prose-td:border
        prose-td:border-gray-300
        prose-td:p-2

        /* Diğer */
        prose-hr:my-8
        prose-hr:border-gray-200
        prose-strong:font-bold
        prose-strong:text-gray-900
        prose-em:italic
      "
      >
        {post.content}
      </div>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <div className="mt-16 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
          <p className="text-gray-600 mb-6">
            Continue exploring our latest articles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((recentPost) => (
              <Link
                key={recentPost.slug}
                href={`/blog/${recentPost.slug}`}
                className="group"
              >
                <div className="relative aspect-[16/9] mb-4 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={recentPost.image}
                    alt={recentPost.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  {/* Categories */}
                  <div className="flex gap-2">
                    {recentPost.categories.map((category) => (
                      <span key={category} className="text-blue-600 text-sm">
                        {category}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold group-hover:text-blue-600">
                    {recentPost.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm line-clamp-2 bg-red-500">
                    {recentPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
