import { clientTypes } from '@/app/services/services.data';
import Section from './Section';

export default function WhoIWorkWithSection() {
  return (
    <Section
      heading="Who I work with"
      className="bg-neutral-light bg-opacity-5 dark:bg-neutral-dark dark:bg-opacity-5"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {clientTypes.map((client, index) => (
          <article
            key={client.title}
            className="card-hover min-w-0 border border-gray-200 p-6 dark:border-neutral-dark md:p-8"
            data-aos="fade-up"
            data-aos-delay={index * 75}
          >
            <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-text-secondary dark:text-neutral-light">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mb-4 text-xl font-bold md:text-2xl">
              {client.title}
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary dark:text-neutral-light">
              {client.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
