import type { Metadata } from 'next';
import Link from 'next/link';
import MetricsStrip from '@/components/services/MetricsStrip';
import ServicesHero from '@/components/services/ServicesHero';

export const metadata: Metadata = {
  title: { absolute: 'Cloud & DevOps Services | Olusegun Akinnola' },
  description:
    'AWS, DevOps, cloud infrastructure, cost optimization, security, CI/CD, observability, and reliability services for startups and engineering teams.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Cloud & DevOps Services | Olusegun Akinnola',
    description:
      'AWS, DevOps, cloud infrastructure, cost optimization, security, CI/CD, observability, and reliability services for startups and engineering teams.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Olusegun Akinnola — Software Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud & DevOps Services | Olusegun Akinnola',
    description:
      'AWS, DevOps, cloud infrastructure, cost optimization, security, CI/CD, observability, and reliability services for startups and engineering teams.',
    images: ['/opengraph-image'],
  },
};

const destinations = [
  { href: '/services', label: 'Services', text: 'Focused technical services for teams running applications in the cloud.' },
  { href: '/portfolio', label: 'Portfolio', text: 'Explore skills, experience, projects, and production work.' },
  { href: '/about', label: 'About', text: 'Learn more about my engineering focus and approach.' },
  { href: '/faq', label: 'FAQ', text: 'Answers about engagements, cloud platforms, and support.' },
];

export default function LandingPage() {
  return (
    <>
      <ServicesHero />
      <MetricsStrip />
      <section className="px-5 py-20 md:px-20" aria-labelledby="explore-heading">
        <div className="mx-auto w-full max-w-7xl">
          <header className="mb-12 max-w-2xl">
            <h2 id="explore-heading" className="font-[Monument-R] text-3xl uppercase tracking-tight md:text-5xl">
              Explore the site
            </h2>
          </header>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination, index) => (
              <Link
                key={destination.href}
                href={destination.href}
                className="card-hover min-w-0 border border-gray-200 p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-neutral-dark dark:focus-visible:ring-primary-light md:p-8"
              >
                <span className="mb-8 block text-[10px] uppercase tracking-[0.3em] text-text-secondary dark:text-neutral-light">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-4 text-xl font-bold md:text-2xl">{destination.label}</h3>
                <p className="text-sm leading-relaxed text-text-secondary dark:text-neutral-light">{destination.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
