export default function About() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto px-6 py-16 font-mono">
      <header className="mb-12">
        <a href="/" className="text-sm hover:underline mb-8 inline-block">← Back</a>
        <h1 className="text-2xl font-bold">About</h1>
      </header>

      <main className="space-y-8 text-sm leading-relaxed">
        <section>
          <p>
            I'm a software engineer passionate about building tools and systems that enhance human capability. 
            My work sits at the intersection of technology, design, and human experience.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Background</h2>
          <p>
            With a foundation in computer science and years of experience across various domains,
            I've developed expertise in full-stack development, distributed systems, and emerging technologies.
            I believe in the power of simple, elegant solutions to complex problems.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Interests</h2>
          <ul className="space-y-1">
            <li>• Artificial intelligence and its societal implications</li>
            <li>• Open source software and collaborative development</li>
            <li>• System design and architecture</li>
            <li>• Developer tools and productivity</li>
            <li>• The future of human-computer interaction</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Currently</h2>
          <p>
            Exploring the frontiers of AI-assisted development while building tools that make 
            technology more accessible and powerful for everyone. Always open to interesting 
            conversations and collaborations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Philosophy</h2>
          <p className="italic">
            "The best time to plant a tree was 20 years ago. The second best time is now."
          </p>
          <p className="mt-2">
            I believe in continuous learning, building in public, and using technology as a 
            force multiplier for human creativity and problem-solving.
          </p>
        </section>
      </main>
    </div>
  );
}