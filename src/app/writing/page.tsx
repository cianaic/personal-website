import { client } from "../../../tina/__generated__/client";
import Link from "next/link";

export default async function WritingPage() {
  const postsResponse = await client.queries.postConnection();
  const posts = postsResponse.data.postConnection.edges;

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Writing</h1>
        <p className="text-gray-600">Thoughts on technology, business, and life.</p>
      </div>
      
      <div className="space-y-6">
        {posts?.map((post) => (
          <article key={post?.node?.id} className="group">
            <Link href={`/blog/${post?.node?._sys.filename}`} className="block">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                {post?.node?.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(post?.node?.date).toLocaleDateString()}
              </p>
              {post?.node?.excerpt && (
                <p className="text-gray-700 text-sm leading-relaxed">
                  {post?.node?.excerpt}
                </p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}