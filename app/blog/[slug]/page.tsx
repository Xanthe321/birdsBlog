import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="container py-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="prose prose-lg dark:prose-invert">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
