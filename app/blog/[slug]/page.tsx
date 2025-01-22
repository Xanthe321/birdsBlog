import { BlogPreview } from "@/components/blog-preview";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const mdxSource = await serialize(post.content);

  return (
    <BlogPreview
      post={{
        ...post,
        author: {
          name: "Default Author",
          avatar: "/default-avatar.jpg",
          role: "Writer",
        },
        content: mdxSource,
      }}
    />
  );
}
