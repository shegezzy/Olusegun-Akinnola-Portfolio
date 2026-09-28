import type { Metadata } from 'next';
import FaqSection from '@/components/services/FaqSection';
import FinalCtaSection from '@/components/services/FinalCtaSection';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers about cloud and DevOps services, engagements, and support.',
  keywords: ['Cloud DevOps FAQ', 'AWS support', 'DevOps services'],
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return (
    <>
      <header className="px-5 pb-4 pt-16 md:px-20 md:pt-24">
        <div className="mx-auto w-full max-w-7xl">
          <h1 className="font-[Monument-R] text-4xl uppercase tracking-tight md:text-6xl">FAQ</h1>
        </div>
      </header>
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
