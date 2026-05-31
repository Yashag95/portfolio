import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/about";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("portfolio-theme");
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className={theme}>
      <div className="app-bg min-h-screen overflow-hidden text-slate-900 transition-colors duration-500 dark:text-slate-100">
        <div className="grid-texture pointer-events-none fixed inset-0 z-0" />
        <NavBar theme={theme} setTheme={setTheme} />
        <main className="relative z-10">
          <Home />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <SocialLinks />
        <Footer />
      </div>
    </div>
  );
};

export default App;

