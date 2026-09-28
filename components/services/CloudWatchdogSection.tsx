import { watchdogOffering } from '@/app/services/services.data';
import Section from './Section';

const focusStyles =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 dark:focus-visible:ring-primary-light dark:focus-visible:ring-offset-background-dark';

export default function CloudWatchdogSection() {
  return (
    <Section
      heading={watchdogOffering.heading}
      subheading={watchdogOffering.description}
    >
      <article
        className="border-2 border-primary p-6 dark:border-primary-light md:p-10"
        data-aos="fade-up"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary dark:text-primary-light">
              {watchdogOffering.price}
            </p>
            <h3 className="mb-8 text-2xl font-bold md:text-3xl">
              {watchdogOffering.title}
            </h3>
            <a
              href={`mailto:shegezzy@gmail.com?subject=${encodeURIComponent(watchdogOffering.mailtoSubject)}`}
              className={`group inline-flex items-center gap-2 bg-gray-800 px-6 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-80 dark:bg-neutral-light dark:text-background-dark ${focusStyles}`}
            >
              {watchdogOffering.ctaLabel}
              <i
                aria-hidden="true"
                className="ri-arrow-right-line transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {watchdogOffering.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary dark:bg-primary-light"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 border-t border-primary/30 pt-6 text-xs leading-relaxed text-text-secondary dark:border-primary-light/30 dark:text-neutral-light">
          {watchdogOffering.disclaimer}
        </p>
      </article>
    </Section>
  );
}
