import {
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaCube,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";
import { MdEmail, MdLocalPhone } from "react-icons/md";

export const profile = {
  name: "Yash Agrawal",
  title: "Software Engineer",
  headline:
    "Frontend-focused full-stack developer building enterprise web applications with React, TypeScript, dashboards, maps, i18n, and theme support.",
  summary:
    "I build responsive web applications with reusable UI components, API integration, data visualization, and performance-focused frontend implementation.",
  email: "yashagarwal.ya62@gmail.com",
  phone: "+91 95203 18949",
  phoneHref: "tel:+919520318949",
  whatsappHref:
    "https://wa.me/919520318949?text=Hi%20Yash%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
  linkedin: "https://www.linkedin.com/in/yash-agrawal95/",
  github: "https://github.com/Yashag95",
  resume: "/Yash_Agrawal_updated_resume.pdf",
  location: "India",
  availability: "Software Engineer | React.js | TypeScript | Full-Stack Development",
};

export const stats = [
  { value: "5", label: "Languages integrated in enterprise UI workflows" },
  { value: "Theme", label: "Light and dark UI integration" },
  { value: "Maps", label: "Map-based analytics and location views" },
  { value: "APIs", label: "REST, async data handling, Node.js, Express.js" },
];

export const navLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Education", target: "education" },
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "Certifications", target: "certifications" },
  { label: "Contact", target: "contact" },
];

export const socials = [
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "Email", href: `mailto:${profile.email}`, icon: MdEmail },
  { label: "WhatsApp", href: profile.whatsappHref, icon: FaWhatsapp },
  { label: "Call", href: profile.phoneHref, icon: MdLocalPhone },
];

export const experiences = [
  {
    company: "SISO India Private Limited",
    role: "Software Engineer",
    period: "June 2024 - Present",
    roleHistory: [
      { title: "Software Engineer", period: "April 2026 - Present" },
      { title: "Frontend Developer", period: "June 2024 - March 2026" },
    ],
    location: "India / Switzerland collaboration",
    stack: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "Three.js", "ThatOpen", "Node.js", "Express.js"],
    summary:
      "Building enterprise web application modules with 5-language support, dynamic theme integration, dashboards, map-based views, API-connected screens, and 3D visualization support.",
    highlights: [
      "Developed enterprise-grade frontend modules with React.js, Redux, Tailwind CSS, TypeScript, and reusable component architecture.",
      "Integrated 5-language i18n support and dynamic theme switching across the application UI.",
      "Implemented interactive dashboards and map-based data visualization using mapping APIs for location-aware workflows.",
      "Developed 3D visualization modules using Three.js and ThatOpen library for model-viewing workflows.",
      "Collaborating with a Switzerland-based team through GitHub, translating business requirements into scalable frontend solutions.",
      "Integrated REST APIs and asynchronous data handling to support smooth data flow across complex UI interactions.",
      "Developed and maintained Node.js and Express.js APIs supporting frontend modules and business workflows.",
      "Improved frontend performance using code splitting, lazy loading, memoization, and bundle optimization techniques.",
      "Contributed to UI/UX enhancements with a focus on responsive design, accessibility, and consistent user experience across devices.",
      "Used AI tools such as ChatGPT, Claude AI, and Cursor to support debugging, implementation, and development productivity.",
    ],
  },
  {
    company: "NIC (Akal Information & Velocis Systems Pvt. Ltd.)",
    role: "Software Developer",
    period: "July 2022 - May 2023",
    location: "India",
    stack: ["React.js", "Redux", "Tailwind CSS", "JavaScript", "Node.js", "MySQL", "GraphQL"],
    summary:
      "Built and maintained single-page applications, admin panels, API integrations, and analytics surfaces for government-facing systems.",
    highlights: [
      "Developed responsive SPA modules with React.js, Redux, Tailwind CSS, HTML5, and JavaScript.",
      "Integrated RESTful and GraphQL endpoints for fetching, updating, and managing application data.",
      "Built admin analytics panels with interactive tables, charts, backend services, and MySQL-backed workflows.",
      "Improved rendering performance with code splitting, lazy loading, and memoized UI patterns.",
      "Implemented reusable UI sections and form-based workflows to keep application screens consistent and easier to maintain.",
      "Worked with backend teams to validate API responses, resolve integration issues, and improve data handling in frontend modules.",
    ],
  },
  {
    company: "Helloverify India Private Limited",
    role: "Data Analyst",
    period: "Jan 2022 - July 2022",
    location: "India",
    stack: ["Power BI", "MySQL", "MS Excel", "SQL", "MS Word"],
    summary:
      "Handled high-volume metrics, validation, reporting, and workflow automation for client deliverables.",
    highlights: [
      "Produced client-ready reports, metrics, and data deliverables with strong validation discipline.",
      "Maintained 99% accuracy through rigorous quality checks and structured data review.",
      "Used Power BI, MySQL, Excel, macros, and SQL scripts to analyze data and reduce repetitive manual work.",
      "Prepared daily and periodic data reports by cleaning, organizing, and cross-checking high-volume records.",
      "Identified data mismatches and process gaps, then coordinated corrections to improve reporting reliability.",
    ],
  },
];

