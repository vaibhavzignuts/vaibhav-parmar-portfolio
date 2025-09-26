import { Project } from '@/lib/types';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { Metadata } from 'next';
import projectsData from '@/lib/projects-data';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { SITE_URL } from '@/lib/config';

const FEATURED_PROJECT_IDS: (number | string)[] = [
  998877665, // Community Health Assistant
  525828811, // Schedulrr - Event Scheduling Platform
  992105629, // Belanaro - Import/Export Business Website
  991451039, // Turf Cricket - Booking Platform
];

async function getProjects(): Promise<Project[]> {
  let projects: Project[] = projectsData as Project[];

  projects.sort((a, b) => {
    const aFeaturedIndex = FEATURED_PROJECT_IDS.indexOf(a.id);
    const bFeaturedIndex = FEATURED_PROJECT_IDS.indexOf(b.id);

    if (aFeaturedIndex !== -1 && bFeaturedIndex !== -1) {
      return aFeaturedIndex - bFeaturedIndex;
    }
    if (aFeaturedIndex !== -1) return -1;
    if (bFeaturedIndex !== -1) return 1;

    const aHasImage = !!a.imageUrl;
    const bHasImage = !!b.imageUrl;
    if (aHasImage && !bHasImage) return -1;
    if (!aHasImage && bHasImage) return 1;

    const aStars = a.githubStats?.stars || 0;
    const bStars = b.githubStats?.stars || 0;
    if (bStars !== aStars) {
      return bStars - aStars;
    }

    return a.name.localeCompare(b.name);
  });

  return projects;
}

export const metadata: Metadata = {
  title: 'Vaibhav Parmar Projects - React.js & React Native Portfolio',
  description:
    "Explore Vaibhav Parmar's portfolio of innovative projects including React.js web applications, React Native mobile apps, healthcare solutions, and AI-powered applications. Discover his expertise in full-stack development.",
  keywords: [
    'Vaibhav Parmar Projects',
    'React.js Projects',
    'React Native Projects',
    'Next.js Projects',
    'Mobile App Development',
    'Web Development Portfolio',
    'Full Stack Projects',
    'Healthcare Applications',
    'AI Projects',
    'JavaScript Projects',
    'TypeScript Projects',
    'Supabase Projects',
    'Open Source Projects',
    'Software Engineer Portfolio',
    'Developer Projects',
    'Web Applications',
    'Mobile Applications',
  ],
  openGraph: {
    title: 'Vaibhav Parmar Projects - React.js & React Native Portfolio',
    description:
      "Explore Vaibhav Parmar's portfolio of innovative projects including React.js web applications, React Native mobile apps, and healthcare solutions.",
    type: 'website',
    url: 'https://vaibhav-parmar-portfolio.vercel.app/projects',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vaibhav Parmar Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Parmar Projects - React.js & React Native Portfolio',
    description:
      "Explore Vaibhav Parmar's portfolio of innovative projects including React.js web applications, React Native mobile apps, and healthcare solutions.",
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://vaibhav-parmar-portfolio.vercel.app/projects',
  },
};

const projectsCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: "Vaibhav Parmar's Projects",
  description:
    'A comprehensive collection of web development, mobile app, and healthcare projects by Vaibhav Parmar.',
  url: `${SITE_URL}/projects`,
};

export default async function ProjectsPage() {
  const allProjectsData = await getProjects();

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsCollectionSchema) }}
        key="projects-collection-jsonld"
      />
      <ProjectsSection
        id="projects"
        className="content-section"
        initialProjects={allProjectsData}
      />
    </PageWrapper>
  );
}
