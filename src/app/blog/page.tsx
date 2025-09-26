import { posts } from '@site/content';
import { sortPosts, getAllTags, sortTagsByCount } from '@/lib/utils';
import { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';
import { slug } from 'github-slugger';
import { BlogFilter } from '@/components/blog/BlogFilter';
import { EmptyState } from '@/components/blog/EmptyState';
import { PostGrid } from '@/components/blog/PostGrid';
import { Suspense } from 'react';
import { BlogSkeleton } from '@/components/blog/BlogSkeleton';

export const metadata: Metadata = {
  title: 'Vaibhav Parmar Blog - Web Development & Technology Insights',
  description:
    "Read Vaibhav Parmar's blog about web development, React.js, React Native, Next.js, AI, and modern technology. Get insights from a Software Engineer's perspective on coding, best practices, and industry trends.",
  keywords: [
    'Vaibhav Parmar Blog',
    'Software Engineer Blog',
    'React.js Blog',
    'React Native Blog',
    'Next.js Blog',
    'Web Development Blog',
    'JavaScript Blog',
    'TypeScript Blog',
    'Mobile Development Blog',
    'Full Stack Development Blog',
    'AI Blog',
    'Technology Blog',
    'Programming Blog',
    'Coding Blog',
    'Developer Blog',
    'Tech Insights',
    'Web Development Tips',
    'React Tutorials',
    'Mobile App Development',
    'Software Engineering',
  ],
  openGraph: {
    title: 'Vaibhav Parmar Blog - Web Development & Technology Insights',
    description:
      "Read Vaibhav Parmar's blog about web development, React.js, React Native, Next.js, AI, and modern technology. Get insights from a Software Engineer's perspective.",
    type: 'website',
    url: 'https://vaibhav-parmar-portfolio.vercel.app/blog',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vaibhav Parmar Blog - Technology Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Parmar Blog - Web Development & Technology Insights',
    description:
      "Read Vaibhav Parmar's blog about web development, React.js, React Native, Next.js, AI, and modern technology.",
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const searchTerm = sp?.q as string | undefined;
  const activeTags = sp?.tag ? (Array.isArray(sp.tag) ? sp.tag : [sp.tag]) : [];
  const view = (sp?.view as 'grid' | 'list') || 'grid';

  const sorted = sortPosts(posts.filter((post) => post.published));
  const allTags = getAllTags(posts);
  const sortedTags = sortTagsByCount(getAllTags(posts));

  const filteredPosts = (() => {
    let filtered = sorted;

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (activeTags.length > 0) {
      filtered = filtered.filter((post) =>
        activeTags.some((tag) => post.tags?.map((t) => slug(t)).includes(tag))
      );
    }

    return filtered;
  })();

  // Get featured post (most recent or specially marked)
  const featuredPost = !searchTerm && activeTags.length === 0 ? filteredPosts[0] : null;
  const regularPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  const blogPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: "Vaibhav Parmar's Blog",
    description:
      'Web development, React.js, React Native, and technology insights by Vaibhav Parmar',
    url: `${SITE_URL}/blog`,
    author: {
      '@type': 'Person',
      name: 'Vaibhav Parmar',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Vaibhav Parmar',
      url: SITE_URL,
    },
    inLanguage: 'en-US',
    blogPost: filteredPosts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `${SITE_URL}/${post.slug}`,
      datePublished: new Date(post.date).toISOString(),
      author: {
        '@type': 'Person',
        name: 'Vaibhav Parmar',
      },
    })),
  };

  return (
    <div className="min-h-screen container mx-auto mt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }}
        key="blog-page-jsonld"
      />
      <div className="container px-4 sm:px-6 lg:px-8 py-8">
        <Suspense fallback={<BlogSkeleton />}>
          <BlogFilter
            tags={allTags}
            sortedTags={sortedTags}
            searchTerm={searchTerm}
            activeTags={activeTags}
            view={view}
            postsCount={filteredPosts.length}
          />

          {filteredPosts?.length > 0 ? (
            <PostGrid featuredPost={featuredPost} posts={regularPosts} view={view} />
          ) : (
            <EmptyState searchTerm={searchTerm} hasFilters={activeTags.length > 0} />
          )}
        </Suspense>
      </div>
    </div>
  );
}
