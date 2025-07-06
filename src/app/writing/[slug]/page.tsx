import { client, postQuery } from '@/lib/sanity'
import PortableText from '@/components/PortableText'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface PostPageProps {
  params: { slug: string }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await client.fetch(postQuery, { slug: params.slug })

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/writing" 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Writing
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12 border-b border-gray-100 pb-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full mb-4 capitalize">
              {post.category}
            </span>
            <h1 className="text-4xl font-medium text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
          </div>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {post.estimatedReadingTime && (
              <span>{post.estimatedReadingTime} min read</span>
            )}
          </div>

          {post.excerpt && (
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <PortableText content={post.content} />
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-100">
          <Link 
            href="/writing" 
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Writing
          </Link>
        </footer>
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
  
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}