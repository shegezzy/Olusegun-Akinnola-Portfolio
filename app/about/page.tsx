import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import WhoIWorkWithSection from '@/components/services/WhoIWorkWithSection';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Olusegun Akinnola, a security-focused DevOps, Site Reliability, and Platform Engineer building scalable infrastructure and reliable cloud platforms.',
  keywords: ['DevOps Engineer', 'Site Reliability Engineer', 'Platform Engineer', 'AWS', 'Cloud Infrastructure'],
  alternates: { canonical: '/about' },
};

const skills = ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'CI/CD', 'Infrastructure as Code', 'Prometheus', 'Grafana', 'CloudWatch', 'Node.js / TypeScript', 'Python', 'Bash'];

export default function AboutPage() {
  return (
    <>
      <section className="px-5 pb-20 pt-16 md:px-20 md:pt-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:flex-row md:items-center md:gap-20">
          <div className="min-w-0 flex-1">
            <p className="mb-6 inline-block rounded-full border border-gray-300 px-5 py-1 text-sm font-semibold text-text-secondary dark:border-neutral-dark dark:text-neutral-light">Security Inclined</p>
            <h1 className="mb-6 font-[Monument-R] text-4xl uppercase tracking-tight md:text-7xl">Software Engineer</h1>
            <p className="mb-8 flex items-center gap-2 text-sm font-semibold text-text-secondary dark:text-neutral-light"><i aria-hidden="true" className="ri-map-pin-line" />Lagos, Nigeria</p>
            <div className="grid gap-6 text-sm leading-relaxed text-text-secondary dark:text-neutral-light md:grid-cols-2">
              <p>I&apos;m a security-focused DevOps, Site Reliability, and Platform Engineer designing scalable infrastructure, automating delivery pipelines, and improving system reliability across cloud environments.</p>
              <p>My work focuses on reliable and scalable systems, continuous improvement, automation, service reliability, and practices that improve performance, resilience, and developer experience.</p>
            </div>
            <a href="https://drive.google.com/file/d/1ZYgVMZegbVinlOMN1r4XUvk5xF_lwopQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex border-b-2 border-gray-800 pb-1 text-sm font-semibold dark:border-neutral-light">View Resume <i aria-hidden="true" className="ri-arrow-right-line ml-2" /></a>
          </div>
          <Image alt="Olusegun Akinnola holding a laptop" src="/images/about-profile.png" width={408} height={612} className="h-auto w-full max-w-sm" priority />
        </div>
      </section>

      <section className="bg-neutral-light bg-opacity-5 px-5 py-20 dark:bg-neutral-dark dark:bg-opacity-5 md:px-20">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-12 font-[Monument-R] text-3xl uppercase tracking-tight md:text-5xl">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => <span key={skill} className="border border-gray-800 px-5 py-3 text-sm dark:border-neutral-light">{skill}</span>)}
          </div>
        </div>
      </section>

      <WhoIWorkWithSection />

      <section className="px-5 py-20 md:px-20">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-3">
          <Link href="/services" className="bg-gray-800 px-6 py-3 text-sm font-medium text-white hover:opacity-80 dark:bg-neutral-light dark:text-background-dark">Explore Services</Link>
          <Link href="/portfolio" className="border border-gray-800 px-6 py-3 text-sm font-medium hover:bg-gray-800 hover:text-white dark:border-neutral-light dark:hover:bg-neutral-light dark:hover:text-background-dark">View Portfolio</Link>
        </div>
      </section>
    </>
  );
}
