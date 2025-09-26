import { ContactSection } from '@/components/sections/ContactSection';
import { Metadata } from 'next';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact Vaibhav Parmar - Software Engineer & React Developer',
  description:
    'Get in touch with Vaibhav Parmar, Software Engineer specializing in React.js and React Native. Discuss projects, collaboration opportunities, or hire for full-stack development work.',
  keywords: [
    'Contact Vaibhav Parmar',
    'Vaibhav Parmar Contact',
    'Hire Vaibhav Parmar',
    'Software Engineer Contact',
    'React Developer Contact',
    'React Native Developer Contact',
    'Full Stack Developer Contact',
    'Get in Touch',
    'Email Vaibhav Parmar',
    'Collaboration',
    'Project Inquiries',
    'Hire Full Stack Developer',
    'Hire React Developer',
    'Hire Mobile Developer',
    'Contact Software Engineer',
    'Web Developer Contact',
    'Mobile App Developer Contact',
    'Freelance Developer',
    'Contract Developer',
  ],
  openGraph: {
    title: 'Contact Vaibhav Parmar - Software Engineer & React Developer',
    description:
      'Get in touch with Vaibhav Parmar, Software Engineer specializing in React.js and React Native. Discuss projects, collaboration opportunities, or hire for full-stack development work.',
    type: 'website',
    url: 'https://vaibhav-parmar-portfolio.vercel.app/contact',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Vaibhav Parmar - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Vaibhav Parmar - Software Engineer & React Developer',
    description:
      'Get in touch with Vaibhav Parmar, Software Engineer specializing in React.js and React Native. Discuss projects and collaboration opportunities.',
    images: ['/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://vaibhav-parmar-portfolio.vercel.app/contact',
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Vaibhav Parmar',
  description: 'Contact form and details to get in touch with Vaibhav Parmar.',
  url: `${SITE_URL}/contact`,
  potentialAction: {
    '@type': 'CommunicateAction',
    target: {
      '@type': 'EntryPoint',
      actionPlatform: [
        'http://schema.org/Website',
        'http://schema.org/MobileApplication',
        'http://schema.org/DesktopApplication',
      ],
    },
    recipient: {
      '@type': 'Person',
      name: 'Vaibhav Parmar',
    },
  },
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
        key="contact-jsonld"
      />
      <ContactSection id="contact" />
    </PageWrapper>
  );
}
