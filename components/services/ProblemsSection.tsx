import { serviceProblems } from '@/app/services/services.data';
import Section from './Section';

export default function ProblemsSection() {
  return (
    <Section
      heading="Cloud problems I can help you solve"
      subheading="You don't always need a full-time DevOps team. Sometimes you need someone who can diagnose the problem, improve the infrastructure, and leave your team with a cleaner system."
      className="bg-neutral-light bg-opacity-5 dark:bg-neutral-dark dark:bg-opacity-5"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {serviceProblems.map((problem, index) => (
          <article
            key={problem.title}
            className="card-hover h-full min-w-0 border border-gray-200 p-6 dark:border-neutral-dark md:p-8"
            data-aos="fade-up"
            data-aos-delay={index * 75}
          >
            <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-text-secondary dark:text-neutral-light">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mb-4 text-xl font-bold md:text-2xl">
              {problem.title}
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary dark:text-neutral-light">
              {problem.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
