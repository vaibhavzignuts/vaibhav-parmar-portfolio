import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vaibhav Parmar | Software Engineer',
    short_name: 'Vaibhav Parmar',
    description: 'Portfolio of Vaibhav Parmar, a Software Engineer specializing in React.js, React Native, Next.js, TypeScript, and Supabase.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0f1c',
    theme_color: '#0a0f1c',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}