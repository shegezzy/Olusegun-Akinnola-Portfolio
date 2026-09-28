import { faqItems } from '@/app/services/services.data';
import Section from './Section';

export default function FaqSection() {
  return (
    <Section
      heading="FAQ"
      className="bg-neutral-light bg-opacity-5 dark:bg-neutral-dark dark:bg-opacity-5"
    >
      <div className="border-t border-gray-200 dark:border-neutral-dark">
        {faqItems.map((item, index) => (
          <details
            key={item.question}
            className="group border-b border-gray-200 dark:border-neutral-dark"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary dark:focus-visible:ring-primary-light md:py-8 [&::-webkit-details-marker]:hidden">
              <span className="text-base font-semibold md:text-lg">
                {item.question}
              </span>
              <i
                aria-hidden="true"
                className="ri-add-line shrink-0 text-xl transition-transform duration-200 group-open:rotate-45"
              />
            </summary>
            <p className="max-w-3xl pb-6 pr-10 text-sm leading-relaxed text-text-secondary dark:text-neutral-light md:pb-8 md:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
