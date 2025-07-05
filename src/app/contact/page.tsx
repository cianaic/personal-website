import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto px-6 py-16 font-mono">
      <header className="mb-12">
        <Link href="/" className="text-sm hover:underline mb-8 inline-block">← Back</Link>
        <h1 className="text-2xl font-bold">Contact</h1>
      </header>

      <main className="space-y-8 text-sm">
        <section>
          <p className="mb-6">
            I&apos;m always interested in connecting with people working on interesting problems. 
            Whether you have a project in mind, want to discuss ideas, or just want to say hello, 
            feel free to reach out.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-3">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Email:</span>
              <a href="mailto:hello@cianmcglynn.com" className="ml-2 hover:underline">
                hello@cianmcglynn.com
              </a>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">GitHub:</span>
              <a href="https://github.com/cianmcglynn" target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
                @cianmcglynn
              </a>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Twitter:</span>
              <a href="https://twitter.com/cianmcglynn" target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
                @cianmcglynn
              </a>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">LinkedIn:</span>
              <a href="https://linkedin.com/in/cianmcglynn" target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
                /in/cianmcglynn
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Office Hours</h2>
          <p>
            I occasionally hold virtual office hours where anyone can book a 30-minute slot to discuss 
            technical topics, career advice, or project feedback. Keep an eye on my Twitter for announcements.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Collaboration</h2>
          <p>
            I&apos;m open to collaborating on projects that align with my interests in AI, developer tools, 
            and building systems that enhance human capability. If you have an idea that could benefit 
            from my expertise, let&apos;s talk.
          </p>
        </section>

        <section className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs text-gray-500">
            Response time is usually within 48 hours. For urgent matters, please mention it in the subject line.
          </p>
        </section>
      </main>
    </div>
  );
}