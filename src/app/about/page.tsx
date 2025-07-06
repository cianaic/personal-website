export default function About() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">About</h1>
      </div>

      <div className="space-y-6 text-sm leading-relaxed text-gray-700">
        <p>
          Generalist 
        </p>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-3">Background</h2>
          <p>
            I studied at Trinity College Dublin, UC Berkeley and Tsinghua University. 
          </p>
          <p className="mt-2">
            From Meath, Ireland. 
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
            Currently working on Hack Europe, Forewell (Healthcare AI), Schwarzman Scholarship at Tsinghua, Sherpa? 
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-3">Elsewhere</h2>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.linkedin.com/in/cianmcglynn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://x.com/cian_mcglynn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              X
            </a>
            <a 
              href="https://www.goodreads.com/cianaic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Goodreads
            </a>
            <a 
              href="https://letterboxd.com/cianaic/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Letterboxd
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}