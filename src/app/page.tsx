import Link from 'next/link';
import { Hero } from '@/components/Hero';
import  Banner from '@/components/Banner';
import  Gallery from '@/components/Gallery';
import { DataSharingGuidance } from "@/components/LinkList/DataSharingGuidance";
import {DataSharingProcess} from "@/components/DataProcessing";
import {DataSharingResources} from "@/components/Resources";

interface Collection {
  name: string;
  path: string;
  type: string;
  posts?: Post[];
}

interface Post {
  name: string;
  path: string;
  type: string;
}

async function fetchCollections() {
  const response = await fetch(
    'https://api.github.com/repos/CBIIT/ccdi-ods-content/contents/pages',
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch collections');
  }

  const data: Collection[] = await response.json();
  return data.filter(item => item.type === 'dir');
}

async function fetchPosts(collectionPath: string) {
  const response = await fetch(
    `https://api.github.com/repos/CBIIT/ccdi-ods-content/contents/pages/${collectionPath}`,
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts for ${collectionPath}`);
  }

  const data: Post[] = await response.json();
  return data.filter(item => item.type === 'file' && item.name.endsWith('.md'));
}

export default async function Home() {
  const collections = await fetchCollections();
  const collectionsWithPosts = await Promise.all(
    collections.map(async (collection) => ({
      ...collection,
      posts: await fetchPosts(collection.name)
    }))
  );

  return <HomeContent collections={collectionsWithPosts} />;
}

function HomeContent({ collections }: { collections: Collection[] }) {
  return (
    <main>
      <Hero />
      <Banner />
      <Gallery />
      <DataSharingGuidance />
      <DataSharingProcess />
      <DataSharingResources />
    </main>
  );
}
