"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isPortfolio = pathname === '/portfolio';
  const isServicesPage = pathname === '/services';
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    route: string,
  ) => {
    if (pathname !== route) return;

    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = isPortfolio
    ? [
        { label: 'Skills', href: '/portfolio#skills', id: 'skills', route: '/portfolio' },
        { label: 'Experience', href: '/portfolio#experience', id: 'experience', route: '/portfolio' },
        { label: 'Projects', href: '/portfolio#projects', id: 'projects', route: '/portfolio' },
        { label: 'Contact', href: '/portfolio#contact', id: 'contact', route: '/portfolio' },
        { label: 'Services', href: '/', route: '/' },
        { label: 'FAQ', href: '/faq', route: '/faq' },
      ]
    : isServicesPage
    ? [
        { label: 'Services', href: '/services#services', id: 'services', route: '/services' },
        { label: 'How I Work', href: '/services#how-i-work', id: 'how-i-work', route: '/services' },
        { label: 'Work', href: '/portfolio', route: '/portfolio' },
        { label: 'Contact', href: '/contact', route: '/contact' },
        { label: 'FAQ', href: '/faq', route: '/faq' },
      ]
    : [
        { label: 'Services', href: '/services', route: '/services' },
        { label: 'Portfolio', href: '/portfolio', route: '/portfolio' },
        { label: 'About', href: '/about', route: '/about' },
        { label: 'Contact', href: '/contact', route: '/contact' },
        { label: 'FAQ', href: '/faq', route: '/faq' },
      ];

  return (
    <footer className="border-t border-gray-200 dark:border-neutral-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className='flex items-center gap-3 mb-6'>
              <Image src="/images/my-image.jpeg" alt="" width={48} height={48} className='rounded-full object-cover w-12 h-12' />
              <div className='font-semibold text-lg'>Olusegun Akinnola</div>
            </div>
            <p className="text-sm text-[#656464] dark:text-neutral-light mb-6 max-w-sm">
              Security-focused DevOps, Site Reliability, and Platform Engineer building scalable,
              resilient infrastructure and reliable delivery systems. Specializing in cloud platforms,
              CI/CD automation, infrastructure as code, container orchestration, and modern engineering practices.

            </p>
            <div className="flex gap-3">
              <a 
                href="https://github.com/shegezzy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 dark:border-neutral-dark flex items-center justify-center hover:border-gray-800 dark:hover:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all"
                aria-label="GitHub"
              >
                <i className="ri-github-fill text-base"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/olusegunakinnola" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 dark:border-neutral-dark flex items-center justify-center hover:border-gray-800 dark:hover:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill text-base"></i>
              </a>
              <a 
                href="https://x.com/shegezzy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 dark:border-neutral-dark flex items-center justify-center hover:border-gray-800 dark:hover:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all"
                aria-label="X (Twitter)"
              >
                <i className="ri-twitter-x-line text-base"></i>
              </a>
              <a 
                href="https://www.instagram.com/bigshegzzzz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 dark:border-neutral-dark flex items-center justify-center hover:border-gray-800 dark:hover:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-base"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href, id, route }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={id ? (event) => handleSectionClick(event, id, route) : undefined}
                    className="text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="mailto:shegezzy@gmail.com"
                  className="text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link 
                  href="tel:08135161813" 
                  className="text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors"
                >
                  Phone
                </Link>
              </li>
              <li>
                <Link
                  href="https://drive.google.com/file/d/1ZYgVMZegbVinlOMN1r4XUvk5xF_lwopQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-200 dark:border-neutral-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-[#656464] dark:text-neutral-light">
            <p>© {new Date().getFullYear()} Olusegun Akinnola</p>
            <span className="hidden md:block">•</span>
            <p className="hidden md:block">All rights reserved</p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 border-2 border-gray-800 dark:border-neutral-light flex items-center justify-center hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300"
            aria-label="Scroll to top"
          >
            <i className="ri-arrow-up-line text-lg"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
