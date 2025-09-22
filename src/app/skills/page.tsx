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
  title: 'Skills',
  description:
    'Explore the technical toolkit of Vaibhav Parmar, including expertise in React.js, React Native, Next.js, Supabase, and mobile development.',
  keywords: skills,
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
