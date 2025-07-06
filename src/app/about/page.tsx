export default function About() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">About</h1>
        <p className="text-gray-600">Generalist.</p>
      </div>

      <div className="space-y-6 text-sm leading-relaxed text-gray-700">
        <p>
          I&apos;m a generalist passionate about building tools and systems that enhance human flourishing. 
          My work sits at the intersection of technology, management, operations, ideation.
        </p>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-3">Background</h2>
          <p>
            I studied at Trinity College Dublin, UC Berkeley and Tsinghua University. I probably learned most from chatting to llms at this stage. more history here
          </p>
          <p className="mt-2">
            other piece of history / background here
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-3">Interests</h2>
          <ul className="space-y-1">
            <li>• Artificial intelligence</li>
            <li>• Entrepreneurship / Investing</li>
            <li>• Biology (synbio, compbio)</li>
            <li>• Energy</li>
            <li>• Geopolitics</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-3">Currently</h2>
          <p>
            Currently working on Hack Europe, Forewell (healthcare ai co), Schwarzman Scholarship @ Tsinghua, productivity hacking (lifeOS/Sherpa)
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-3">Philosophy</h2>
          <p className="italic">
            &quot;What did you do during the intelligence explosion?&quot; — Jack Clark
          </p>
          <p className="mt-2">
            I believe ai is the greatest force multiplier in human history, and will allow one that embraces it to live 10 lives in terms of output. 
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-3">Contact</h2>
          <p>
            Feel free to reach out if you&apos;d like to discuss collaborations, ideas, or just chat 
            about technology and entrepreneurship: cianmcglynn1 at gmail dot com
          </p>
        </div>
      </div>
    </div>
  );
}