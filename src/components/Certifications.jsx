import React from "react";
import { FaCertificate, FaFilePdf } from "react-icons/fa";
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
          {certifications.map((item) => {
            const title = typeof item === "string" ? item : item.title;

            return (
            <div
              key={title}
              className="interactive-card flex min-h-[92px] items-start gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200">
                <FaCertificate />
              </span>
              <div className="flex flex-1 items-start justify-between gap-3">
                <p className="text-sm font-bold leading-7 text-slate-700 dark:text-slate-200">{title}</p>
                {item.certificatePdf && (
                  <a
                    href={item.certificatePdf}
                    download
                    aria-label={`Download ${title} certificate PDF`}
                    title="Download certificate PDF"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition hover:bg-red-100 hover:text-red-700 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20"
                  >
                    <FaFilePdf />
                  </a>
                )}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
