import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocalPhone, MdSend } from "react-icons/md";
import { profile } from "../data/portfolioData";

const contactCards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: MdEmail },
  { label: "Call", value: profile.phone, href: profile.phoneHref, icon: MdLocalPhone },
  { label: "WhatsApp", value: "Message directly", href: profile.whatsappHref, icon: FaWhatsapp },
  { label: "LinkedIn", value: "Professional profile", href: profile.linkedin, icon: FaLinkedin },
  { label: "GitHub", value: "Code and projects", href: profile.github, icon: FaGithub },
];

const Contact = () => {
  return (
    <section id="contact" name="contact" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let us build something useful, polished, and fast.</h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            Send a message through the form, call directly, or start a WhatsApp chat. The form mailer endpoint is preserved from the original portfolio.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {contactCards.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="glass-panel interactive-card flex items-center gap-4 rounded-2xl p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200">
                  <Icon />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-black text-slate-900 dark:text-white">{label}</span>
                  <span className="block truncate text-sm text-slate-600 dark:text-slate-300">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form
          action="https://getform.io/f/72b44e5c-452a-4092-9b9b-722a1b01beb6"
          method="POST"
          className="glass-panel rounded-3xl p-5 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-black text-slate-700 dark:text-slate-200">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/15 dark:border-white/10 dark:bg-white/10 dark:text-white"
              />
            </label>
            <label className="block">
              <span className="text-sm font-black text-slate-700 dark:text-slate-200">Email</span>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/15 dark:border-white/10 dark:bg-white/10 dark:text-white"
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-black text-slate-700 dark:text-slate-200">Message</span>
            <textarea
              name="message"
              placeholder="Tell me about the role, product, or project..."
              rows="8"
              required
              className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/15 dark:border-white/10 dark:bg-white/10 dark:text-white"
            />
          </label>

          <input type="hidden" name="portfolio_owner" value={profile.name} />

          <button className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-900 px-6 py-4 text-sm font-black text-white shadow-glow transition hover:-translate-y-1 dark:bg-cyan-300 dark:text-slate-900 sm:w-auto">
            Send Message
            <MdSend className="transition group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

