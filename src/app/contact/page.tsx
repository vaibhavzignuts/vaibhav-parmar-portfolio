import { ContactSection } from '@/components/sections/ContactSection';
import { Metadata } from 'next';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Vaibhav Parmar to discuss projects, ideas, or opportunities.',
  keywords: [
    'Contact Vaibhav Parmar',
    'Get in Touch',
    'Email',
    'Collaboration',
    'Project Inquiries',
    'Hire Full Stack Developer',
    'Contact Software Engineer',
  ],
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
