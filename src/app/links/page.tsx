import { client, linksQuery } from '@/lib/sanity'

export default async function LinksPage() {
  const links = await client.fetch(linksQuery)

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Links</h1>
        <p className="text-gray-600">Interesting things I&apos;ve found on the internet.</p>
      </div>
      
      <div className="space-y-8">
        {links.map((link: any) => (
          <article key={link._id} className="group border-b border-gray-100 pb-6">
            <div className="block">
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.title} →
                </a>
              </h2>
              <p className="text-sm text-blue-600 mb-2 break-all">
                {link.url}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                {new Date(link.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              {link.description && (
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {link.description}
                </p>
              )}
              {link.tags && link.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {link.tags.map((tag: string, index: number) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {links.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No links yet. Visit your Sanity Studio to create content.</p>
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