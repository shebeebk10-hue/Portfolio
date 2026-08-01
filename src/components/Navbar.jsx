import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const initialized = useRef(false);

  // Mirrors the original DOMContentLoaded theme-init logic
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const html = document.documentElement;
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      html.classList.add('dark');
      body.classList.add('dark-mode');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const body = document.body;

    html.classList.toggle('dark');
    body.classList.toggle('dark-mode');

    if (html.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    } else {
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Works & Projects' },
    { href: '#services', label: 'Services' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[999] bg-white/90 dark:bg-[#0f1113] backdrop-blur-xl border-b border-gray-200 dark:border-[#2d3238] transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-[5%] lg:px-5 h-20 flex items-center justify-between relative">

        <a href="#" className="font-serif text-2xl text-ink dark:text-white no-underline">SK</a>

        <div className="flex items-center gap-2">
          <button
            id="theme-toggle"
            className="p-2 rounded-full transition-colors"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <i id="theme-icon" className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} text-lg text-brand`}></i>
          </button>

          <button
            id="menu-toggle"
            className="md:hidden p-2"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="navbarMenu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <i className="fa-solid fa-bars-staggered text-2xl text-ink dark:text-white"></i>
          </button>
        </div>

        {/* Desktop: inline links. Mobile: dropdown panel toggled by #menu-toggle */}
        <div
          id="navbarMenu"
          className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row
            absolute md:static top-full right-5 md:right-auto left-auto md:left-auto
            w-64 md:w-auto
            items-end md:items-center
            text-right md:text-left
            gap-4 md:gap-9
            bg-transparent
            rounded-none
            shadow-none
            border-0
            px-6 py-5 md:px-0 md:py-0`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="nav-link relative group text-gray-700 dark:text-gray-200 no-underline hover:no-underline hover:text-orange-300 transition-colors duration-300"
            >
              {link.label}
              <span className="absolute -bottom-[0.1px] left-0 w-full h-[2px] bg-orange-300
                                scale-x-0 origin-right transition-all duration-700 ease-in-out
                                group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
