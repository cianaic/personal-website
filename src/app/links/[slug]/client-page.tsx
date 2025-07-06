"use client";

import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function LinkClient(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const link = data.link;

  return (
    <div className="p-8 max-w-4xl">
      <article>
        <header className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900 mb-2">{link.title}</h1>
          <div className="text-sm text-blue-600 mb-2">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.url} →
            </a>
          </div>
          <div className="text-sm text-gray-500 mb-4">
            {new Date(link.date).toLocaleDateString()}
          </div>
          {link.description && (
            <p className="text-gray-600 mb-4">{link.description}</p>
          )}
        </header>
        <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
          <TinaMarkdown content={link.comments} />
        </div>
      </article>
    </div>
  );
}