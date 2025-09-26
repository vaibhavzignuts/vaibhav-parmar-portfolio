import { SkillsSection } from '@/components/sections/SkillsSection';
import { Metadata } from 'next';
import { PageWrapper } from '@/components/layout/PageWrapper';

const skills = [
  'React.js',
  'React Native',
  'Next.js',
  'Expo',
  'TypeScript',
  'JavaScript (ES6+)',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Shadcn/UI',
  'Expo Router',
  'TanStack Query',
  'Supabase',
  'PostgreSQL',
  'RESTful APIs',
  'API Integration',
  'JWT',
  'Secure Local Storage',
  'Git',
  'Vercel',
  'CKEditor',
  'Error Handling',
  'UI/UX Implementation',
  'Privacy-Focused Apps',
  'UI/UX Design',
  'Full-Stack Architecture',
  'Performance Optimization',
];

export const metadata: Metadata = {
  title: 'Vaibhav Parmar Skills - React.js, React Native & Full Stack Developer',
  description:
    "Discover Vaibhav Parmar's comprehensive technical skills including React.js, React Native, Next.js, TypeScript, Supabase, and mobile development expertise. Explore his full-stack development capabilities.",
  keywords: [
    'Vaibhav Parmar Skills',
    'React.js Skills',
    'React Native Skills',
    'Next.js Skills',
    'TypeScript Skills',
    'JavaScript Skills',
    'Full Stack Developer Skills',
    'Mobile Development Skills',
    'Web Development Skills',
    'Software Engineer Skills',
    'Frontend Developer Skills',
    'Backend Developer Skills',
    'Supabase Skills',
    'PostgreSQL Skills',
    'UI/UX Skills',
    'API Development Skills',
    ...skills,
  ],
  openGraph: {
    title: 'Vaibhav Parmar Skills - React.js, React Native & Full Stack Developer',
    description:
      "Discover Vaibhav Parmar's comprehensive technical skills including React.js, React Native, Next.js, TypeScript, and Supabase expertise.",
    type: 'profile',
    url: 'https://vaibhav-parmar-portfolio.vercel.app/skills',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vaibhav Parmar Technical Skills',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Parmar Skills - React.js, React Native & Full Stack Developer',
    description:
      "Discover Vaibhav Parmar's comprehensive technical skills including React.js, React Native, Next.js, TypeScript, and Supabase expertise.",
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://vaibhav-parmar-portfolio.vercel.app/skills',
  },
};

const skillsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Vaibhav Parmar's Technical Skills",
  description: 'A list of technical skills and technologies Vaibhav Parmar is proficient in.',
  itemListElement: skills.map((skill, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: skill,
  })),
};

export default function SkillsPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsSchema) }}
        key="skills-jsonld"
      />
      <SkillsSection id="skills" />
    </PageWrapper>
  );
}
