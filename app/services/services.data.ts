export interface ServiceProblem {
  title: string;
  description: string;
}

export interface ServiceOffering {
  title: string;
  description: string;
  bullets: readonly string[];
  price: string;
  ctaLabel: string;
  mailtoSubject: string;
  note?: string;
}

export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ProofEntry {
  name: string;
  summary: string;
}

export interface WorkStep {
  title: string;
  description: string;
}

export interface ClientType {
  title: string;
  description: string;
}

export interface WatchdogOffering {
  heading: string;
  description: string;
  title: string;
  price: string;
  ctaLabel: string;
  mailtoSubject: string;
  bullets: readonly string[];
  disclaimer: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type ServiceCurrency = 'EUR' | 'USD' | 'NGN';

export const sellingRatesInNgn = {
  EUR: 1571.52,
  USD: 1346.98,
  NGN: 1,
} as const satisfies Record<ServiceCurrency, number>;

export const serviceProblems: readonly ServiceProblem[] = [
  {
    title: 'AWS costs growing unexpectedly',
    description:
      'Identify unnecessary resources, inefficient infrastructure, and optimization opportunities.',
  },
  {
    title: 'Deployments are unreliable',
    description:
      'Diagnose CI/CD failures and improve deployment workflows.',
  },
  {
    title: 'Production systems lack visibility',
    description:
      'Improve monitoring, alerting, logging, and operational visibility.',
  },
  {
    title: 'AWS security needs attention',
    description:
      'Review IAM, access controls, monitoring, and common cloud security gaps.',
  },
  {
    title: 'Infrastructure is manually configured',
    description:
      'Move infrastructure toward reproducible Infrastructure as Code.',
  },
  {
    title: 'Production incidents keep happening',
    description:
      'Investigate incidents, perform root-cause analysis, and improve operational reliability.',
  },
];

export const serviceMetrics: readonly ServiceMetric[] = [
  {
    value: '99.9%',
    label: 'Availability maintained for critical services',
  },
  {
    value: '15%',
    label: 'Cloud infrastructure cost reduction',
  },
  {
    value: '40%',
    label: 'Shorter release cycles through CI/CD automation',
  },
];

export const serviceOfferings: readonly ServiceOffering[] = [
  {
    title: 'AWS Cost Optimization Review',
    description:
      'Identify unnecessary AWS spending and receive a prioritized plan to improve cloud efficiency without compromising production performance.',
    bullets: [
      'AWS resource review',
      'Cost analysis',
      'Rightsizing opportunities',
      'Unused-resource identification',
      'Prioritized recommendations',
    ],
    price: 'From €149',
    ctaLabel: 'Request a Cost Review',
    mailtoSubject: 'AWS Cost Optimization Review request',
  },
  {
    title: 'AWS Security Health Check',
    description:
      'A practical review of your AWS environment to identify common security and governance gaps before they become expensive problems.',
    bullets: [
      'IAM review',
      'MFA configuration',
      'CloudTrail review',
      'GuardDuty review',
      'Access review',
      'S3 access review',
      'Security group review',
      'Credential/access hygiene',
    ],
    price: 'From €149',
    ctaLabel: 'Request a Security Review',
    mailtoSubject: 'AWS Security Health Check request',
    note: 'Not a compliance certification or penetration test.',
  },
  {
    title: 'CI/CD & Deployment Support',
    description:
      'Diagnose broken deployment pipelines and improve the path from source code to production.',
    bullets: [
      'GitHub Actions',
      'GitLab CI',
      'Jenkins',
      'Docker',
      'Amazon ECR',
      'AWS deployment workflows',
      'OIDC authentication',
      'Deployment troubleshooting',
    ],
    price: 'From €100',
    ctaLabel: 'Fix My Pipeline',
    mailtoSubject: 'CI/CD support request',
  },
  {
    title: 'AWS Infrastructure & Terraform',
    description:
      'Build or improve reproducible AWS infrastructure using Infrastructure as Code.',
    bullets: [
      'Terraform',
      'AWS networking',
      'ECS/Fargate',
      'ECR',
      'ALB',
      'IAM',
      'CloudWatch',
      'Reusable infrastructure patterns',
    ],
    price: 'Custom',
    ctaLabel: 'Discuss Infrastructure',
    mailtoSubject: 'AWS Infrastructure & Terraform enquiry',
  },
  {
    title: 'Observability & Monitoring',
    description:
      'Improve visibility into production systems so your team can detect and investigate problems before they become bigger incidents.',
    bullets: [
      'Prometheus',
      'Grafana',
      'CloudWatch',
      'Application metrics',
      'Infrastructure monitoring',
      'Alerting',
      'Logging',
      'Operational dashboards',
    ],
    price: 'From €200',
    ctaLabel: 'Improve Monitoring',
    mailtoSubject: 'Observability & Monitoring enquiry',
  },
  {
    title: 'Production Troubleshooting & Reliability',
    description:
      'Investigate production incidents, identify root causes, and improve the reliability of cloud infrastructure and applications.',
    bullets: [
      'Incident investigation',
      'Root-cause analysis',
      'Infrastructure troubleshooting',
      'Service restoration',
      'Reliability improvements',
      'Operational runbooks',
      'Post-incident recommendations',
    ],
    price: 'Custom',
    ctaLabel: 'Discuss a Production Issue',
    mailtoSubject: 'Production troubleshooting enquiry',
  },
];

export const proofEntries: readonly ProofEntry[] = [
  {
    name: 'Divverse',
    summary:
      'AWS infrastructure with Terraform, Docker, ECS Fargate and Kubernetes; 99.9% availability; 15% infrastructure cost reduction; GitHub Actions CI/CD.',
  },
  {
    name: 'Wema Bank',
    summary:
      'CI/CD with GitHub Actions, Docker and Terraform; Prometheus, Grafana and CloudWatch monitoring; 99.9% uptime for critical banking services.',
  },
  {
    name: 'United Bank of Africa',
    summary:
      'Backend engineering on .NET Core microservices handling 1,000+ requests per second.',
  },
  {
    name: 'Loubby AI',
    summary:
      'Cloud infrastructure, CI/CD with automated deployments and rollbacks, Infrastructure as Code, observability.',
  },
  {
    name: 'Cybermap',
    summary:
      'AWS infrastructure, Docker, Terraform, GitHub Actions, CloudWatch, Prometheus.',
  },
  {
    name: 'ICE Queue',
    summary:
      'GitHub Actions, ECS, ECR, Docker, monitoring and deployment lifecycle.',
  },
  {
    name: 'Digital Encode',
    summary:
      'AWS infrastructure, Kubernetes, Docker, Terraform, GitHub Actions, Jenkins, Prometheus.',
  },
];

export const workSteps: readonly WorkStep[] = [
  {
    title: 'Understand',
    description:
      'Understand the application, infrastructure, current problem, and business impact.',
  },
  {
    title: 'Assess',
    description:
      'Review the relevant infrastructure, deployment workflows, costs, security controls, or observability setup.',
  },
  {
    title: 'Recommend',
    description:
      'Provide clear, prioritized recommendations instead of overwhelming the client with unnecessary changes.',
  },
  {
    title: 'Implement',
    description:
      'Where requested, implement the agreed improvements and document the resulting setup.',
  },
];

export const clientTypes: readonly ClientType[] = [
  {
    title: 'Startups',
    description:
      'Teams building products without a dedicated DevOps engineer.',
  },
  {
    title: 'SaaS companies',
    description: 'Companies running production applications on AWS.',
  },
  {
    title: 'Engineering teams',
    description:
      'Teams that need infrastructure, deployment, or reliability support.',
  },
  {
    title: 'Small businesses',
    description:
      'Businesses that need reliable cloud infrastructure without hiring a full-time cloud engineer.',
  },
];

export const watchdogOffering: WatchdogOffering = {
  heading: 'Ongoing AWS support without hiring a full-time DevOps engineer',
  description:
    'For teams that want ongoing visibility into cloud costs, infrastructure health, and operational risks without committing to a full-time DevOps hire.',
  title: 'AWS Cloud Watchdog',
  price: 'From $117/month',
  ctaLabel: 'Ask About Cloud Watchdog',
  mailtoSubject: 'AWS Cloud Watchdog enquiry',
  bullets: [
    'Monthly AWS cost review',
    'Resource review',
    'Basic security checks',
    'Infrastructure recommendations',
    'Monthly report',
    'One short monthly consultation',
  ],
  disclaimer: 'A starting offering, not an SLA or 24/7 support package.',
};

export const faqItems: readonly FaqItem[] = [
  {
    question: 'Do you work with startups?',
    answer:
      'Yes. My services are designed particularly for startups and small engineering teams that need practical cloud and DevOps support without necessarily hiring a full-time DevOps engineer.',
  },
  {
    question: 'Do you only work with AWS?',
    answer:
      'AWS is my primary cloud platform. I also have experience with Azure and cloud-native infrastructure.',
  },
  {
    question: 'Can you implement the recommendations from an audit?',
    answer:
      'Yes. Where appropriate, recommendations can be followed by an implementation engagement.',
  },
  {
    question: 'Do I need a full-time DevOps engineer?',
    answer:
      'Not necessarily. Some teams only need periodic infrastructure reviews, optimization, deployment support, or ongoing cloud monitoring.',
  },
  {
    question: 'Can you troubleshoot an existing production environment?',
    answer:
      'Yes. Production troubleshooting, incident response, root-cause analysis, and infrastructure remediation are part of my experience.',
  },
  {
    question: 'Do you provide 24/7 support?',
    answer:
      'Support arrangements depend on the engagement. The standard services focus on scheduled reviews, implementation work, and technical troubleshooting rather than guaranteed 24/7 support.',
  },
];
