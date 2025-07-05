export default function Home() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto px-6 py-16 font-mono">
      <header className="mb-16">
        <h1 className="text-2xl font-bold mb-4">Cian McGlynn</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Software engineer and builder of digital experiences.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 italic">
          "What did you do during the intelligence explosion?"
          <span className="block text-xs mt-1">— Credit to Anthropic's Head of Policy</span>
        </p>
      </header>

      <nav className="mb-16">
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/about" className="hover:underline">About</a>
          </li>
          <li>
            <a href="/projects" className="hover:underline">Projects</a>
          </li>
          <li>
            <a href="/writing" className="hover:underline">Writing & Notes</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Recent Work</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <a href="#" className="hover:underline">Project Alpha</a>
              <span className="text-gray-500">2025</span>
            </li>
            <li className="flex justify-between">
              <a href="#" className="hover:underline">Open Source Contribution</a>
              <span className="text-gray-500">2024</span>
            </li>
            <li className="flex justify-between">
              <a href="#" className="hover:underline">Research Paper</a>
              <span className="text-gray-500">2024</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Recent Notes</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            As opposed to a traditional blog, this is a collection of links & corresponding notes 
            I keep to document learnings & opinions.
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:underline">On building in the age of AI</a>
              <span className="text-gray-500 ml-2">Dec 2024</span>
            </li>
            <li>
              <a href="#" className="hover:underline">Thoughts on modern web architecture</a>
              <span className="text-gray-500 ml-2">Nov 2024</span>
            </li>
            <li>
              <a href="#" className="hover:underline">Learning in public</a>
              <span className="text-gray-500 ml-2">Oct 2024</span>
            </li>
          </ul>
        </section>
      </main>

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex space-x-4 text-sm">
          <a href="https://github.com" className="hover:underline">GitHub</a>
          <a href="https://twitter.com" className="hover:underline">Twitter</a>
          <a href="https://linkedin.com" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}