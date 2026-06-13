"use client";

import React, { useEffect } from "react";
import AOS from 'aos';

const JobExperience = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  const experiences = [
    {
      company: 'Divverse LLC',
      role: 'Cloud Infrastructure & DevOps Platform Engineer (Multi-Region SaaS Systems)',
      type: 'Full-time',
      location: 'Remote',
      period: 'Sep 2023 - Present',
      achievements: [
        'Engineered and maintained scalable AWS cloud infrastructure using Terraform, Docker, ECS Fargate, and Kubernetes to support distributed microservices across three continents with 99.9% availability.',
        'Led cloud cost optimization initiatives by analyzing usage patterns, rightsizing resources, and improving scaling strategies, reducing infrastructure cost by 15% without performance degradation.',
        'Built and automated CI/CD pipelines using GitHub Actions to standardize build, test, and deployment workflows, reducing release cycles by 40%.',
      ],
    },
    {
      company: 'WEMA Bank',
      role: 'DevOps & Cloud Infrastructure Engineer (Banking & Fintech Systems)',
      type: 'Full-time',
      location: 'Hybrid',
      period: 'June 2022 - Sept 2023',
      achievements: [
        'Designed and implemented CI/CD pipelines using GitHub Actions, Docker, and Terraform, reducing manual deployment effort and improving release efficiency by 30%.',
        'Built observability and monitoring systems using Prometheus, Grafana, and CloudWatch, ensuring proactive incident detection and maintaining 99.9% uptime for critical banking services.',
        'Managed and scaled microservices infrastructure on Azure Kubernetes Service (AKS), supporting high-availability fintech workloads processing thousands of daily transactions.',
      ],
    },
    {
      company: 'United Bank of Africa',
      role: 'Backend Engineer (High-Throughput Financial Systems)',
      type: 'Full-time',
      location: 'Hybrid',
      period: 'Jan 2020 - June 2022',
      achievements: [
        'Developed and optimized .NET Core microservices handling 1,000+ requests per second (3M+ monthly API calls) for core banking operations.',
        'Designed scalable backend systems for payments, merchant onboarding, and banking integrations, improving transaction processing speed by 35%.',
        'Built distributed system integrations across internal banking platforms and third-party APIs to improve interoperability and reliability.',

      ],
    },
    
  ];

  return (
    <section id="experience" className="w-full md:px-20 py-20 px-5 bg-neutral-light bg-opacity-5 dark:bg-neutral-dark dark:bg-opacity-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="font-[Monument-R] text-3xl md:text-5xl uppercase tracking-tight mb-6">
            Work Experience
          </h2>
          <p className="text-sm text-[#656464] dark:text-neutral-light md:w-2/3">
            Professional journey building impactful solutions across fintech, enterprise, and creative industries
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative border-l-2 border-gray-200 dark:border-neutral-dark pl-8 md:pl-12 pb-12 last:pb-0"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-800 dark:bg-neutral-light border-2 border-background-light dark:border-background-dark"></div>

              {/* Content */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold">{exp.company}</h3>
                      <span className="text-xs px-3 py-1 border border-gray-300 dark:border-neutral-dark rounded-full text-[#656464] dark:text-neutral-light">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-[#656464] dark:text-neutral-light mb-1">
                      {exp.role}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[#656464] dark:text-neutral-light">
                      <span className="flex items-center gap-1">
                        <i className="ri-map-pin-line text-xs"></i>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="text-sm font-semibold text-[#656464] dark:text-neutral-light whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-3 pt-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#656464] dark:text-neutral-light leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-gray-800 dark:bg-neutral-light flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        
        

        
        {/* Footer Note */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-neutral-dark text-center" data-aos="fade-up">
          <p className="text-sm text-[#656464] dark:text-neutral-light">
            Want to know more about my experience?{' '}
            <span className="inline-block align-middle mt-4">
              <a
                href="/assets/pdf/OLUSEGUN-AKINNOLA_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--flex group inline-flex items-center gap-2 px-6 py-3 border border-gray-800 dark:border-neutral-light text-sm font-medium hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-200"
              >
                View my full resume
                <i
                  className="uil uil-external-link-alt button__icon"
                  aria-hidden="true"
                />
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobExperience;
