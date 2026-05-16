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
import jqueryImage from "../assets/images/skills/jquery.svg";
import phpImage from "../assets/images/skills/php.svg";
import laravelImage from "../assets/images/skills/laravel.svg";
import reactImage from "../assets/images/skills/react.svg";
import aspImage from "../assets/images/skills/asp.png";
import nextjsImage from "../assets/images/skills/nextjs.svg";
import mysqlImage from "../assets/images/skills/mysql.png";
import mssqlImage from "../assets/images/skills/sql_server.png";
import rabbitmqImage from "../assets/images/skills/rabbitmq.svg";
import tsImage from "../assets/images/skills/ts.svg";
import jenkinsImage from "../assets/images/skills/jenkins.png";
import nginxImage from "../assets/images/skills/ngnx.svg";
import apacheImage from "../assets/images/skills/apahe.svg";
import postmanImage from "../assets/images/skills/postman.svg";
import ciscoImage from "../assets/images/skills/cisco.svg";
import arduinoImage from "../assets/images/skills/ardunio.svg";
import tinkercadImage from "../assets/images/skills/tinkercad.png";
import nasaImage from "../assets/images/extracuriculars/nasa.svg";
import yImage from "../assets/images/extracuriculars/ycombinator.webp";
import seuImage from "../assets/images/extracuriculars/seu.png";
import song1 from "../assets/images/extracuriculars/uni_cultural_club/1.jpg";
import song2 from "../assets/images/extracuriculars/uni_cultural_club/2.jpg";
import song3 from "../assets/images/extracuriculars/uni_cultural_club/3.png";

