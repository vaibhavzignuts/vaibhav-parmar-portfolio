/*
 * IMPORTANT SEO NOTE: For better search engine indexing, ensure each project's `description`
 * is unique, detailed, and comprehensive. Aim for a paragraph or two highlighting unique features,
 * challenges, and technologies. This helps Google understand the value of each project page.
 */
const projectsData = [
  {
    id: 998877665,
    name: 'Community Health Assistant',
    description:
      'A full-stack healthcare assistant web application empowering underserved communities with accessible healthcare tools. Features AI-powered symptom checking, local facility discovery, medicine reminders, and emergency contact management.',
    repoUrl: 'https://github.com/vaibhavzignuts/ai-health-assistant',
    liveUrl: 'https://ai-health-assistant-rho.vercel.app',
    imageUrl: '/images/projects/ai-health-assistant.png',
    projectType: 'Full-Stack Web App',
    keyFeatures: [
      'AI-powered symptom checker using Google Gemini API for intelligent health insights.',
      'User authentication and onboarding with health information via Supabase.',
      'Local healthcare facility finder with location-based search capabilities.',
      'Medicine reminder system with personalized scheduling and notifications.',
      'Emergency contact management and personalized health tips dashboard.',
      'Responsive mobile-friendly UI built with Next.js and Tailwind CSS.',
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Gemini AI',
      'Tailwind CSS',
      'Vercel',
    ],
    githubStats: { stars: 0, forks: 0 },
  },
  {
    id: 525828811,
    name: 'Schedulrr - Event Scheduling Platform',
    description:
      'A comprehensive scheduling platform that helps users manage their time effectively. Create events, set availability, and let others book time seamlessly with personalized scheduling links.',
    repoUrl: 'https://github.com/vaibhavzignuts/schedular',
    liveUrl: 'https://schedular-delta.vercel.app',
    imageUrl: '/images/projects/schedular.png',
    projectType: 'Full-Stack Web App',
    keyFeatures: [
      'Create and customize event types with flexible scheduling options.',
      'Manage availability settings to streamline the booking process.',
      'Generate personalized scheduling links for easy sharing.',
      'Automated booking confirmations and calendar integration.',
      'User-friendly dashboard for managing appointments and events.',
      'Responsive design optimized for both desktop and mobile devices.',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'JavaScript'],
    githubStats: { stars: 0, forks: 0 },
  },
  {
    id: 992105629,
    name: 'Belanaro - Import/Export Business Website',
    description:
      'A modern UI/UX website for import-export business built with Next.js and GSAP animations. Features interactive components and smooth animations to showcase business services and capabilities.',
    repoUrl: 'https://github.com/vaibhavzignuts/belanaro-website',
    liveUrl: 'https://belanaro-website.vercel.app',
    imageUrl: '/images/projects/belanaro.png',
    projectType: 'Business Website',
    keyFeatures: [
      'Modern UI/UX design with smooth GSAP animations and transitions.',
      'Interactive components and modal systems for enhanced user engagement.',
      'Responsive design optimized for all device sizes and screen resolutions.',
      'Professional business presentation with clean and modern aesthetics.',
      'Fast loading performance with Next.js optimization and static generation.',
      'SEO-optimized structure for better search engine visibility.',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'GSAP', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    githubStats: { stars: 0, forks: 0 },
  },
  {
    id: 991451039,
    name: 'Turf Cricket - Booking Platform',
    description:
      'A React Native mobile application for turf cricket booking with multi-role management system. Features admin and user roles with Supabase backend for managing bookings, payments, and user interactions.',
    repoUrl: 'https://github.com/vaibhavzignuts/turf-cricket',
    liveUrl: null,
    imageUrl: '/images/projects/turf-cricket.png',
    projectType: 'Mobile App',
    keyFeatures: [
      'Multi-role authentication system with admin and user role management.',
      'Turf booking system with real-time availability checking and scheduling.',
      'Secure backend integration with Supabase for data management and authentication.',
      'Cross-platform compatibility with React Native and Expo framework.',
      'User-friendly interface for easy booking and management of cricket sessions.',
      'Real-time updates and notifications for booking confirmations and changes.',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL', 'JavaScript'],
    githubStats: { stars: 0, forks: 0 },
  },
];

export default projectsData;