export const projects = [
  {
    name: "Operations Analytics Dashboard",
    type: "Dashboard Application",
    description:
      "A portfolio-safe analytics dashboard concept focused on frontend architecture, multilingual UI, theme integration, data cards, charts, map views, API-connected screens, and responsive user experience.",
    points: [
      "Designed multilingual UI flows using i18n-based language switching.",
      "Added light and dark theme integration for a consistent user-controlled interface.",
      "Built reusable dashboard widgets, Redux data flows, and API-connected views.",
      "Integrated map-based visualizations for location-aware records and regional insights.",
      "Structured the UI for scalable charts, filters, status summaries, and drill-down views.",
    ],
  },
  {
    name: "Asset Visualization Portal",
    type: "3D Web Application",
    description:
      "A web-based visualization concept for viewing digital assets, metadata, map locations, and status information through a clean React interface.",
    points: [
      "Created reusable React components for asset details, status cards, and metadata panels.",
      "Used Three.js-based patterns for interactive 3D model viewing and scene controls.",
      "Connected frontend modules with REST APIs and Redux-managed async flows.",
      "Designed responsive layouts for desktop review screens and mobile-friendly summaries.",
    ],
  },
  {
    name: "Query Management Portal",
    type: "Full-Stack Application",
    description:
      "A secure query-management system with authentication, authorization, sessions, and operational data tables.",
    points: [
      "Built JWT-based sessions, role-aware access flows, and backend routes with Node.js, Express.js, and MySQL.",
      "Created frontend tables and admin workflows with React and Tailwind CSS.",
      "Focused on clean API integration and maintainable state handling.",
    ],
  },
  {
    name: "E-commerce Webpage",
    type: "MERN Prototype",
    description:
      "A MERN stack commerce prototype with product listing, authentication, and MongoDB-backed data storage.",
    points: [
      "Implemented product browsing and account-facing flows.",
      "Connected React UI with Express and MongoDB data models.",
      "Built responsive UI patterns for mobile and desktop users.",
    ],
  },
  {
    name: "Weather Forecasting Application",
    type: "API Product",
    description:
      "A weather forecasting app using React and OpenWeather API to display real-time weather data in a clean UI.",
    points: [
      "Integrated third-party weather data APIs.",
      "Presented current conditions and forecast details with responsive components.",
      "Handled async loading states and user-facing API responses.",
    ],
  },
];

export const skills = [
  { name: "JavaScript", icon: FaJs, group: "Languages" },
  { name: "TypeScript", icon: SiTypescript, group: "Languages" },
  { name: "React.js", icon: FaReact, group: "Frontend" },
  { name: "Redux", icon: SiRedux, group: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, group: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, group: "Frontend" },
  { name: "HTML5", icon: FaHtml5, group: "Frontend" },
  { name: "CSS3", icon: FaCss3Alt, group: "Frontend" },
  { name: "Bootstrap", icon: FaBootstrap, group: "Frontend" },
  { name: "Figma", icon: FaFigma, group: "Design" },
  { name: "Three.js", icon: SiThreedotjs, group: "3D" },
  { name: "ThatOpen", icon: FaCube, group: "3D" },
  { name: "Node.js", icon: FaNodeJs, group: "Backend" },
  { name: "Express.js", icon: SiExpress, group: "Backend" },
  { name: "REST APIs", icon: FaDatabase, group: "Backend" },
  { name: "GraphQL", icon: SiGraphql, group: "Backend" },
  { name: "MySQL", icon: SiMysql, group: "Databases" },
  { name: "MongoDB", icon: SiMongodb, group: "Databases" },
  { name: "GitHub", icon: FaGithub, group: "Tools" },
  { name: "AWS", icon: FaAws, group: "Tools" },
];

export const certifications = [
  "Prompt Engineering for Developers - DeepLearning.AI",
  "Advanced Frontend React.js - Ducat, Noida",
  "Full Stack Web Development - Coding Blocks / CodeHelp",
  "MERN Full Stack Web Development - CodeHelp",
  "HTML, CSS, and JavaScript for Web Developers - Coursera",
];

export const education = [
  {
    school: "Hemvati Nandan Bahuguna Garhwal University, Srinagar",
    degree: "Bachelor of Computer Applications",
    period: "2016 - 2019",
  },
  {
    school: "SVM Inter College",
    degree: "Senior Secondary Education",
    period: "2014 - 2016",
  },
];