import ibm from "../assets/images/certifications/ibm.png";
import micigan from "../assets/images/certifications/michigan_university.png";
import duke from "../assets/images/certifications/duk_university.png";
import udemy from "../assets/images/certifications/udemy.png";
import alberta from "../assets/images/certifications/alberta_university.png";
import githubIcon from "../assets/images/common/github.png";import linkedinIcon from "../assets/images/common/linkedin.png";
import vsCodeImage from "../assets/images/tools/vs_code.svg";
import gitlabImage from "../assets/images/tools/gitlab.svg";
import npmImage from "../assets/images/tools/npm.svg";
import drawImage from "../assets/images/tools/draw.png";
import drawsqlImage from "../assets/images/tools/drawsql.ico";
import dockerImage from "../assets/images/tools/docker.svg";
import colabImage from "../assets/images/tools/colab.svg";
import laragonImage from "../assets/images/tools/laragon.png";
import herdImage from "../assets/images/tools/herd.png";
import linuxImage from "../assets/images/tools/linux.jpg";
import composerImage from "../assets/images/tools/composer.png";
import heidisqlImage from "../assets/images/tools/heidisql.png";
import openprojectImage from "../assets/images/tools/openproject.svg";
import jiraImage from "../assets/images/tools/jira.svg";
import ardunio from "../assets/images/projects/featured_projects/ardunio.png";
import networking from "../assets/images/projects/featured_projects/networking.png";
import sanasfashion from "../assets/images/projects/featured_projects/sanasfashion.png";
import spacex from "../assets/images/projects/featured_projects/spacex.gif";

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
    { name: "jQuery", image: jqueryImage },
    { name: "PHP", image: phpImage },
    { name: "Laravel", image: laravelImage },
    { name: "React", image: reactImage },
    { name: "ASP .NET", image: aspImage },
    { name: "Next.js", image: nextjsImage },
    { name: "MySQL", image: mysqlImage },
    { name: "MSSQL Server", image: mssqlImage },
    { name: "Rabbit MQ", image: rabbitmqImage },
    { name: "TypeScript", image: tsImage },
    { name: "Jenkins", image: jenkinsImage },
    { name: "Nginx Server", image: nginxImage },
    { name: "Apache Server", image: apacheImage },
    { name: "Postman", image: postmanImage },
    { name: "Cisco Packet Tracer", image: ciscoImage },
    { name: "Arduino", image: arduinoImage },
    { name: "Tinkercad", image: tinkercadImage },
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
    { name: "VS Code", image: vsCodeImage },
    { name: "GitLab", image: gitlabImage },
    { name: "GitHub", image: githubIcon },
    { name: "NPM CLI", image: npmImage },
    { name: "Draw.io", image: drawImage },
    { name: "Docker", image: dockerImage },
    { name: "Colab", image: colabImage },
    { name: "Laragon", image: laragonImage },
    { name: "Herd", image: herdImage },
    { name: "Linux", image: linuxImage },
    { name: "Composer", image: composerImage },
    { name: "HeidiSQL", image: heidisqlImage },
    { name: "OpenProject", image: openprojectImage },
    { name: "Jira", image: jiraImage },
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
        image_url: ibm,
      },
      {
        title: "Data Visualization with Python",
        institution: "IBM",
        org: "Coursera",
        year: "Dec 2024",
        image_url: ibm,
      },
      {
        title: "Data Analysis with Python",
        institution: "IBM",
        org: "Coursera",
        year: "Jan 2025",
        image_url: ibm,
      },
      {
        title: "Python Basics",
        institution: "University of Michigan",
        org: "Coursera",
        year: "Dec 2024",
        image_url: micigan,
      },
      {
        title: "Managing Big Data with MySQL",
        institution: "Duke University",
        org: "Coursera",
        year: "Dec 2024",
        image_url: duke,
      },
    ],
    software: [
      {
        title: "Web Development with HTML, CSS, JavaScript Essentials",
        institution: "IBM",
        org: "Coursera",
        year: "Jan 2025",
        image_url: ibm,
      },
      {
        title: "Learning Management System (LMS)",
        institution: "Udemy",
        org: "",
        year: "Jan 2025",
        image_url: udemy,
      },
      {
        title: "Managing Big Data with MYSQL",
        institution: "Duke University",
        org: "Coursera",
        year: "Dec 2024",
        image_url: duke,
      },
      {
        title: "Relational Databases (RDBMS) Essentials",
        institution: "IBM",
        org: "Coursera",
        year: "Jan 2025",
        image_url: ibm,
      },
      {
        title: "Introduction to Software Product Management",
        institution: "University of Alberta",
        org: "Coursera",
        year: "Jan 2025",
        image_url: alberta,
      },
    ],
  },

  // Contact Section
  contact: {
    email: "sadmanulhoque21@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sadmanulhoque",
        icon: githubIcon,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sadmanul-hoque",
        icon: linkedinIcon,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:sadmanulhoque21@gmail.com",
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
      image: sanasfashion,
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
      links: [{ type: "Live", href: "https://sanasfashion.com", icon: "globe" }],
    },
    {
      title: "SpaceX Falcon 9 1st stage Success-Landing Prediction",
      description:
        "Predict if the Falcon 9 first stage will land successfully.",
      image: spacex,
      technologies: ["Python", "Classification Models"],
      practices: [],
      tools: ["GitHub", "Colab"],
      links: [{ type: "Source", href: "https://github.com/sadmanulhoque/SpaceX-Falcon-9-1st-stage-Success-Landing-Prediction", icon: githubIcon }],
    },
    {
      title: "Smart Plant Watering Embedded System",
      description:
        "Arduino with Soil Moisture, DHT11, Ultrasonic, Water Flow sensors for automation and monitoring.",
      image: ardunio,
      technologies: ["C++", "Arduino", "Embedded System Sensor Integration"],
      practices: [],
      tools: ["Tinkercad", "GitHub"],
      links: [
        { type: "Source", href: "https://github.com/sadmanulhoque/Smart-Plant-Watering-System-Using-Ardunio", icon: githubIcon },
        { type: "Demo", href: "https://youtu.be/L57otuE7jIE", icon: "globe" },
      ],
    },
    {
      title: "Network Configurations and Simulations",
      description:
        "DHCP, DNS, Web, Mail, and FTP servers along with Static Routing, RIP, and OSPF.",
      image: networking,
      technologies: ["Cisco Packet Tracer"],
      practices: [],
      tools: ["GitHub"],
      links: [{ type: "Source", href: "https://github.com/sadmanulhoque/Computer-Networking", icon: githubIcon }],
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
