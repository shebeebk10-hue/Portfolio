import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      html.classList.add("dark");
      body.classList.add("dark-mode");
      setIsDark(true);
    }
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    const html = document.documentElement;
    const body = document.body;

    html.classList.toggle("dark");
    body.classList.toggle("dark-mode");

    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    } else {
      localStorage.setItem("theme", "light");
      setIsDark(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Works & Projects" },
    { href: "#services", label: "Services" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="relative z-50 w-full">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="font-serif text-2xl text-ink dark:text-white no-underline"
        >
          SK
        </a>

        {/* Right side */}
        <div className="flex items-center gap-2">

          {/* Theme Toggle */}
          <button
            id="theme-toggle"
            className="p-2 rounded-full transition-colors"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <i
              className={`fa-solid ${
                isDark ? "fa-sun" : "fa-moon"
              } text-lg text-brand`}
            ></i>
          </button>

          {/* Hamburger */}
          <button
            id="menu-toggle"
            className="md:hidden relative w-11 h-11 rounded-full
                       flex items-center justify-center
                       transition-all duration-500
                       hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="navbarMenu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {/* Hamburger lines */}
            <span
              className={`absolute w-5 h-[1.5px] bg-ink dark:bg-white
                         transition-all duration-500 ease-in-out
                         ${
                           menuOpen
                             ? "rotate-45"
                             : "-translate-y-[4px]"
                         }`}
            ></span>

            <span
              className={`absolute w-5 h-[1.5px] bg-ink dark:bg-white
                         transition-all duration-300
                         ${
                           menuOpen
                             ? "opacity-0"
                             : "opacity-100"
                         }`}
            ></span>

            <span
              className={`absolute w-5 h-[1.5px] bg-ink dark:bg-white
                         transition-all duration-500 ease-in-out
                         ${
                           menuOpen
                             ? "-rotate-45"
                             : "translate-y-[4px]"
                         }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="navbarMenu"
        className={`
          md:hidden absolute top-full right-0 mt-4
          w-[min(85vw,360px)]
          overflow-hidden
          rounded-2xl
          bg-white/95 dark:bg-neutral-900/95
          backdrop-blur-xl
          shadow-xl
          border border-black/5 dark:border-white/10
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          origin-top-right
          ${
            menuOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <div className="px-7 py-7">

          <div className="flex flex-col items-end gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  transitionDelay: menuOpen
                    ? `${index * 70}ms`
                    : "0ms",
                }}
                className={`
                  relative
                  w-full
                  text-right
                  py-3
                  text-lg
                  font-medium
                  text-gray-700
                  dark:text-gray-200
                  no-underline
                  transition-all
                  duration-500
                  ease-out
                  hover:text-orange-300
                  ${
                    menuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-5"
                  }
                `}
              >
                {link.label}

                {/* Animated underline */}
                <span
                  className="
                    absolute
                    right-0
                    bottom-1
                    h-[1px]
                    w-0
                    bg-orange-300
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                ></span>
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-end gap-9 mt-0">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="
              nav-link
              relative
              group
              text-gray-700
              dark:text-gray-200
              no-underline
              hover:no-underline
              hover:text-orange-300
              transition-colors
              duration-300
            "
          >
            {link.label}

            <span
              className="
                absolute
                -bottom-[0.1px]
                left-0
                w-full
                h-[2px]
                bg-orange-300
                scale-x-0
                origin-right
                transition-all
                duration-700
                ease-in-out
                group-hover:scale-x-100
              "
            ></span>
          </a>
        ))}
      </div>
    </nav>
  );
}