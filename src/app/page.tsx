import Link from 'next/link';

interface GithubCollection {
  name: string;
  path: string;
  type: string;
}

interface GithubPost {
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
      next: { revalidate: 3600 } // Revalidate every hour
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch collections');
  }

  const data: GithubCollection[] = await response.json();
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

  const data: GithubPost[] = await response.json();
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

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">CCDI Documentation</h1>
      
      <div className="prose lg:prose-xl">
        <p className="text-xl mb-6">
          Browse our documentation collections:
        </p>
        
        <div className="grid gap-6 mt-8">
          {collectionsWithPosts.map((collection) => (
            <article 
              key={collection.name}
              className="border rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {collection.name.charAt(0).toUpperCase() + collection.name.slice(1)}
              </h2>
              <ul className="space-y-2 ml-4">
                {collection.posts.map((post) => (
                  <li key={post.path}>
                    <Link 
                      href={`/post/${collection.name}/${post.name.replace('.md', '')}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {post.name.replace('.md', '').replace(/-/g, ' ')}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
