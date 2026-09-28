'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import Section from './Section';

const focusStyles =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 dark:focus-visible:ring-primary-light dark:focus-visible:ring-offset-background-dark';

export default function ServicesHero() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out' });
  }, []);

  return (
    <Section
      className="flex min-h-[calc(100vh-5rem)] items-center"
      containerClassName="py-8 md:py-12"
    >
      <div data-aos="fade-up">
        <p className="mb-12 text-xs uppercase tracking-widest text-text-secondary dark:text-neutral-light">
          Cloud &amp; DevOps Services
        </p>

        <h1 className="mb-6 max-w-6xl break-words font-[Monument-R] text-[clamp(2.25rem,9vw,110px)] uppercase leading-[1.05] tracking-tight text-text-primary dark:text-background-light sm:text-[clamp(3rem,9vw,110px)]">
          Reliable cloud infrastructure without unnecessary complexity.
        </h1>

        <p className="mb-10 max-w-2xl text-base leading-relaxed text-text-secondary dark:text-neutral-light md:text-lg">
          I help startups and engineering teams build, secure, monitor, and optimize AWS infrastructure — from CI/CD and infrastructure as code to cloud cost and production reliability.
        </p>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="mailto:shegezzy@gmail.com?subject=Cloud%20%26%20DevOps%20enquiry"
            className={`group inline-flex justify-center gap-2 bg-gray-800 px-6 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-80 dark:bg-neutral-light dark:text-background-dark sm:justify-start ${focusStyles}`}
          >
            Let's Work Together
            <i
              aria-hidden="true"
              className="ri-arrow-right-line transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="/#projects"
            className={`group inline-flex justify-center gap-2 border border-gray-800 px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-gray-800 hover:text-white dark:border-neutral-light dark:hover:bg-neutral-light dark:hover:text-background-dark sm:justify-start ${focusStyles}`}
          >
            View My Work
            <i
              aria-hidden="true"
              className="ri-arrow-right-line transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </Section>
  );
}
