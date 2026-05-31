import React from "react";
import { socials } from "../data/portfolioData";

const SocialLinks = () => {
  return (
    <aside className="fixed bottom-5 right-4 z-40 hidden flex-col gap-2 lg:flex">
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          title={label}
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/85 text-slate-700 shadow-lg backdrop-blur transition hover:-translate-x-1 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:text-cyan-200"
        >
          <Icon className="transition group-hover:scale-110" size={20} />
        </a>
      ))}
    </aside>
  );
};

export default SocialLinks;

