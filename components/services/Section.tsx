import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  heading?: string;
  subheading?: string;
}

export default function Section({
  children,
  className = '',
  containerClassName = '',
  id,
  heading,
  subheading,
}: SectionProps) {
  return (
    <section id={id} className={`px-5 py-20 md:px-20 ${className}`}>
      <div className={`mx-auto w-full max-w-7xl ${containerClassName}`}>
        {(heading || subheading) && (
          <header className="mb-16 max-w-3xl" data-aos="fade-up">
            {heading && (
              <h2 className="font-[Monument-R] text-3xl uppercase tracking-tight md:text-5xl">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-6 text-base leading-relaxed text-text-secondary dark:text-neutral-light md:text-lg">
                {subheading}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
