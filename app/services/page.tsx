import type { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';

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
  return <ServicesHero />;
}
