import type { Metadata } from 'next';
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
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <MetricsStrip />
      <ProblemsSection />
      <ServicesGrid />
      <ProofSection />
    </>
  );
}
