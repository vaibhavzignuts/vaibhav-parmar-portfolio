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
  title: 'Projects',
  description:
    'A collection of projects by Vaibhav Parmar, showcasing skills in React.js, React Native, Next.js, and mobile development.',
  keywords: [
    'Projects',
    'Portfolio',
    'Full Stack Development',
    'Web Applications',
    'AI Projects',
    'Mobile Apps',
    'Open Source',
    'Next.js Projects',
    'React Projects',
    'Node.js Projects',
  ],
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
