'use client';

import { memo } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, Variants } from 'motion/react';
import { cn } from '@/lib/utils';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const AboutSectionComponent = ({ className, id }: { className?: string; id?: string }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={cn('bg-transparent min-h-dvh py-20 md:py-28 lg:py-32', className)}
      variants={shouldReduceMotion ? undefined : sectionVariants}
      initial={shouldReduceMotion ? undefined : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.2 }}
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-24">
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="flex justify-center"
          >
            <motion.div
              className="group w-full max-w-[380px] cursor-pointer overflow-hidden rounded-2xl border-4 border-primary/10 shadow-2xl transition-all duration-300 ease-out hover:border-primary/50 hover:shadow-primary/20 md:max-w-full"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.02,
                      transition: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 15,
                      },
                    }
              }
            >
              <Image
                src="/images/vaibhav-parmar.webp"
                alt="Professional headshot of Vaibhav Parmar, Software Engineer"
                width={375}
                height={375}
                className="aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 375px"
                priority
              />
            </motion.div>
          </motion.div>
          <div>
            <motion.h2
              id="about-heading"
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-[2.8rem] lg:text-[3.2rem]"
            >
              A Little More <span className="text-primary">About Me</span>
            </motion.h2>
            <motion.div
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="space-y-6 text-base text-muted-foreground md:text-lg"
            >
              <p>
                I&apos;m a passionate software engineer specializing in React.js and React Native
                with over 1.5 years of hands-on experience. I enjoy building scalable,
                privacy-focused applications and seamless user experiences. My work combines strong
                frontend development with thoughtful product design.
              </p>
              <p>
                With expertise in JavaScript, TypeScript, React.js, React Native, Next.js, and
                Supabase, I consistently aim to deliver high-impact digital products. I&apos;m
                particularly excited about building privacy-focused applications and exploring the
                intersection of mobile and web development.
              </p>
              <p>
                Beyond coding, I believe in collaborative growth and enjoy learning about advanced
                full-stack architecture, UI/UX design, and contributing to the React Native &
                Next.js ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export const AboutSection = memo(AboutSectionComponent);
