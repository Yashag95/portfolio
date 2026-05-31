import React from "react";
import { FaCodeBranch, FaLanguage, FaMapMarkedAlt, FaRocket } from "react-icons/fa";
import { education, profile } from "../data/portfolioData";

const strengths = [
  {
    icon: FaRocket,
    title: "Performance-minded UI",
    text: "Code splitting, lazy loading, memoization, bundle care, and responsive patterns for smoother app screens.",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Revamp-focused dashboards",
    text: "Dashboard screens, MapTiler map views, monitoring data, and BIM viewer support where the platform requires it.",
  },
  {
    icon: FaCodeBranch,
    title: "Reusable architecture",
    text: "Scalable React components, Redux flows, API contracts, and maintainable frontend systems.",
  },
  {
    icon: FaLanguage,
    title: "Product polish",
    text: "Theme-aware UI, multilingual support, accessibility, and clean user experiences across screen sizes.",
  },
];

const About = () => {
  return (
    <section id="about" name="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title">Engineering clean, useful product screens for the tunnel monitoring platform revamp.</h2>
        </div>

        <div className="space-y-6">
          <div className="glass-panel interactive-card rounded-3xl p-6 sm:p-8">
            <p className="text-lg leading-8  text-slate-600 dark:text-slate-300">
              {profile.summary}
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              My background combines software engineering with a data analyst foundation, so I care about both interface quality and the trustworthiness of the data behind it. I enjoy turning business requirements into fast React experiences, connecting APIs carefully, and making complex workflows easier to understand.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map(({ icon: Icon, title, text }) => (
              <div key={title} className="glass-panel interactive-card rounded-2xl p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-black text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            ))}
          </div>

          <div className="glass-panel rounded-2xl p-5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Education</p>
            <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">{education.degree}</h3>
                <p className="mt-1 text-slate-600 dark:text-slate-300">{education.school}</p>
              </div>
              <p className="font-bold text-slate-500 dark:text-slate-400">{education.period}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

