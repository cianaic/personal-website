export default function WritingPage() {
  const posts = [
    {
      id: 1,
      title: "Building with AI: Lessons from the Intelligence Explosion",
      date: "2025-01-06",
      excerpt: "Reflections on what it means to build in an era where AI is fundamentally changing how we work and create."
    },
    {
      id: 2,
      title: "The Givedish Journey: Social Impact Through Technology",
      date: "2024-12-15",
      excerpt: "How we built a social enterprise that makes charitable giving seamless through restaurant partnerships."
    },
    {
      id: 3,
      title: "Learning from LLMs: The New Study Partner",
      date: "2024-11-20",
      excerpt: "Why I've learned more from chatting with AI than traditional educational methods, and what this means for the future of learning."
    }
  ];

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Writing</h1>
        <p className="text-gray-600">Thoughts on technology, business, and life.</p>
      </div>
      
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <div className="block">
              <h2 className="text-lg font-medium text-gray-900 mb-1">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}