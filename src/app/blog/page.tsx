import { client } from "../../../tina/__generated__/client";
import Link from "next/link";

export default async function BlogPage() {
  const postsResponse = await client.queries.postConnection();
  const posts = postsResponse.data.postConnection.edges;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6">
        {posts?.map((post) => (
          <article key={post?.node?.id} className="border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post?.node?._sys.filename}`}>
                {post?.node?.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-2">
              By {post?.node?.author} on {new Date(post?.node?.date).toLocaleDateString()}
            </p>
            {post?.node?.excerpt && (
              <p className="text-gray-700 mb-4">{post?.node?.excerpt}</p>
            )}
            {post?.node?.tags && (
              <div className="flex flex-wrap gap-2">
                {post.node.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}