// Main configuration file for portfolio/resume data
// Edit this file to update your portfolio content across the entire site

export const DATA = {
    // Hero Section
    name: "Sadmanul Hoque",
    initials: "SH",
    description:
        "Graduated with a 91% CGPA in B.Sc. in Computer Science & Engineering. Awarded Merit Scholarship for outstanding academic performance. Industry experience building production ready systems.",
    avatarUrl: "https://avatars.githubusercontent.com/u/110332302?v=4",
    role: "Software Engineer",

    // Experience Section
    experience: [
        {
            title: "MTO- Software Engineer PHP Developer",
            company: "PRAN-RFL GROUP",
            href: "https://company.com",
            logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmEGNCOr-1EZhFuj5Ld-kR9wmeaTP4tiJUSv4PQTixg&s=10",
            start: "",
            end: "",
            description: "Designed and developed a production-grade industry standard CRM system serving as the backbone for customer issue resolution and internal coordination. Implemented ticketing, reporting, and document management systems, improving workflow efficiency and system reliability."
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
            image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3G-OCCe68w3ReseE2IGMHOOJWpZoUL_ac_L4QX448Q&s=10",
        },
        {
            degree_title: "Higher Secondary Certificate (H.S.C)",
            institution: "Willes Little Flower School and College",
            year: "2018 - 2020",
            cgpa: "GPA: 5.00/5.00",
            note: "",
            image: "",
            image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShqMtrPTlkHMe6eOMIUuNThImzK7GW5mgRN3TRbMK6rg&s=10",
        },
        {
            degree_title: "Secondary School Certificate (S.S.C)",
            institution: "Willes Little Flower School and College",
            year: "2016 - 2018",
            cgpa: "GPA: 4.56/5.00",
            note: "",
            image: "",
            image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShqMtrPTlkHMe6eOMIUuNThImzK7GW5mgRN3TRbMK6rg&s=10",
        },
    ],

    // Skills Section
    skills: [
        { name: "HTML", image: "" },
        { name: "CSS", image: "" },
        { name: "Bootstrap", image: "" },
        { name: "Shadcn UI", image: "" },
        { name: "JavaScript", image: "" },
        { name: "C", image: "" },
        { name: "C++", image: "" },
        { name: "Java", image: "" },
        { name: "JavaFX", image: "" },
        { name: "Python", image: "" },
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
        { name: "SOLID Design Principles", image: "" },
        { name: "Repository Pattern", image: "" },
        { name: "Service Layer Architecture", image: "" },
        { name: "Embedded System Sensor Integration", image: "" },
        { name: "Classification Models", image: "" },
        { name: "Regression Models", image: "" },
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

    // Navigation
    navbar: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ],

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

    // Projects Section
    projects: [
        {
            title: "Project Name",
            href: "https://project.com",
            dates: "Month Year - Present",
            active: true,
            description: "Project description and what it does.",
            technologies: ["React", "Node.js", "PostgreSQL"],
            links: [
                {
                    type: "Website",
                    href: "https://project.com",
                    icon: "globe",
                },
                {
                    type: "Source",
                    href: "https://github.com/username/project",
                    icon: "github",
                },
            ],
            image: "",
            video: "",
        },
    ],
};
