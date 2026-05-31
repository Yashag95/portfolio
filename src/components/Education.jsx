import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { education } from "../data/portfolioData";

const Education = () => {
  return (
    <section id="education" name="education" className="section-shell">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-kicker">Education</p>
          {/* <h2 className="section-title">Academic foundation behind the engineering work.</h2> */}
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {education.map(({ degree, school, period }) => (
          <article key={`${degree}-${school}`} className="glass-panel interactive-card rounded-3xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-cyan-200 shadow-glow dark:bg-cyan-300 dark:text-slate-900">
                <FaGraduationCap />
              </span>
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">{degree}</h3>
                <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-300">{school}</p>
                {period && (
                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">
                    {period}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
