import { client, postsQuery } from '@/lib/sanity'
import Link from 'next/link'

export default async function WritingPage() {
  const posts = await client.fetch(postsQuery)

  // Group posts by category like Dario's site
  const groupedPosts = posts.reduce((acc: any, post: any) => {
    const category = post.category || 'other'
    if (!acc[category]) acc[category] = []
    acc[category].push(post)
    return acc
  }, {})

  const categoryLabels = {
    essays: 'Essays',
    links: 'Links',
    other: 'Other'
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Writing</h1>
        <p className="text-gray-600">Thoughts on technology, business, and life.</p>
      </div>
      
      {Object.entries(groupedPosts).map(([category, categoryPosts]: [string, any]) => (
        <section key={category} className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2">
            {categoryLabels[category as keyof typeof categoryLabels] || category}
          </h2>
          
          <div className="space-y-6">
            {categoryPosts.map((post: any) => (
              <article key={post._id} className="group">
                <Link href={`/writing/${post.slug.current}`} className="block hover:bg-gray-50 p-3 -m-3 rounded-lg transition-colors">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                    {post.estimatedReadingTime && (
                      <span className="ml-2">• {post.estimatedReadingTime} min read</span>
                    )}
                  </p>
                  {post.excerpt && (
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </section>
      ))}

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No posts yet. Visit your Sanity Studio to create content.</p>
          <a 
            href="/studio" 
            className="text-blue-600 hover:text-blue-800 underline mt-2 inline-block"
          >
            Go to Studio
          </a>
        </div>
      )}
    </div>
  );
}