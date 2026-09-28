import { serviceMetrics } from '@/app/services/services.data';
import Section from './Section';

export default function MetricsStrip() {
  return (
    <Section className="!py-0" containerClassName="border-y border-gray-200 dark:border-neutral-dark">
      <h2 className="sr-only">Selected results</h2>
      <dl className="grid grid-cols-1 md:grid-cols-3">
        {serviceMetrics.map((metric, index) => (
          <div
            key={metric.value}
            className={`flex flex-col px-0 py-8 md:px-8 ${
              index < serviceMetrics.length - 1
                ? 'border-b border-gray-200 dark:border-neutral-dark md:border-b-0 md:border-r'
                : ''
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 75}
          >
            <dt className="order-2 mt-3 text-sm leading-relaxed text-text-secondary dark:text-neutral-light">
              {metric.label}
            </dt>
            <dd className="order-1 font-[Monument-R] text-4xl tracking-tight md:text-5xl">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
