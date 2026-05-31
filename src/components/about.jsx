import React from "react";

const About = () => {
  return (
    <section id="about" name="about" className="section-shell">
      <div>
        <p className="section-kicker">About</p>

        <div className="glass-panel mt-8 w-full rounded-3xl p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            I am a software engineer with 3+ years of experience building responsive, scalable web applications using React.js, TypeScript, JavaScript, Tailwind CSS, Redux, Node.js, and REST API integration. My work focuses on creating reusable UI components, dashboard interfaces, map-based views, theme-aware experiences, and performance-focused frontend implementations while translating business requirements into clean, reliable product screens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

