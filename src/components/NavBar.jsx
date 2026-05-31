import React, { useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { navLinks, profile } from "../data/portfolioData";

const NavBar = ({ theme, setTheme }) => {
  const [nav, setNav] = useState(false);
  const isDark = theme === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/85 px-4 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/30">
        <Link
          to="home"
          smooth
          duration={850}
          offset={-90}
          className="flex cursor-pointer items-center gap-3"
          onClick={() => setNav(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-black text-white shadow-glow dark:bg-cyan-300 dark:text-slate-900">
            YA
          </span>
          <span className="hidden leading-tight min-[420px]:block">
            <span className="block text-sm font-black text-slate-900 dark:text-white">{profile.name}</span>
            <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">{profile.title}</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ label, target }) => (
            <li key={target}>
              <Link
                to={target}
                smooth
                spy
                duration={850}
                offset={-82}
                activeClass="!text-cyan-600 dark:!text-cyan-300"
                className="magnetic-link cursor-pointer px-3 py-2 text-sm font-bold text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Light theme" : "Dark theme"}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-cyan-200"
          >
            {isDark ? <FaSun className="transition group-hover:rotate-45" /> : <FaMoon className="transition group-hover:-rotate-12" />}
          </button>

          <button
            type="button"
            onClick={() => setNav((value) => !value)}
            aria-label="Toggle navigation"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-800 transition hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-white/10 dark:text-white lg:hidden"
          >
            {nav ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {nav && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/95 lg:hidden">
          {navLinks.map(({ label, target }) => (
            <Link
              key={target}
              to={target}
              smooth
              duration={850}
              offset={-82}
              onClick={() => setNav(false)}
              className="block cursor-pointer rounded-xl px-4 py-3 text-base  font-bold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-cyan-200"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavBar;

