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
    "Frontend-focused full-stack developer revamping a tunnel construction monitoring platform with React, TypeScript, dashboards, maps, i18n, and theme support.",
  summary:
    "I build responsive web applications with reusable UI components, API integration, data visualization, and performance-focused frontend implementation. My current work focuses on revamping a tunnel construction monitoring platform with dashboards, 5-language i18n, dynamic theming, map-driven project views, and BIM model viewing as one feature module.",
  email: "yashagarwal.ya62@gmail.com",
  phone: "+91 95203 18949",
  phoneHref: "tel:+919520318949",
  whatsappHref:
    "https://wa.me/919520318949?text=Hi%20Yash%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
  linkedin: "https://www.linkedin.com/in/yash-agrawal95/",
  github: "https://github.com/Yashag95",
  resume: "/Yash_Agrawal_updated_resume.pdf",
  location: "India",
  availability: "Open to frontend and full-stack engineering opportunities",
};

export const stats = [
  { value: "5", label: "Languages integrated in current revamp project" },
  { value: "Theme", label: "Light and dark UI integration" },
  { value: "Maps", label: "MapTiler-based project monitoring views" },
  { value: "APIs", label: "REST, async data handling, Node.js, Express.js" },
];

export const navLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Skills", target: "skills" },
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
      { title: "Frontend Developer", period: "June 2024 - March 2026" },
      { title: "Software Engineer", period: "April 2026 - Present" },
    ],
    location: "India / Switzerland collaboration",
    stack: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "Three.js", "ThatOpen", "Node.js", "Express.js"],
    summary:
      "Revamping a tunnel construction monitoring platform with 5-language support, dynamic theme integration, dashboards, map-based views, API-connected screens, and BIM model viewing as a supporting module.",
    highlights: [
      "Revamping a tunnel construction monitoring platform with React.js, Redux, Tailwind CSS, TypeScript, and reusable frontend components.",
      "Integrated 5-language i18n support and dynamic theme switching across the application UI.",
      "Implemented interactive dashboards and map-based data visualization using MapTiler APIs for project monitoring views.",
      "Developed 3D visualization modules using Three.js and ThatOpen library to load IFC construction and building models as part of the revamp project.",
      "Collaborating with a Switzerland-based team through GitHub, translating business requirements into scalable frontend solutions.",
      "Integrated REST APIs and asynchronous data handling to support smooth data flow across complex UI interactions.",
      "Developed and maintained Node.js and Express.js APIs supporting frontend modules and business workflows.",
      "Improved frontend performance using code splitting, lazy loading, memoization, and bundle optimization techniques.",
      "Contributed to UI/UX enhancements with a focus on responsive design, accessibility, and consistent user experience across devices.",
      "Used AI tools such as ChatGPT, Claude AI, and Cursor to support debugging, implementation, and development productivity.",
    ],
  },
  {
    company: "NIC via Akal Information & Velocis Systems Pvt. Ltd.",
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
    role: "Executive Data Analyst",
    period: "Jan 2022 - July 2022",
    location: "India",
    stack: ["Power BI", "MySQL", "Excel", "SQL", "Reporting"],
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
    name: "Tunnel Monitoring Platform Revamp",
    type: "Major Current Project",
    description:
      "A revamp of a tunnel construction monitoring platform focused on frontend architecture, multilingual UI, theme integration, dashboards, map views, API-connected screens, and user experience improvements.",
    points: [
      "Implemented 5-language integration for the application UI using i18n-based language switching.",
      "Added light and dark theme integration so users can switch the interface based on preference.",
      "Developed dashboard UI modules, reusable React components, Redux data flows, and API-connected views for project monitoring.",
      "Integrated map-based views and 3D globe/map visualization flows using MapTiler APIs.",
      "Worked on BIM model viewing as one part of the revamp, including IFC loading with Three.js and ThatOpen where required.",
    ],
  },
  {
    name: "Tunnel Monitoring Dashboard",
    type: "Enterprise Dashboard",
    description:
      "A construction monitoring interface that combines dashboard metrics, map views, status information, and workflow tracking.",
    points: [
      "Integrated MapTiler map views and geographic visualizations for project monitoring.",
      "Created reusable dashboard components for progress, status, and data-heavy reporting.",
      "Connected frontend modules with REST APIs and Redux-managed async flows.",
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
    name: "Weather Pro Application",
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

export const education = {
  school: "Hemvati Nandan Bahuguna Garhwal University, Srinagar",
  degree: "Bachelor of Computer Applications",
  period: "2016 - 2019",
};

