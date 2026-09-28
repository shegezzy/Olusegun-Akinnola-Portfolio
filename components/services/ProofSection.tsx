import { proofEntries } from '@/app/services/services.data';
import Section from './Section';

const focusStyles =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 dark:focus-visible:ring-primary-light dark:focus-visible:ring-offset-background-dark';

export default function ProofSection() {
  return (
    <Section
      heading="Built from real production experience"
      subheading="These services are based on hands-on experience operating production infrastructure across cloud, banking, SaaS, and application environments."
      className="bg-neutral-light bg-opacity-5 dark:bg-neutral-dark dark:bg-opacity-5"
    >
      <div className="border-t border-gray-200 dark:border-neutral-dark">
        {proofEntries.map((entry, index) => (
          <article
            key={entry.name}
            className="grid min-w-0 gap-4 border-b border-gray-200 py-8 dark:border-neutral-dark md:grid-cols-[3rem_minmax(12rem,0.45fr)_1fr] md:gap-8"
            data-aos="fade-up"
            data-aos-delay={index * 75}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-text-secondary dark:text-neutral-light">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="text-xl font-bold md:text-2xl">{entry.name}</h3>
            <p className="text-sm leading-relaxed text-text-secondary dark:text-neutral-light md:text-base">
              {entry.summary}
            </p>
          </article>
        ))}
      </div>

      <a
        href="/#projects"
        className={`group mt-10 inline-flex items-center gap-2 border-b-2 border-gray-800 pb-1 text-sm font-semibold transition-all duration-300 hover:gap-4 dark:border-neutral-light ${focusStyles}`}
      >
        See all projects
        <i aria-hidden="true" className="ri-arrow-right-line" />
      </a>
    </Section>
  );
}
