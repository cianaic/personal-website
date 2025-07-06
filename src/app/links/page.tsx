import { client } from "../../../tina/__generated__/client";
import Link from "next/link";

export default async function LinksPage() {
  const linksResponse = await client.queries.linkConnection();
  const links = linksResponse.data.linkConnection.edges;

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-900 mb-2">Links</h1>
        <p className="text-gray-600">Interesting things I've found on the internet.</p>
      </div>
      
      <div className="space-y-6">
        {links?.map((link) => (
          <article key={link?.node?.id} className="group">
            <Link href={`/links/${link?.node?._sys.filename}`} className="block">
              <h2 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                {link?.node?.title}
              </h2>
              <p className="text-sm text-blue-600 mb-1">
                {link?.node?.url}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(link?.node?.date).toLocaleDateString()}
              </p>
              {link?.node?.description && (
                <p className="text-gray-700 text-sm leading-relaxed">
                  {link?.node?.description}
                </p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}