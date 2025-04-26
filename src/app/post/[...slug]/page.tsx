import Link from 'next/link';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

interface GithubContent {
  content: string;
  encoding: string;
}

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function fetchContent(slug: string) {
  const response = await fetch(
    `https://api.github.com/repos/CBIIT/ccdi-ods-content/contents/pages/${slug}.md`,
    {
      headers: {
        'Accept': 'application/vnd.github.v3.raw',
      },
      next: { revalidate: 3600 }
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch content');
  }

  const content = await response.text();
  return content;
}

async function processMarkdown(content: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  return result.toString();
}

export default async function Post(props: PostPageProps) {
  const params = await props.params; 
  const slug = params.slug.join('/');
  const content = await fetchContent(slug);
  const processedContent = await processMarkdown(content);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div 
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
      <div className="mt-6">
        <Link 
          href="/" 
          className="text-blue-500 hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}