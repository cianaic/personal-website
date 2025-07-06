export default function Home() {
  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Cian McGlynn</h1>
        <p className="text-gray-600">Software engineer and entrepreneur.</p>
        <p className="text-sm text-gray-500 italic mt-4">
          &quot;What did you do during the intelligence explosion?&quot;
          <span className="block text-xs mt-1">— Jack Clark</span>
        </p>
      </div>

      <div className="space-y-6 text-sm leading-relaxed text-gray-700">
        <p>
          I&apos;m interested in building tools that enhance human capability, particularly at the intersection 
          of artificial intelligence and software development. I also co-founded Givedish, a social enterprise 
          working to tackle food insecurity through restaurant partnerships.
        </p>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-3">Recent Work</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Personal website with TinaCMS</span>
              <span className="text-gray-500">2025</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Givedish (3rd place, Trinity LaunchBox 2022)</span>
              <span className="text-gray-500">2022</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Automation framework</span>
              <span className="text-gray-500">2024</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-3">Contact</h2>
          <p>Feel free to reach out: cianmcglynn1 at gmail dot com</p>
        </div>
      </div>
    </div>
  );
}