import Link from "next/link";
import { notFound } from "next/navigation";
import ArtistWorks from "@/components/ArtistWorks";
import { artists, artworks, getArtist } from "@/data/artworks";
import styles from "./page.module.css";

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = getArtist(slug);
  return { title: artist ? `${artist.name} / Likha` : "Likha" };
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) notFound();

  const works = artworks.filter((a) => a.artist === artist.slug);
  const i = artists.findIndex((a) => a.slug === artist.slug);
  const prev = artists[(i - 1 + artists.length) % artists.length];
  const next = artists[(i + 1) % artists.length];

  return (
    <main className={styles.page}>
      <header className={styles.head}>
        <h1 className={`${styles.name} caps`}>{artist.name}</h1>
        <p className={`${styles.meta} caps`}>
          {artist.city} / [ {works.length} ] works
        </p>
        <p className={styles.bio}>{artist.bio}</p>
        <a href="#" className={`${styles.follow} caps`}>
          Follow
        </a>
      </header>

      <ArtistWorks works={works} />

      <nav className={`${styles.pager} caps`}>
        <Link href={`/artists/${prev.slug}`}>[ &lt; ] {prev.name}</Link>
        <Link href={`/artists/${next.slug}`}>{next.name} [ &gt; ]</Link>
      </nav>
    </main>
  );
}
