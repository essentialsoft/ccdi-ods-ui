import Link from 'next/link';

interface GithubCollection {
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

export default async function Home() {
  const collections = await fetchCollections();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">CCDI Documentation</h1>
      
      <div className="prose lg:prose-xl">
        <p className="text-xl mb-6">
          Browse our documentation collections:
        </p>
        
        <div className="grid gap-4 mt-8">
          {collections.map((collection) => (
            <article 
              key={collection.name}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <Link 
                href={`/posts/${collection.name}`}
                className="text-xl font-semibold hover:text-blue-500 no-underline"
              >
                {collection.name.charAt(0).toUpperCase() + collection.name.slice(1)}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
