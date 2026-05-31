import React from "react";
import { FaArrowUp, FaDownload } from "react-icons/fa";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { Link } from "react-scroll";
import { navLinks, profile, socials } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="relative z-10 px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/85 shadow-xl shadow-slate-200/60 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/75 dark:shadow-black/20">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div className="border-b border-slate-200 p-6 dark:border-white/10 lg:border-b-0 lg:border-r">
            <Link to="home" smooth duration={850} offset={-90} className="inline-flex cursor-pointer items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white dark:bg-cyan-300 dark:text-slate-900">
                YA
              </span>
              <span>
                <span className="block text-xl font-black text-slate-900 dark:text-white">{profile.name}</span>
                <span className="block text-sm font-semibold text-slate-500 dark:text-slate-400">{profile.title}</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
              React and TypeScript developer building dashboard UI, map-based views, theme/i18n integration, API-connected screens, and 3D visualization workflows.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-cyan-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="border-b border-slate-200 p-6 dark:border-white/10 lg:border-b-0 lg:border-r">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-300">Explore</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {navLinks.map(({ label, target }) => (
                <Link
                  key={target}
                  to={target}
                  smooth
                  duration={850}
                  offset={-82}
                  className="cursor-pointer rounded-xl px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-cyan-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-6">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-300">Contact</p>
            <div className="mt-5 space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm font-semibold text-slate-600 transition hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-200">
                <MdEmail className="shrink-0" />
                <span className="break-all">{profile.email}</span>
              </a>
              <a href={profile.phoneHref} className="flex items-center gap-3 text-sm font-semibold text-slate-600 transition hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-200">
                <MdLocalPhone className="shrink-0" />
                {profile.phone}
              </a>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={profile.resume}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 dark:bg-cyan-300 dark:text-slate-900"
              >
                <FaDownload size={13} />
                Resume
              </a>
              <Link
                to="home"
                smooth
                duration={850}
                offset={-90}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-black text-slate-700 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-cyan-200"
              >
                <FaArrowUp size={13} />
                Back to top
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 bg-slate-50/80 px-6 py-4 text-center text-xs font-semibold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
          (c) {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
