import { Metadata } from 'next';
import { SITE_URL } from './config';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = '/og-image.png',
    ogType = 'website',
    noIndex = false,
  } = config;

  const fullTitle = title.includes('Vaibhav Parmar') ? title : `${title} | Vaibhav Parmar`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;

  return {
    title: fullTitle,
    description,
    keywords: [
      'Vaibhav Parmar',
      'Software Engineer',
      'React Developer',
      'React Native Developer',
      'Next.js Developer',
      'Full Stack Developer',
      'Web Developer',
      'Mobile Developer',
      ...keywords,
    ],
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      type: ogType,
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - Vaibhav Parmar`,
        },
      ],
      siteName: 'Vaibhav Parmar - Software Engineer',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@VaibhavParmar',
      site: '@VaibhavParmar',
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
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
  };
}

export function generatePersonSchema(name: string, additionalData: any = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url: SITE_URL,
    sameAs: ['https://www.linkedin.com/in/vaibhav-parmar/', 'https://github.com/vaibhavparmar'],
    ...additionalData,
  };
}

export function generateWebPageSchema(
  name: string,
  description: string,
  url: string,
  mainEntity?: any
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Vaibhav Parmar - Software Engineer',
      url: SITE_URL,
    },
    ...(mainEntity && { mainEntity }),
  };
}

export function generateArticleSchema(
  headline: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: `${SITE_URL}${url}`,
    datePublished,
    ...(dateModified && { dateModified }),
    author: {
      '@type': 'Person',
      name: 'Vaibhav Parmar',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Vaibhav Parmar',
      url: SITE_URL,
    },
  };
}

export function generateProjectSchema(
  name: string,
  description: string,
  url: string,
  techStack: string[],
  imageUrl?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    url: `${SITE_URL}${url}`,
    image: imageUrl ? `${SITE_URL}${imageUrl}` : `${SITE_URL}/og-image.png`,
    author: {
      '@type': 'Person',
      name: 'Vaibhav Parmar',
      url: SITE_URL,
    },
    keywords: techStack.join(', '),
    datePublished: '2023-01-01',
  };
}
