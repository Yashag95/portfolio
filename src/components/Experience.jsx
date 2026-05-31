import React from "react";
import { FaBriefcase, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import { experiences, projects } from "../data/portfolioData";

const Experience = () => {
  return (
    <>
      <section id="experience" name="experience" className="section-shell">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker">Experience</p>
          </div>
          {/* <p className="max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
            A detailed snapshot of the work from your resume, written for recruiters and hiring managers who want to understand impact, not just job titles.
          </p> */}
        </div>

        <div className="mt-12 space-y-6">
          {experiences.map((job, index) => (
            <article key={job.company} className="glass-panel interactive-card rounded-3xl p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr]">
                <div className="leftside">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-cyan-200 shadow-glow dark:bg-cyan-300 dark:text-slate-900">
                    <FaBriefcase />
                  </div>
                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                    {job.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-slate-900 dark:text-white">{job.role}</h3>
                  <p className="mt-1 font-bold text-slate-600 dark:text-slate-300">{job.company}</p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{job.location}</p>
                  {job.roleHistory && (
                    <div className="mt-5 rounded-2xl border border-slate-200 bg-white/65 p-4 dark:border-white/10 dark:bg-white/5">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">
                        Designation Timeline
                      </p>
                      <div className="mt-4 space-y-3">
                        {job.roleHistory.map((role) => (
                          <div key={`${role.title}-${role.period}`} className="border-l-2 border-cyan-400 pl-3">
                            <p className="text-sm font-black text-slate-900 dark:text-white">{role.title}</p>
                            <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{role.period}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((item) => (
                      <span key={item} className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold leading-8 text-slate-700 dark:text-slate-200">{job.summary}</p>
                  <ul className="mt-6 space-y-4">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        <FaCheckCircle className="mt-1.5 shrink-0 text-cyan-600 dark:text-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />
              <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                Role {String(index + 1).padStart(2, "0")}
              </p> */}
            </article>
          ))}
        </div>
      </section>

      <section id="projects" name="projects" className="section-shell">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker">Projects</p>
          </div>
          <a
            href="https://github.com/Yashag95"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-black text-slate-900 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-cyan-200"
          >
            GitHub Profile <FaExternalLinkAlt size={12} />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.name} className="glass-panel interactive-card flex min-h-[330px] flex-col rounded-3xl p-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">{project.type}</p>
                  <h3 className="mt-3 text-2xl font-black text-slate-900 dark:text-white">{project.name}</h3>
                </div>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-black text-white dark:bg-cyan-300 dark:text-slate-900">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              <ul className="mt-5 space-y-3">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
