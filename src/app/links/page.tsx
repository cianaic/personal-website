import { getMonthlyLinks } from '@/lib/markdown'

export default async function LinksPage() {
  const monthlyLinks = await getMonthlyLinks()

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Links</h1>
        <p className="text-gray-600">Interesting things I&apos;ve found on the internet.</p>
      </div>
      
      {monthlyLinks.map((monthData) => (
        <section key={`${monthData.month}-${monthData.year}`} className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {monthData.month} {monthData.year}
          </h2>
          
          <div 
            className="links-content"
            dangerouslySetInnerHTML={{ __html: monthData.content }}
          />
        </section>
      ))}

      {monthlyLinks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No links yet. Create a markdown file in:</p>
          <code className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">
            src/content/links/2025-01.md
          </code>
          <div className="mt-6 text-left max-w-md mx-auto bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Example links format:</p>
            <pre className="text-xs bg-white p-3 rounded border border-gray-200">
{`---
month: "January"
year: "2025"
---

- Found this [interesting article](https://example.com) about plain text, which led me to [another piece](https://example.com) on digital minimalism
- [This tool](https://example.com) completely changed how I think about note-taking
- Reading about [local-first software](https://example.com) and why it matters`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}