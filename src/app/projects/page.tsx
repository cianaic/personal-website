import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto px-6 py-16 font-mono">
      <header className="mb-12">
        <Link href="/" className="text-sm hover:underline mb-8 inline-block">← Back</Link>
        <h1 className="text-2xl font-bold">Projects</h1>
      </header>

      <main className="space-y-12">
        <section>
          <div className="space-y-8">
            <article className="border-b border-gray-200 dark:border-gray-800 pb-8">
              <h2 className="text-lg font-semibold mb-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  AI Development Assistant
                </a>
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">2024 - Present</p>
              <p className="text-sm mb-3">
                An intelligent coding assistant that leverages large language models to help developers 
                write better code faster. Features include context-aware suggestions, automated refactoring, 
                and natural language to code translation.
              </p>
              <div className="flex space-x-4 text-sm">
                <span className="text-gray-500">TypeScript</span>
                <span className="text-gray-500">React</span>
                <span className="text-gray-500">Python</span>
              </div>
            </article>

            <article className="border-b border-gray-200 dark:border-gray-800 pb-8">
              <h2 className="text-lg font-semibold mb-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Distributed Task Queue
                </a>
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">2023</p>
              <p className="text-sm mb-3">
                A high-performance distributed task queue system designed for handling millions of 
                concurrent jobs. Built with fault tolerance and horizontal scalability in mind.
              </p>
              <div className="flex space-x-4 text-sm">
                <span className="text-gray-500">Go</span>
                <span className="text-gray-500">Redis</span>
                <span className="text-gray-500">Kubernetes</span>
              </div>
            </article>

            <article className="border-b border-gray-200 dark:border-gray-800 pb-8">
              <h2 className="text-lg font-semibold mb-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Real-time Analytics Dashboard
                </a>
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">2023</p>
              <p className="text-sm mb-3">
                A real-time analytics platform that processes and visualizes streaming data. 
                Capable of handling millions of events per second with sub-second latency.
              </p>
              <div className="flex space-x-4 text-sm">
                <span className="text-gray-500">Rust</span>
                <span className="text-gray-500">WebSocket</span>
                <span className="text-gray-500">D3.js</span>
              </div>
            </article>

            <article className="pb-8">
              <h2 className="text-lg font-semibold mb-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Open Source Contributions
                </a>
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Ongoing</p>
              <p className="text-sm mb-3">
                Regular contributor to various open source projects including developer tools, 
                documentation improvements, and bug fixes. Passionate about giving back to the community.
              </p>
              <div className="flex space-x-4 text-sm">
                <span className="text-gray-500">Various</span>
              </div>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Side Projects</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">CLI Tool for API Testing</a>
              <span className="text-gray-500 ml-2">- Streamline API development workflow</span>
            </li>
            <li>
              <a href="#" className="hover:underline">Personal Knowledge Base</a>
              <span className="text-gray-500 ml-2">- Zettelkasten-inspired note system</span>
            </li>
            <li>
              <a href="#" className="hover:underline">Automation Scripts</a>
              <span className="text-gray-500 ml-2">- Collection of productivity tools</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}