import type { Metadata } from 'next';
import Section from '@/components/services/Section';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Olusegun Akinnola, DevOps, Site Reliability, and Platform Engineer.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <header className="px-5 pb-4 pt-16 md:px-20 md:pt-24">
        <div className="mx-auto w-full max-w-7xl">
          <h1 className="font-[Monument-R] text-4xl uppercase tracking-tight md:text-6xl">About</h1>
        </div>
      </header>
      <Section heading="Cloud infrastructure and reliable delivery systems">
        <p className="max-w-3xl text-base leading-relaxed text-text-secondary dark:text-neutral-light md:text-lg">
          I build secure, scalable infrastructure and reliable cloud platforms. My work focuses on AWS, DevOps, Site Reliability, Platform Engineering, CI/CD automation, infrastructure as code, observability, and production reliability.
        </p>
      </Section>
      <Section
        heading="Practical engineering support"
        subheading="Security-focused DevOps, Site Reliability, and Platform Engineering for scalable infrastructure and reliable delivery systems."
        className="bg-neutral-light bg-opacity-5 dark:bg-neutral-dark dark:bg-opacity-5"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Cloud platforms', 'AWS is my primary cloud platform, with experience across cloud-native infrastructure.'],
            ['Delivery systems', 'CI/CD automation and Infrastructure as Code help teams build maintainable delivery workflows.'],
            ['Production reliability', 'Observability, troubleshooting, and operational improvements keep systems resilient.'],
          ].map(([title, text], index) => (
            <article key={title} className="border border-gray-200 p-6 dark:border-neutral-dark md:p-8">
              <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-text-secondary dark:text-neutral-light">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mb-4 text-xl font-bold md:text-2xl">{title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary dark:text-neutral-light">{text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section containerClassName="flex flex-wrap gap-3">
        <Link href="/services" className="bg-gray-800 px-6 py-3 text-sm font-medium text-white hover:opacity-80 dark:bg-neutral-light dark:text-background-dark">Explore Services</Link>
        <Link href="/portfolio" className="border border-gray-800 px-6 py-3 text-sm font-medium hover:bg-gray-800 hover:text-white dark:border-neutral-light dark:hover:bg-neutral-light dark:hover:text-background-dark">View Portfolio</Link>
      </Section>
    </>
  );
}
