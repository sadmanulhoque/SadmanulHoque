// Main configuration file for portfolio/resume data
// Edit this file to update your portfolio content across the entire site

import profileImage from "../assets/images/profile/profile.jpg";
import pranrflLogo from "../assets/images/work_experience/pranrfl.jpg";
import uniImage from "../assets/images/education/uni.png";
import collegeImage from "../assets/images/education/college.png";
import schoolImage from "../assets/images/education/school.png";
import htmlImage from "../assets/images/skills/html.webp";
import cssImage from "../assets/images/skills/css.png";
import bootstrapImage from "../assets/images/skills/bootstrap.png";
import shadcnImage from "../assets/images/skills/shadcn.png";
import jsImage from "../assets/images/skills/js.png";
import cImage from "../assets/images/skills/c.png";
import javaImage from "../assets/images/skills/java.png";
import javafxImage from "../assets/images/skills/javafx.png";
import nasaImage from "../assets/images/extracuriculars/nasa.svg";
import yImage from "../assets/images/extracuriculars/ycombinator.webp";
import seuImage from "../assets/images/extracuriculars/seu.png";
import song1 from "../assets/images/extracuriculars/uni_cultural_club/1.jpg";
import song2 from "../assets/images/extracuriculars/uni_cultural_club/2.jpg";
import song3 from "../assets/images/extracuriculars/uni_cultural_club/3.png";

