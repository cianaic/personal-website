import { client } from "../../../../tina/__generated__/client";
import { notFound } from "next/navigation";
import BlogPostClient from "./client-page";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const postResponse = await client.queries.post({
      relativePath: `${params.slug}.mdx`,
    });

    return <BlogPostClient {...postResponse} />;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  const postsResponse = await client.queries.postConnection();
  const posts = postsResponse.data.postConnection.edges || [];
  
  return posts.map((post) => ({
    slug: post?.node?._sys.filename,
  }));
}