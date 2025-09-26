import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { Metadata } from 'next';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Vaibhav Parmar Experience - Software Engineer Career Journey',
  description:
    "Explore Vaibhav Parmar's professional experience as a Software Engineer, including his career journey, key roles, responsibilities, and achievements in React.js, React Native, and full-stack development.",
  keywords: [
    'Vaibhav Parmar Experience',
    'Software Engineer Experience',
    'React Developer Experience',
    'React Native Developer Experience',
    'Full Stack Developer Experience',
    'Professional Experience',
    'Work History',
    'Career Journey',
    'Software Engineer Career',
    'Web Developer Experience',
    'Mobile Developer Experience',
    'JavaScript Developer Experience',
    'TypeScript Developer Experience',
    'Next.js Developer Experience',
    'Supabase Developer Experience',
    'Healthcare Technology Experience',
    'Privacy-Focused Development',
    'API Development Experience',
    'Project Management Experience',
    'Agile Development',
    'Scrum Methodology',
  ],
  openGraph: {
    title: 'Vaibhav Parmar Experience - Software Engineer Career Journey',
    description:
      "Explore Vaibhav Parmar's professional experience as a Software Engineer, including his career journey, key roles, and achievements in React.js and React Native development.",
    type: 'profile',
    url: 'https://vaibhav-parmar-portfolio.vercel.app/experience',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vaibhav Parmar Professional Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Parmar Experience - Software Engineer Career Journey',
    description:
      "Explore Vaibhav Parmar's professional experience as a Software Engineer, including his career journey and achievements in React.js and React Native development.",
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://vaibhav-parmar-portfolio.vercel.app/experience',
  },
};

const experiencePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: 'Vaibhav Parmar Professional Experience',
  description: 'Professional experience and career journey of Vaibhav Parmar, Software Engineer.',
  url: `${SITE_URL}/experience`,
  mainEntity: {
    '@type': 'Person',
    name: 'Vaibhav Parmar',
    jobTitle: 'Software Engineer',
    description:
      'Experienced Software Engineer specializing in React.js, React Native, and full-stack development.',
    url: SITE_URL,
    sameAs: ['https://www.linkedin.com/in/vaibhav-parmar/', 'https://github.com/vaibhavparmar'],
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'Software Engineer',
        description: 'Full-stack development with focus on React.js and React Native',
      },
    ],
  },
};

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experiencePageSchema) }}
        key="experience-page-jsonld"
      />
      <ExperienceSection id="experience" />
    </PageWrapper>
  );
}
