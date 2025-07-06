import { client } from "../../../../tina/__generated__/client";
import { notFound } from "next/navigation";
import LinkClient from "./client-page";

export default async function LinkPage({ params }: { params: { slug: string } }) {
  try {
    const linkResponse = await client.queries.link({
      relativePath: `${params.slug}.mdx`,
    });

    return <LinkClient {...linkResponse} />;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  const linksResponse = await client.queries.linkConnection();
  const links = linksResponse.data.linkConnection.edges || [];
  
  return links.map((link) => ({
    slug: link?.node?._sys.filename,
  }));
}