import TVShowDetails from "@/components/TVShowDetails";
import { TMDB_IMAGE_BASE_URL } from "@/constants/tmdb";
import { getTVShowDetails } from "@/repositories/tvshow";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.id;

  const { poster_path, name, overview } = await getTVShowDetails(id);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `99 Hotstar | ${name}`,
    description: overview,
    openGraph: {
      images: [`${TMDB_IMAGE_BASE_URL}/w500${poster_path}`, ...previousImages],
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getTVShowDetails(id);

  return <TVShowDetails data={data} />;
}
