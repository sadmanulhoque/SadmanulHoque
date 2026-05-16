// Main configuration file for portfolio/resume data
// Edit this file to update your portfolio content across the entire site

export const DATA = {
  // Hero Section
  name: "Sadmanul Hoque",
  initials: "SH",
  description:
    "Graduated with a 91% CGPA in B.Sc. in Computer Science & Engineering. Awarded Merit Scholarship for outstanding academic performance. Industry experience building production ready systems.",
  avatarUrl: "../assets/images/profile/profile.jpg",
  role: "Software Engineer",

  // Experience Section
  experience: [
    {
      title: "MTO- Software Engineer PHP Developer",
      company: "PRAN-RFL GROUP",
      href: "https://company.com",
      logoUrl: "../assets/images/work_experience/pranrfl.jpg",
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
      image_url: "../assets/images/education/uni.png",
    },
    {
      degree_title: "Higher Secondary Certificate (H.S.C)",
      institution: "Willes Little Flower School and College",
      year: "2018 - 2020",
      cgpa: "GPA: 5.00/5.00",
      note: "",
      image: "",
      image_url: "../assets/images/education/college.png",
    },
    {
      degree_title: "Secondary School Certificate (S.S.C)",
      institution: "Willes Little Flower School and College",
      year: "2016 - 2018",
      cgpa: "GPA: 4.56/5.00",
      note: "",
      image: "",
      image_url: "../assets/images/education/school.png",
    },
  ],

  // Skills Section
  skills: [
    { name: "HTML", image: "../assets/images/skills/html.webp" },
    { name: "CSS", image: "../assets/images/skills/css.png" },
    { name: "Bootstrap", image: "../assets/images/skills/bootstrap.png" },
    { name: "Shadcn UI", image: "../assets/images/skills/shadcn.png" },
    { name: "JavaScript", image: "../assets/images/skills/js.png" },
    { name: "C", image: "../assets/images/skills/c.png" },
    { name: "C++", image: "../assets/images/skills/c.png" },
    { name: "Java", image: "../assets/images/skills/java.png" },
    { name: "JavaFX", image: "../assets/images/skills/javafx.png" },
    { name: "jQuery", image: "../assets/images/skills/jquery.png" },
    { name: "PHP", image: "../assets/images/skills/php.png" },
    { name: "Laravel", image: "../assets/images/skills/laravel.png" },
    { name: "React", image: "../assets/images/skills/react.png" },
    { name: "ASP .NET", image: "../assets/images/skills/aspnet.png" },
    { name: "Next.js", image: "../assets/images/skills/nextjs.png" },
    { name: "MySQL", image: "../assets/images/skills/mysql.png" },
    { name: "MSSQL Server", image: "../assets/images/skills/mssql.png" },
    { name: "Rabbit MQ", image: "../assets/images/skills/rabbitmq.png" },
    { name: "TypeScript", image: "../assets/images/skills/typescript.png" },
    { name: "Jenkins", image: "../assets/images/skills/jenkins.png" },
    { name: "Nginx Server", image: "../assets/images/skills/nginx.png" },
    { name: "Apache Server", image: "../assets/images/skills/apache.png" },
    { name: "Postman", image: "../assets/images/skills/postman.png" },
    { name: "Cisco Packet Tracer", image: "../assets/images/skills/cisco.png" },
    { name: "Arduino", image: "../assets/images/skills/arduino.png" },
    { name: "Tinkercad", image: "../assets/images/skills/tinkercad.png" },
    {
      name: "SOLID Design Principles",
      image: "../assets/images/skills/solid.png",
    },
    {
      name: "Repository Pattern",
      image: "../assets/images/skills/repository-pattern.png",
    },
    {
      name: "Service Layer Architecture",
      image: "../assets/images/skills/service-layer.png",
    },
    {
      name: "Embedded System Sensor Integration",
      image: "../assets/images/skills/embedded-system.png",
    },
    {
      name: "Classification Models",
      image: "../assets/images/skills/classification-models.png",
    },
    {
      name: "Regression Models",
      image: "../assets/images/skills/regression-models.png",
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
    {
      title: "Y Combinator Spring 2026 Applicant (BuildHub)",
      org: "Y Combinator",
      year: "2026",
      desc: "Applied as a solo founder with BuildHub, a platform designed to enable collaboration among engineers and students.",
      slug: "y-combinator-buildhub",
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
    {
      title: "General Member",
      org: "Southeast University Cultural Club",
      year: "2023",
      desc: "Participated in university cultural club, performing guitar and vocals at campus events.",
      slug: "seau-cultural-club",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXXXXXXXX",
      media_1: "https://via.placeholder.com/400x300?text=Photo",
      media_thumb_1: "https://via.placeholder.com/100x75?text=Photo",
      media_type_1: "photo",
      media_2: "https://youtu.be/XXXXXXXXXXX",
      media_thumb_2: "https://via.placeholder.com/100x75?text=Video",
      media_type_2: "video",
      media_3: "https://youtu.be/XXXXXXXXXXX",
      media_thumb_3: "https://via.placeholder.com/100x75?text=Video",
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
