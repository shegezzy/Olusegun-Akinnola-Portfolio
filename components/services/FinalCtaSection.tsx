import Section from './Section';

const focusStyles =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 dark:focus-visible:ring-primary-light dark:focus-visible:ring-offset-background-dark';

export default function FinalCtaSection() {
  return (
    <Section containerClassName="text-center">
      <div className="mx-auto max-w-3xl" data-aos="fade-up">
        <h2 className="mb-6 font-[Monument-R] text-3xl uppercase tracking-tight md:text-5xl">
          Have a cloud problem that needs solving?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-text-secondary dark:text-neutral-light md:text-lg">
          Tell me what you're running, what's not working, or where you're spending too much. We can start with a focused assessment and determine the right next step.
        </p>
        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="mailto:shegezzy@gmail.com?subject=Cloud%20%26%20DevOps%20enquiry"
            className={`group inline-flex justify-center gap-2 bg-gray-800 px-6 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-80 dark:bg-neutral-light dark:text-background-dark ${focusStyles}`}
          >
            Let's Talk
            <i
              aria-hidden="true"
              className="ri-arrow-right-line transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="/#projects"
            className={`group inline-flex justify-center gap-2 border border-gray-800 px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-gray-800 hover:text-white dark:border-neutral-light dark:hover:bg-neutral-light dark:hover:text-background-dark ${focusStyles}`}
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
