"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isPortfolio = pathname === '/portfolio';
  const isServicesPage = pathname === '/services';

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isMenuOpen) setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    route: string,
  ) => {
    if (pathname !== route) {
      setIsMenuOpen(false);
      return;
    }

    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = isPortfolio
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
        { label: "Let's Talk", href: '/contact', route: '/contact', cta: true },
        { label: 'FAQ', href: '/faq', route: '/faq' },
      ]
    : [
        { label: 'Services', href: '/services', route: '/services' },
        { label: 'Portfolio', href: '/portfolio', route: '/portfolio' },
        { label: 'About', href: '/about', route: '/about' },
        { label: "Let's Talk", href: '/contact', route: '/contact', cta: true },
        { label: 'FAQ', href: '/faq', route: '/faq' },
      ];

  if (!mounted) {
    return (
      <nav className='fixed top-0 left-0 right-0 w-full py-6 bg-background-light dark:bg-background-dark z-40'>
        <div className='max-w-7xl mx-auto px-5 md:px-20 flex justify-between items-center'>
          <a href="/" className='flex items-center gap-3'>
            <Image src="/images/my-image.jpeg" alt="" width={40} height={40} className='rounded-full object-cover w-10 h-10' />
            <div className='font-semibold text-base'>Olusegun Akinnola</div>
          </a>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
      scrolled || isMenuOpen
        ? 'bg-background-light dark:bg-background-dark bg-opacity-95 dark:bg-opacity-95 backdrop-blur-md border-b border-gray-200 dark:border-neutral-dark'
        : 'bg-transparent'
    }`}>
      <div className='max-w-7xl mx-auto px-5 md:px-20 py-6 flex justify-between items-center'>
        {/* Logo */}
        <a href="/" className='flex items-center gap-3 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-light'>
          <Image src="/images/my-image.jpeg" alt="" width={40} height={40} className='rounded-full object-cover w-10 h-10' />
          <div className='font-semibold text-base group-hover:text-primary dark:group-hover:text-primary-light transition-colors'>
            Olusegun Akinnola
          </div>
        </a>

        {/* Center Navigation - Hidden on mobile */}
        <div className='hidden lg:flex items-center gap-8'>
          {navLinks.map(({ label, href, id, route, cta }) => (
            <a
              key={href}
              href={href}
              onClick={id ? (event) => handleSectionClick(event, id, route) : undefined}
              className={cta && pathname === route
                ? 'bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-neutral-light dark:text-background-dark'
                : cta
                ? 'text-sm text-[#656464] transition-colors hover:text-[#232121] dark:text-neutral-light dark:hover:text-background-light'
                : `text-sm transition-colors ${pathname === route
                  ? 'font-semibold text-[#232121] dark:text-background-light'
                  : 'text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light'}`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className='flex items-center gap-4 md:gap-6'>
          {/* Resume Link */}
          <a
            href="https://drive.google.com/file/d/1ZYgVMZegbVinlOMN1r4XUvk5xF_lwopQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className='hidden md:block text-sm text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors'
          >
            Resume
          </a>

          {/* Divider */}
          <div className='hidden md:block w-px h-4 bg-gray-300 dark:bg-neutral-dark'></div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Hamburger - Mobile only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='lg:hidden w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-neutral-dark hover:border-gray-800 dark:hover:border-neutral-light hover:bg-gray-800 hover:text-white dark:hover:bg-neutral-light dark:hover:text-background-dark transition-all duration-300'
            aria-label='Toggle navigation menu'
          >
            <i className={`text-lg transition-all duration-200 ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-neutral-dark`}>
        <div className='px-5 md:px-20 py-6 flex flex-col gap-1'>
          {navLinks.map(({ label, href, id, route, cta }) => (
            <a
              key={href}
              href={href}
              onClick={(event) => {
                if (id) handleSectionClick(event, id, route);
                else setIsMenuOpen(false);
              }}
              className={cta && pathname === route
                ? 'mt-3 bg-gray-800 px-4 py-3 text-center text-base font-medium text-white transition-opacity hover:opacity-80 dark:bg-neutral-light dark:text-background-dark'
                : cta
                ? 'text-left py-3 text-base font-medium text-[#656464] transition-colors hover:text-[#232121] dark:text-neutral-light dark:hover:text-background-light'
                : `text-left py-3 text-base font-medium border-b border-gray-100 dark:border-neutral-dark/30 last:border-b-0 transition-colors ${pathname === route
                  ? 'text-[#232121] dark:text-background-light'
                  : 'text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light'}`}
            >
              {label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1ZYgVMZegbVinlOMN1r4XUvk5xF_lwopQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className='py-3 text-base font-medium text-[#656464] dark:text-neutral-light hover:text-[#232121] dark:hover:text-background-light transition-colors flex items-center gap-2'
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
            <i className='ri-external-link-line text-sm'></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
