import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Noto_Sans_Gujarati, Noto_Sans_Devanagari } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { SITE_URL } from '@/lib/config';
import { experiencesData } from '@/lib/experience-data';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const notoSansGujarati = Noto_Sans_Gujarati({
  weight: ['400', '700'],
  subsets: ['gujarati'],
  variable: '--font-noto-gujarati',
  display: 'swap',
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  weight: ['400', '700'],
  subsets: ['devanagari'],
  variable: '--font-noto-devanagari',
  display: 'swap',
});

const SITE_DESCRIPTION =
  'Portfolio of Vaibhav Parmar, a passionate Software Engineer specializing in React.js, React Native, Next.js, TypeScript, and Supabase with a focus on privacy-focused applications.';
const SITE_TITLE = 'Vaibhav Parmar | Software Engineer';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | Vaibhav Parmar`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Vaibhav Parmar',
    'Software Engineer',
    'React.js Developer',
    'React Native Developer',
    'Next.js Developer',
    'TypeScript',
    'JavaScript',
    'Supabase',
    'PostgreSQL',
    'Expo',
    'Mobile Development',
    'Privacy-Focused Apps',
    'UI/UX Design',
    'Full-Stack Development',
    'API Integration',
    'JWT',
    'Secure Local Storage',
    'CKEditor',
    'Error Handling',
    'Performance Optimization',
    'TanStack Query',
    'Expo Router',
    'Portfolio',
    'Web Developer India',
    'React.js',
    'React Native',
    'Next.js',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Shadcn/UI',
    'RESTful APIs',
    'API Integration',
    'Git',
    'Vercel',
    'UI/UX Implementation',
    'Full-Stack Architecture',
  ],
  authors: [{ name: 'Vaibhav Parmar', url: SITE_URL }],
  creator: 'Vaibhav Parmar',
  openGraph: {
    title: SITE_TITLE,
    description:
      'Discover the portfolio of Vaibhav Parmar, showcasing expertise in React.js, React Native, and mobile development.',
    url: SITE_URL,
    siteName: 'Vaibhav Parmar Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vaibhav Parmar - Software Engineer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description:
      'Explore projects and skills of Vaibhav Parmar, a Software Engineer focused on React.js and React Native development.',
    images: ['/twitter-image.png'],
    creator: '@VaibhavParmar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { icon: '/favicon.svg', shortcut: '/favicon-16x16.png', apple: '/apple-touch-icon.png' },
  verification: { google: 'tNXFFpZE1VOHdcWpBlnAsX7avQThqRD6wjolUQaG4rU' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f0f5ff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0f1c' },
  ],
};

const monthMap: { [key: string]: string } = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
};

const parseDuration = (duration: string) => {
  const parts = duration.split(' - ');
  const [startMonth, startYear] = parts[0].split(' ');
  const startDate = `${startYear}-${monthMap[startMonth]}`;

  let endDate = null;
  if (parts[1] !== 'Present') {
    const [endMonth, endYear] = parts[1].split(' ');
    endDate = `${endYear}-${monthMap[endMonth]}`;
  }
  return { startDate, endDate };
};

const worksFor = experiencesData.map((exp) => ({
  '@type': 'Organization',
  name: exp.company.split(',')[0],
}));

const hasOccupation = experiencesData.flatMap((exp) =>
  exp.roles.map((role) => {
    const { startDate, endDate } = parseDuration(role.duration);
    return {
      '@type': 'Occupation',
      name: role.title,
      startDate: startDate,
      ...(endDate && { endDate: endDate }),
      worksFor: {
        '@type': 'Organization',
        name: exp.company.split(',')[0],
      },
    };
  })
);

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Vaibhav Parmar',
      url: SITE_URL,
      image: `${SITE_URL}/images/vaibhav-parmar.webp`,
      jobTitle: 'Software Engineer',
      description: SITE_DESCRIPTION,
      sameAs: ['https://www.linkedin.com/in/vaibhav-parmar/', 'https://github.com/vaibhavparmar'],
      knowsAbout: [
        'React.js',
        'React Native',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Supabase',
        'PostgreSQL',
        'Expo',
        'Mobile Development',
        'Privacy-Focused Applications',
      ],
      workLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'India',
          addressCountry: 'IN',
        },
      },
      worksFor: worksFor,
      hasOccupation: hasOccupation,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      publisher: {
        '@id': `${SITE_URL}/#person`,
      },
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `Home | ${SITE_TITLE}`,
      isPartOf: {
        '@id': `${SITE_URL}/#website`,
      },
      about: {
        '@id': `${SITE_URL}/#person`,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-image.png`,
      },
      datePublished: '2023-01-01T00:00:00+00:00',
      dateModified: new Date().toISOString(),
    },
  ],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          geistSans.variable,
          geistMono.variable,
          notoSansGujarati.variable,
          notoSansDevanagari.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <a href="#main-content" className="skip-to-content-link">
            Skip to main content
          </a>
          {children}
          {modal}
          <Toaster richColors position="top-right" closeButton />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            key="structured-data"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
