import { workSteps } from '@/app/services/services.data';
import Section from './Section';

export default function HowIWorkSection() {
  return (
    <Section heading="A practical approach to cloud engineering">
      <ol className="border-t border-gray-200 dark:border-neutral-dark">
        {workSteps.map((step, index) => (
          <li
            key={step.title}
            className="grid gap-4 border-b border-gray-200 py-8 dark:border-neutral-dark md:grid-cols-[4rem_minmax(10rem,0.4fr)_1fr] md:gap-8 md:py-10"
            data-aos="fade-up"
            data-aos-delay={index * 75}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-text-secondary dark:text-neutral-light">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-xl font-bold md:text-2xl">{step.title}</h3>
            <p className="max-w-2xl text-sm leading-relaxed text-text-secondary dark:text-neutral-light md:text-base">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
