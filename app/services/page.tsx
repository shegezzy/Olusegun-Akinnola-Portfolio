import type { Metadata } from 'next';
import CloudWatchdogSection from '@/components/services/CloudWatchdogSection';
import FinalCtaSection from '@/components/services/FinalCtaSection';
import HowIWorkSection from '@/components/services/HowIWorkSection';
import MetricsStrip from '@/components/services/MetricsStrip';
import ProblemsSection from '@/components/services/ProblemsSection';
import ProofSection from '@/components/services/ProofSection';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';

export const metadata: Metadata = {
  title: {
    absolute: 'Cloud & DevOps Services | Olusegun Akinnola',
  },
  description:
    'AWS, DevOps, cloud infrastructure, cost optimization, security, CI/CD, observability, and reliability services for startups and engineering teams.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    type: 'website',
    url: '/services',
    title: 'Cloud & DevOps Services | Olusegun Akinnola',
    description:
      'AWS, DevOps, cloud infrastructure, cost optimization, security, CI/CD, observability, and reliability services for startups and engineering teams.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Olusegun Akinnola — Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud & DevOps Services | Olusegun Akinnola',
    description:
      'AWS, DevOps, cloud infrastructure, cost optimization, security, CI/CD, observability, and reliability services for startups and engineering teams.',
    images: ['/opengraph-image'],
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <MetricsStrip />
      <ProblemsSection />
      <ServicesGrid />
      <HowIWorkSection />
      <ProofSection />
      <CloudWatchdogSection />
      <FinalCtaSection />
    </>
  );
}
