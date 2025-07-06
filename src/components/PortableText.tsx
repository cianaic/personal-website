import { PortableText as SanityPortableText } from '@portabletext/react'
import Link from 'next/link'

const components = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-medium text-gray-900 mb-8 mt-12 leading-tight tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-medium text-gray-900 mb-6 mt-10 leading-tight tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-medium text-gray-900 mb-4 mt-8 leading-tight">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-800 mb-6 leading-[1.7] text-[17px] font-light">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-200 pl-8 py-4 my-8 text-gray-700 italic bg-gray-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target={value.blank ? '_blank' : undefined}
        rel={value.blank ? 'noopener noreferrer' : undefined}
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {children}
      </a>
    ),
  },
  types: {
    code: ({ value }: any) => (
      <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
        <code className="text-sm font-mono">{value.code}</code>
      </pre>
    ),
  },
}

export default function PortableText({ content }: { content: any }) {
  return <SanityPortableText value={content} components={components} />
}