import { AboutSection } from '@/components/sections/AboutSection';
import { Metadata } from 'next';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About Vaibhav Parmar - Software Engineer & React Developer',
  description:
    'Meet Vaibhav Parmar, a passionate Software Engineer specializing in React.js, React Native, and Next.js development. Learn about his journey, expertise, and commitment to building privacy-focused applications and healthcare solutions.',
  keywords: [
    'Vaibhav Parmar',
    'About Vaibhav Parmar',
    'Software Engineer',
    'React Developer',
    'React.js Developer',
    'React Native Developer',
    'Next.js Developer',
    'Full Stack Developer',
    'Mobile App Developer',
    'Web Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Healthcare Technology',
    'Privacy-Focused Apps',
    'Portfolio',
    'Developer Profile',
  ],
  openGraph: {
    title: 'About Vaibhav Parmar - Software Engineer & React Developer',
    description:
      'Meet Vaibhav Parmar, a passionate Software Engineer specializing in React.js, React Native, and Next.js development. Learn about his journey, expertise, and commitment to building privacy-focused applications.',
    type: 'profile',
    url: 'https://vaibhav-parmar-portfolio.vercel.app/about',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vaibhav Parmar - Software Engineer Profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vaibhav Parmar - Software Engineer & React Developer',
    description:
      'Meet Vaibhav Parmar, a passionate Software Engineer specializing in React.js, React Native, and Next.js development.',
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://vaibhav-parmar-portfolio.vercel.app/about',
  },
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Vaibhav Parmar',
  description:
    'Learn about Vaibhav Parmar, a Software Engineer specializing in React.js, React Native, and Next.js development.',
  url: `${SITE_URL}/about`,
  mainEntity: {
    '@type': 'Person',
    name: 'Vaibhav Parmar',
    jobTitle: 'Software Engineer',
    description:
      'Passionate Software Engineer specializing in React.js, React Native, and Next.js development.',
    url: SITE_URL,
    sameAs: ['https://www.linkedin.com/in/vaibhav-parmar/', 'https://github.com/vaibhavparmar'],
    knowsAbout: [
      'React.js',
      'React Native',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Mobile Development',
      'Web Development',
      'Healthcare Technology',
      'Privacy-Focused Applications',
    ],
  },
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
        key="about-page-jsonld"
      />
      <AboutSection id="about" />
    </PageWrapper>
  );
}
