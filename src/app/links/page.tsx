export default function LinksPage() {
  const links = [
    {
      id: 1,
      title: "Anthropic's Claude",
      url: "https://claude.ai",
      date: "2025-01-06",
      description: "The AI that helped build this website. Incredible capabilities for coding and reasoning."
    },
    {
      id: 2,
      title: "Patrick Collison's Website",
      url: "https://patrickcollison.com",
      date: "2024-12-20",
      description: "Inspiration for the clean, minimal design of this site. Great example of content-focused web design."
    },
    {
      id: 3,
      title: "TinaCMS",
      url: "https://tina.io",
      date: "2024-12-15",
      description: "Powerful Git-based CMS that we used initially. Great for content management but added deployment complexity."
    },
    {
      id: 4,
      title: "Next.js Documentation",
      url: "https://nextjs.org/docs",
      date: "2024-11-30",
      description: "Comprehensive docs for the React framework powering this site. App Router is a game-changer."
    }
  ];

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Links</h1>
        <p className="text-gray-600">Interesting things I've found on the internet.</p>
      </div>
      
      <div className="space-y-6">
        {links.map((link) => (
          <article key={link.id} className="group">
            <div className="block">
              <h2 className="text-lg font-medium text-gray-900 mb-1">
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.title} →
                </a>
              </h2>
              <p className="text-sm text-blue-600 mb-1">
                {link.url}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(link.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {link.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}