import { MetadataRoute } from 'next';
import projectsData from '@/lib/projects-data';
import { SITE_URL } from '@/lib/config';
import { posts } from '@site/content';
import { getAllTags } from '@/lib/utils';
import { slug } from 'github-slugger';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = projectsData;
  const projectUrls = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }));

  const routes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { route: '/skills', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/experience', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/projects', priority: 0.9, changeFrequency: 'monthly' as const },
    { route: '/contact', priority: 0.7, changeFrequency: 'yearly' as const },
    { route: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const publishedPosts = posts.filter((post) => post.published);
  const postUrls = publishedPosts.map((post) => ({
    url: `${SITE_URL}/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Add tag pages for better SEO
  const allTags = getAllTags(posts);
  const tagUrls = Array.isArray(allTags)
    ? allTags.map((tag) => ({
        url: `${SITE_URL}/blog?tag=${slug(tag)}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
    : [];

  return [...routes, ...projectUrls, ...postUrls, ...tagUrls];
}
