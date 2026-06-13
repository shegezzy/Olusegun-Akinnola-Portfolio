import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import 'gsap/dist/gsap';
import 'gsap/dist/ScrollTrigger';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/contexts/ThemeContext';

const baseUrl = 'https://olusegunakinnola.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Olusegun Akinnola — Software Engineer',
    template: '%s | Olusegun Akinnola',
  },
  description: 'Olusegun Akinnola is a security-focused DevOps, Site Reliability, and Platform Engineer with 6+ years of experience building scalable infrastructure and reliable delivery systems. Specialized in AWS, Kubernetes, Docker, CI/CD, Infrastructure as Code, observability, and modern platform engineering practices. Based in Lagos, Nigeria — open to remote work.',
  keywords: [
    'Olusegun Akinnola',
    'DevOps Engineer',
    'Site Reliability Engineer',
    'Platform Engineer',
    'Cloud Engineer',
    'CI/CD Engineer',
    'Infrastructure as Code Engineer',
    'Observability Engineer',
    'Modern Engineering Practices',
  ],
  authors: [{ name: 'Olusegun Akinnola', url: baseUrl }],
  creator: 'Olusegun Akinnola',
  publisher: 'Olusegun Akinnola',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Olusegun Akinnola —  Software Engineer',
    description: 'Security-focused DevOps, Site Reliability, and Platform Engineer with 6+ years building scalable infrastructure and reliable delivery systems. AWS, Kubernetes, Docker, CI/CD, Infrastructure as Code, observability, and modern platform engineering practices.',
    siteName: 'Olusegun Akinnola',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Olusegun Akinnola — Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olusegun Akinnola — Software Engineer',
    description: 'Security-focused DevOps, Site Reliability, and Platform Engineer with 6+ years building scalable infrastructure and reliable delivery systems. AWS, Kubernetes, Docker, CI/CD, Infrastructure as Code, observability, and modern platform engineering practices.',
    site: '@shegezzy',
    creator: '@shegezzy',
    images: ['/opengraph-image'],
  },
  category: 'technology',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Olusegun Akinnola',
      url: baseUrl,
      image: `${baseUrl}/images/my-image.jpeg`,
      jobTitle: 'Software Engineer',
      description: ' I build secure, scalable infrastructure and reliable cloud platforms. 6 years of turning complex operational challenges into resilient, automated, and production-ready systems.',
      email: 'shegezzy@gmail.com',
      sameAs: [
        'https://github.com/shegezzy',
        'https://www.linkedin.com/in/olusegunakinnola',
        'https://x.com/shegezzy',
        'https://www.instagram.com/bigshegzzzz/',
      ],
      knowsAbout: [
        `AWS`, `Kubernetes`, `Docker`, `Terraform`, `Ansible`,
        `Linux`, `CI/CD`, `GitHub Actions`, `Jenkins`, `NGINX`,
        `Prometheus`, `Grafana`, `ELK Stack`, `CloudWatch`, `Redis`,
`PostgreSQL`, `MongoDB`, `Site Reliability Engineering`, `Infrastructure as Code`,
`Platform Engineering`, `Cloud Security`, `Observability`, `Incident Response`

      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lagos',
        addressCountry: 'NG',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'AB-InBev',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Olusegun Akinnola',
      description: 'Portfolio of Olusegun Akinnola —  Software Engineer',
      author: { '@id': `${baseUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body">
        <ThemeProvider>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
