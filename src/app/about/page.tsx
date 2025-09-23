import { AboutSection } from '@/components/sections/AboutSection';
import { Metadata } from 'next';
import { PageWrapper } from '@/components/layout/PageWrapper';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn more about Vaibhav Parmar, a Software Engineer with a passion for building React.js, React Native applications and healthcare solutions.',
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <AboutSection id="about" />
    </PageWrapper>
  );
}
