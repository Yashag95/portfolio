import React from "react";
import { FaCertificate } from "react-icons/fa";
import { certifications } from "../data/portfolioData";

const Certifications = () => {
  return (
    <section id="certifications" name="certifications" className="section-shell">
      <div>
        <p className="section-kicker">Certifications</p>
        <h2 className="section-title">Professional learning and technical certifications.</h2>
      </div>

      <div className="glass-panel mt-10 w-full rounded-3xl p-6 sm:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((item) => (
            <div
              key={item}
              className="interactive-card flex min-h-[92px] items-start gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200">
                <FaCertificate />
              </span>
              <p className="text-sm font-bold leading-7 text-slate-700 dark:text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