export const DATA = {
  // Hero Section
  name: "Sadmanul Hoque",
  initials: "SH",
  description:
    "Graduated with a 91% CGPA in B.Sc. in Computer Science & Engineering. Awarded Merit Scholarship for outstanding academic performance. Industry experience building production ready systems.",
  avatarUrl: profileImage,
  role: "Software Engineer",

  // Experience Section
  experience: [
    {
      title: "MTO- Software Engineer PHP Developer",
      company: "PRAN-RFL GROUP",
      href: "https://company.com",
      logoUrl: pranrflLogo,
      start: "",
      end: "",
      description:
        "Designed and developed a production-grade industry standard CRM system serving as the backbone for customer issue resolution and internal coordination. Implemented ticketing, reporting, and document management systems, improving workflow efficiency and system reliability.",
    },
  ],

  // Education Section
  education: [
    {
      degree_title: "B.Sc. in Computer Science and Engineering",
      institution: "Southeast University",
      year: "2021 - 2025",
      cgpa: "CGPA: 3.63/4.00",
      note: "Merit Scholarship",
      image_url: uniImage,
    },
    {
      degree_title: "Higher Secondary Certificate (H.S.C)",
      institution: "Willes Little Flower School and College",
      year: "2018 - 2020",
      cgpa: "GPA: 5.00/5.00",
      note: "",
      image: "",
      image_url: collegeImage,
    },
    {
      degree_title: "Secondary School Certificate (S.S.C)",
      institution: "Willes Little Flower School and College",
      year: "2016 - 2018",
      cgpa: "GPA: 4.56/5.00",
      note: "",
      image: "",
      image_url: schoolImage,
    },
  ],

  // Skills Section
  skills: [
    { name: "HTML", image: htmlImage },
    { name: "CSS", image: cssImage },
    { name: "Bootstrap", image: bootstrapImage },
    { name: "Shadcn UI", image: shadcnImage },
    { name: "JavaScript", image: jsImage },
    { name: "C", image: cImage },
    { name: "C++", image: cImage },
    { name: "Java", image: javaImage },
    { name: "JavaFX", image: javafxImage },
    { name: "jQuery", image: "" },
    { name: "PHP", image: "" },
    { name: "Laravel", image: "" },
    { name: "React", image: "" },
    { name: "ASP .NET", image: "" },
    { name: "Next.js", image: "" },
    { name: "MySQL", image: "" },
    { name: "MSSQL Server", image: "" },
    { name: "Rabbit MQ", image: "" },
    { name: "TypeScript", image: "" },
    { name: "Jenkins", image: "" },
    { name: "Nginx Server", image: "" },
    { name: "Apache Server", image: "" },
    { name: "Postman", image: "" },
    { name: "Cisco Packet Tracer", image: "" },
    { name: "Arduino", image: "" },
    { name: "Tinkercad", image: "" },
    {
      name: "SOLID Design Principles",
      image: "",
    },
    {
      name: "Repository Pattern",
      image: "",
    },
    {
      name: "Service Layer Architecture",
      image: "",
    },
    {
      name: "Embedded System Sensor Integration",
      image: "",
    },
    {
      name: "Classification Models",
      image: "",
    },
    {
      name: "Regression Models",
      image: "",
    },
  ],

  // Tools Section
  tools: [
    { name: "VS Code", image: "" },
    { name: "GitLab", image: "" },
    { name: "GitHub", image: "" },
    { name: "NPM CLI", image: "" },
    { name: "Draw.io", image: "" },
    { name: "Docker", image: "" },
    { name: "Colab", image: "" },
    { name: "Laragon", image: "" },
    { name: "Herd", image: "" },
    { name: "Linux", image: "" },
    { name: "Composer", image: "" },
    { name: "HeidiSQL", image: "" },
    { name: "OpenProject", image: "" },
    { name: "Jira", image: "" },
  ],

  // Services
  services: [
    {
      title: "AI & Embedded Systems",
      description:
        "Skilled in developing AI-powered systems, machine learning models, IoT automation, and smart hardware projects.",
    },
    {
      title: "Custom Business Solutions",
      description:
        "Experienced in building CRM, ERP, POS workflow automation, and scalable business management systems.",
    },
    {
      title: "Database & System Architecture",
      description:
        "Experienced in designing optimized databases, secure system architecture, and high-performance application structures.",
    },
    {
      title: "Network Design & Simulation",
      description:
        "Skilled in designing and simulating computer networks using Cisco Packet Tracer and networking.",
    },
  ],

  // Navigation
  navbar: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],

  // Certifications
  certifications: {
    ai: [
      {
        title: "Machine Learning with Python",
        institution: "IBM",
        org: "Coursera",
        year: "Dec 2024",
        image_url: "",
      },
      {
        title: "Data Visualization with Python",
        institution: "IBM",
        org: "Coursera",
        year: "Dec 2024",
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28ACx2SQ-kDTr7e_pm7gvyrKVcaod6MaIfVThVy4U_Q&s=10",
      },
      {
        title: "Data Analysis with Python",
        institution: "IBM",
        org: "Coursera",
        year: "Jan 2025",
        image_url: "",
      },
      {
        title: "Python Basics",
        institution: "University of Michigan",
        org: "Coursera",
        year: "Dec 2024",
        image_url: "",
      },
      {
        title: "Managing Big Data with MySQL",
        institution: "Duke University",
        org: "Coursera",
        year: "Dec 2024",
        image_url: "",
      },
    ],
    software: [
      {
        title: "Web Development with HTML, CSS, JavaScript Essentials",
        institution: "IBM",
        org: "Coursera",
        year: "Jan 2025",
        image_url: "",
      },
      {
        title: "Learning Management System (LMS)",
        institution: "Udemy",
        org: "",
        year: "Jan 2025",
        image_url: "",
      },
      {
        title: "Managing Big Data with MYSQL",
        institution: "Duke University",
        org: "Coursera",
        year: "Dec 2024",
        image_url: "",
      },
      {
        title: "Relational Databases (RDBMS) Essentials",
        institution: "IBM",
        org: "Coursera",
        year: "Jan 2025",
        image_url: "",
      },
      {
        title: "Introduction to Software Product Management",
        institution: "University of Alberta",
        org: "Coursera",
        year: "Jan 2025",
        image_url: "",
      },
    ],
  },

  // Contact Section
  contact: {
    email: "your.email@example.com",
    tel: "+1-234-567-8900",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: "github",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: "linkedin",
        navbar: true,
      },
      Twitter: {
        name: "Twitter",
        url: "https://twitter.com/yourusername",
        icon: "twitter",
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:your.email@example.com",
        icon: "email",
        navbar: false,
      },
    },
  },

  // Footer Section
  footer: {
    title: "Get in Touch",
    description:
      "Want to chat? Just shoot me a dm with a direct question and I'll respond whenever I can.",
    copyright: "All rights reserved.",
    year: 2026,
  },

  // Projects Section
  projects: [
    {
      title: "Sanas Fashion",
      description:
        "E-commerce platform for fashion items with full-stack development.",
      image: "",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "jQuery",
        "PHP",
        "Laravel",
        "MySQL",
        "Postman",
        "Apache Server",
      ],
      practices: [
        "SOLID Design Principles",
        "Service Layer Architecture",
        "Repository Pattern",
      ],
      tools: [
        "VS Code",
        "GitHub",
        "Draw.io",
        "Herd",
        "Composer",
        "OpenProject",
        "DrawSQL",
        "NPM CLI",
        "Laragon",
        "HeidiSQL",
      ],
      links: [{ type: "Demo", href: "#", icon: "globe" }],
    },
    {
      title: "SpaceX Falcon 9 1st stage Success-Landing Prediction",
      description:
        "Predict if the Falcon 9 first stage will land successfully.",
      image: "",
      technologies: ["Python", "Classification Models"],
      practices: [],
      tools: ["GitHub", "Colab"],
      links: [{ type: "Source", href: "#", icon: "github" }],
    },
    {
      title: "Smart Plant Watering Embedded System",
      description:
        "Arduino with Soil Moisture, DHT11, Ultrasonic, Water Flow sensors for automation and monitoring.",
      image: "",
      technologies: ["C++", "Arduino", "Embedded System Sensor Integration"],
      practices: [],
      tools: ["Tinkercad", "GitHub"],
      links: [
        { type: "Source", href: "#", icon: "github" },
        { type: "Demo", href: "#", icon: "globe" },
      ],
    },
    {
      title: "Network Configurations and Simulations",
      description:
        "DHCP, DNS, Web, Mail, and FTP servers along with Static Routing, RIP, and OSPF.",
      image: "",
      technologies: ["Cisco Packet Tracer"],
      practices: [],
      tools: ["GitHub"],
      links: [{ type: "Source", href: "#", icon: "github" }],
    },
  ],

  // Extracurricular Activities Section
  extracurricular: [
    {
      title: "NASA International Space App Challenge",
      org: "NASA",
      year: "2024",
      desc: "Awarded the Galactic Problem Solver recognition for collaborative problem-solving on Earth and space challenges.",
      slug: "nasa-space-app-challenge",
      image_url: nasaImage,
      media_1: "",
      media_thumb_1: "",
      media_type_1: "",
      media_2: "",
      media_thumb_2: "",
      media_type_2: "",
      media_3: "",
      media_thumb_3: "",
      media_type_3: "",
    },
    {
      title: "Y Combinator Spring 2026 Applicant (BuildHub)",
      org: "Y Combinator",
      year: "2026",
      desc: "Applied as a solo founder with BuildHub, a platform designed to enable collaboration among engineers and students.",
      slug: "y-combinator-buildhub",
      image_url: yImage,
      media_1: "",
      media_thumb_1: "",
      media_type_1: "",
      media_2: "",
      media_thumb_2: "",
      media_type_2: "",
      media_3: "",
      media_thumb_3: "",
      media_type_3: "",
    },
    {
      title: "General Member",
      org: "Southeast University Cultural Club",
      year: "2023",
      desc: "Participated in university cultural club, performing guitar and vocals at campus events.",
      slug: "seau-cultural-club",
      image_url: seuImage,
      media_1: "",
      media_thumb_1: song1,
      media_type_1: "photo",
      media_2: "https://www.youtube.com/watch?v=yjUu3YcyPZw",
      media_thumb_2: song2,
      media_type_2: "video",
      media_3: "https://www.youtube.com/watch?v=yjUu3YcyPZw",
      media_thumb_3: song3,
      media_type_3: "video",
    },
    {
      title: "Runner-up",
      org: "ALL TIME BUSINESS FEST BANGLADESH",
      year: "2024",
      desc: "Certificate of Recognition",
      slug: "business-fest-runner-up",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXXXXXXXX",
      media_1: "",
      media_thumb_1: "",
      media_type_1: "",
      media_2: "",
      media_thumb_2: "",
      media_type_2: "",
      media_3: "",
      media_thumb_3: "",
      media_type_3: "",
    },
  ],
};
