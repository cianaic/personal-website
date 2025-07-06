export default function About() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">About</h1>
      </div>

      <div className="space-y-6">
        <p className="content-text">
        </p>

        <div>
          <h2 className="section-title">Background</h2>
          <p className="content-text">
            I studied at Trinity College Dublin, UC Berkeley and Tsinghua University. 
          </p>
          <p className="content-text">
            From Meath, Ireland. 
          </p>
        </div>

        <div>
          <h2 className="section-title">Interests</h2>
          <ul className="content-list">
            <li>• Artificial intelligence</li>
            <li>• Entrepreneurship / Investing</li>
            <li>• Biology (synbio, compbio)</li>
            <li>• Energy</li>
            <li>• Geopolitics</li>
          </ul>
        </div>

        <div>
          <h2 className="section-title">Currently</h2>
          <p className="content-text">
            Currently working on Hack Europe, Forewell (Healthcare AI), Schwarzman Scholarship at Tsinghua, Sherpa? 
          </p>
        </div>

        <div>
          <h2 className="section-title">Elsewhere</h2>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://www.linkedin.com/in/cianmcglynn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="content-link"
            >
              LinkedIn
            </a>
            <a 
              href="https://x.com/cian_mcglynn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="content-link"
            >
              X
            </a>
            <a 
              href="https://www.goodreads.com/cianaic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="content-link"
            >
              Goodreads
            </a>
            <a 
              href="https://letterboxd.com/cianaic/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="content-link"
            >
              Letterboxd
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}