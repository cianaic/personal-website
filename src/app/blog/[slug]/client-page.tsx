"use client";

import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function BlogPostClient(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const post = data.post;

  return (
    <div className="p-8 max-w-4xl">
      <article>
        <header className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900 mb-2">{post.title}</h1>
          <div className="text-sm text-gray-500 mb-4">
            {new Date(post.date).toLocaleDateString()}
          </div>
          {post.excerpt && (
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
          )}
        </header>
        <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
          <TinaMarkdown content={post.body} />
        </div>
      </article>
    </div>
  );
}