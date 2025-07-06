'use client'

import { useState } from 'react'

interface Post {
  slug: string
  title: string
  date: string
  category: string
  excerpt?: string
  content: string
  readingTime: string
}

export default function WritingClient({ posts }: { posts: Post[] }) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  // Group posts by category
  const groupedPosts = posts.reduce((acc: Record<string, Post[]>, post) => {
    const category = post.category || 'essays'
    if (!acc[category]) acc[category] = []
    acc[category].push(post)
    return acc
  }, {})

  const categoryLabels = {
    essays: 'Essays',
    links: 'Links',
    other: 'Other'
  }

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-6 py-12 relative">
          <header className="mb-12 border-b border-gray-100 pb-8">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full capitalize">
                  {selectedPost.category}
                </span>
              </div>
              <h1 className="text-4xl font-medium text-gray-900 mb-4 leading-tight">
                {selectedPost.title}
              </h1>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <time dateTime={selectedPost.date}>
                {new Date(selectedPost.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {selectedPost.readingTime && (
                <span>{selectedPost.readingTime} min read</span>
              )}
            </div>

            {selectedPost.excerpt && (
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                {selectedPost.excerpt}
              </p>
            )}
          </header>

          <div 
            className="prose prose-lg max-w-none prose-headings:font-medium prose-a:text-blue-600 prose-code:text-sm"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          />
        </article>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Writing</h1>
        <p className="text-gray-600">Thoughts on technology, business, and life.</p>
      </div>
      
      {Object.entries(groupedPosts).map(([category, categoryPosts]: [string, Post[]]) => (
        <section key={category} className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-6 border-b border-gray-100 pb-2">
            {categoryLabels[category as keyof typeof categoryLabels] || category}
          </h2>
          
          <div className="space-y-6">
            {categoryPosts.map((post: Post) => (
              <article key={post.slug} className="group">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="block w-full text-left hover:bg-gray-50 p-3 -m-3 rounded-lg transition-colors"
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                    {post.readingTime && (
                      <span className="ml-2">• {post.readingTime} min read</span>
                    )}
                  </p>
                  {post.excerpt && (
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                </button>
              </article>
            ))}
          </div>
        </section>
      ))}

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No posts yet. Create a markdown file in:</p>
          <code className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">
            src/content/posts/your-post.md
          </code>
          <div className="mt-6 text-left max-w-md mx-auto bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Example post format:</p>
            <pre className="text-xs bg-white p-3 rounded border border-gray-200">
{`---
title: "My First Post"
date: "2025-01-07"
category: "essays"
excerpt: "A brief description"
---

Your content here...`}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}