import type { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Olusegun Akinnola about cloud, DevOps, and platform engineering work.',
  keywords: ['Contact DevOps Engineer', 'Cloud Engineering', 'Platform Engineering'],
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <header className="px-5 pb-4 pt-16 md:px-20 md:pt-24">
        <div className="mx-auto w-full max-w-7xl">
          <h1 className="font-[Monument-R] text-4xl uppercase tracking-tight md:text-6xl">Contact</h1>
        </div>
      </header>
      <ContactSection />
    </>
  );
}
