import React from "react";
import { certifications, skills } from "../data/portfolioData";

const groups = ["Languages", "Frontend", "Backend", "Databases", "3D", "Design", "Tools"];

const Skills = () => {
  return (
    <section id="skills" name="skills" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">A practical toolkit for frontend-heavy full-stack products.</h2>
          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
            The stack reflects the current revamp work: React, TypeScript, Redux, Tailwind CSS, API integration, dashboard UI, map-based views, theme/i18n support, and backend collaboration.
          </p>
        </div>

        <div className="space-y-5">
          {groups.map((group) => {
            const groupSkills = skills.filter((skill) => skill.group === group);
            if (!groupSkills.length) return null;

            return (
              <div key={group} className="glass-panel rounded-3xl p-5">
                <h3 className="text-lg font-black text-slate-900 dark:text-white">{group}</h3>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {groupSkills.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="interactive-card flex min-h-[92px] flex-col justify-between rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5"
                    >
                      <Icon className="text-2xl text-cyan-600 dark:text-cyan-300" />
                      <p className="mt-4 text-sm font-black text-slate-800 dark:text-slate-100">{name}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="glass-panel rounded-3xl p-6">
            <h3 className="text-xl font-black text-slate-900 dark:text-white">Certifications</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {certifications.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white/65 p-4 text-sm font-semibold leading-6 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

