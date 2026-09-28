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
      role: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Remote',
      period: 'Sep 2023 - Present',
      achievements: [
      'Designed and managed scalable AWS cloud infrastructure using Terraform and Docker, supporting distributed microservices with 99.9% system availability.',
      'Built and automated end-to-end CI/CD pipelines using GitHub Actions, reducing deployment time by 40% and improving release reliability.',
      'Implemented observability and monitoring solutions using CloudWatch and Prometheus for proactive incident detection and faster issue resolution.',
      'Led infrastructure optimization initiatives, reducing cloud costs by 15% while maintaining scalability and platform performance.',
      'Collaborated with engineering teams to enhance system resilience, operational efficiency, and infrastructure scalability.'

      ],
    },
    {
      company: 'WEMA Bank',
      role: 'Devops Engineer',
      type: 'Full-time',
      location: 'Hybrid',
      period: 'June 2022 - Sept 2023',
      achievements: [
        'Designed and automated CI/CD pipelines using GitHub Actions, Docker, and Terraform, improving deployment efficiency by 30% and eliminating manual release errors.',
        'Implemented monitoring, logging, and performance tuning strategies, maintaining 99.9% uptime across critical banking services.',
        'Managed and scaled microservices infrastructure on Azure Kubernetes Service (AKS), ensuring high availability and reliability for fintech applications processing thousands of daily transactions.',
        'Drove incident response and root cause analysis for production systems, improving system resilience and reducing downtime.'
      ],
    },
    {
      company: 'United Bank of Africa',
      role: 'Backend Engineer',
      type: 'Full-time',
      location: 'Hybrid',
      period: 'Jan 2020 - June 2022',
      achievements: [
        'Developed and optimized backend systems handling 1,000+ requests per second (3M+ monthly API calls), ensuring high performance and high availability for digital banking platforms.',
        'Designed and maintained .NET Core microservices for payment processing, merchant onboarding, and banking integrations, improving transaction throughput by 35%.',
        'Contributed to scalable distributed system architecture, enabling seamless integration with internal services and third-party APIs.',
        'Collaborated with cross-functional engineering teams across multiple regions to deliver reliable features and improve platform scalability and resilience.'

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
            <a 
              href="https://drive.google.com/file/d/1ZYgVMZegbVinlOMN1r4XUvk5xF_lwopQ/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-[#232121] dark:hover:text-background-light transition-colors"
            >
              View my full resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobExperience;
