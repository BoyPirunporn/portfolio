import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGit,
    FaDocker,
    FaLaravel,
    FaLinux


} from 'react-icons/fa';

import {
    SiTailwindcss,
    SiNextdotjs,
    SiMui,
    SiRedux,
    SiMysql,
    SiNginx,
     

} from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';

import { DiMsqlServer } from 'react-icons/di';
export const about = {
    title: "About Me",
    description: "Hello! My name is Pirunporn Aiamsoongnoen. I'm a developer, adept at developing and deploying quality web solutions. I possess a solid foundation in both front-end and back-end development and have approximately 4-5 months of experience in mobile development. I have a strong willingness to learn and adapt to new technologies, always striving to improve my skills and contribute effectively to my team.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Pirunporn Aiamsoongnoen"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+66) 95-879-0289"
        },
        {
            fieldName: "Experience",
            fieldValue: "4+ years"
        },
        {
            fieldName: "Email",
            fieldValue: "pirunporn.aia@gmail.com"
        }
    ]
}
export const experience = {
    icon: '/assets/badge.svg',
    title: "My Experience",
    items: [
        // {
        //     company: "Humanica Public Company Limited",
        //     position: "Senior software developer",
        //     duration: "2025-Present",
        //     descriptions: [
        //         "Provide support and customization for NetSuite to align with customer requirements, including feature enhancements and system adjustments.",
        //     ]
        // },
        {
            company: "2J Solution and Service Co., Ldt",
            position: "Full-stack Developer",
            duration: "2022-2025",
            descriptions: [
                "Developed and maintained scalable web and mobile applications using React.js, Node.js, and Flutter.",
                "Designed and implemented REST APIs to enhance application functionalities.",
                "Collaborated with UI/UX designers to create seamless user experiences.",
                "Conducted unit and integration testing to ensure software reliability and performance.",
                "Improved application response time by optimizing database queries and front-end performance.",
                "Set up environment websites using OS Linux, including configuring ports and Nginx, to ensure accessibility in browsers.",
                "Led the mobile application development for the POS UI System on the SayPay Project using Flutter (Android and iOS), ensuring a seamless user experience across platforms."
            ]
        },
        {
            company: "Nippon Sysits Co., Ltd",
            position: "Front-end Developer",
            duration: "2020-2022",
            descriptions: [
                "Built and maintained responsive web applications using VB.NET, jQuery, Bootstrap, HTML, CSS, and JavaScript.",
                "Optimized front-end components to enhance performance and user experience.",
                "Integrated RESTful APIs to ensure smooth data retrieval and management.",
                "Worked closely with cross-functional teams to deliver high-quality software products.",
            ]
        },
    ]
}
export const education = {
    icon: '/assets/cap.svg',
    title: "My Education",
    items: [
        { institution: "Suan Sunandha Rajabhat University", degree: "Bachelor’s Degree in Information Technology (IT)", duration: "2017-2021" },
        { institution: "Future Skill", degree: "Certified ReactJs", duration: "2023" },
        { institution: "Future Skill", degree: "Cergified React-Native", duration: "2024" },
    ]
}
export const skills = {
    title: "My Skills",
    skillLists: [
        { icon: FaHtml5, name: "html" },
        { icon: FaCss3, name: "css" },
        { icon: FaJs, name: "Javascript" },
        { icon: BiLogoTypescript, name: "Typescript" },
        { icon: FaReact, name: "React.js & React Native" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiRedux, name: "Redux" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: FaLaravel, name: "Laravel" },
        { icon: SiTailwindcss, name: "Tailwindcss" },
        { icon: SiMui, name: "MUI" },
        { icon: FaGit, name: "Git" },
        { icon: FaDocker, name: "Docker" },
        { icon: FaLinux, name: "Linux" },
        { icon: SiNginx, name: "Nginx" },
        { icon: SiMysql, name: "MySQL" },
        { icon: DiMsqlServer, name: "SQL Server" },

    ]
}
