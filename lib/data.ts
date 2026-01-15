import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGit,
    FaDocker,
    FaLaravel,
    FaLinux,
    FaJava


} from 'react-icons/fa';

import {
    SiTailwindcss,
    SiNextdotjs,
    SiMui,
    SiRedux,
    SiMysql,
    SiNginx,
    SiPostgresql,
    SiFlutter,
    SiNestjs,


} from 'react-icons/si';
import { BiLogoTypescript, BiLogoSpringBoot } from 'react-icons/bi';

import { DiMsqlServer } from 'react-icons/di';
import { calculateExperience } from './utils';
export const about = {
    title: "About Me",
    description: "Hello! My name is Pirunporn Aiamsoongnoen. I’m a full-stack developer with experience in web and mobile applications. I’m eager to learn new technologies and always strive to improve my skills to contribute effectively to my team.",
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
            fieldValue: `${calculateExperience('2020-12-01').years}+ years`
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
        {
            company: "RCL GROUP",
            position: "Software Developer",
            duration: "3-Nov-2025 - Present",
            descriptions: [
                "Developed and maintained scalable web applications using stack such Spring boot. React.js, Next.js, and Tailwindcss.",
                "Collaborated with cross-functional teams to define, design, and ship new features.",
                "Optimized application performance and ensured high availability.",
                "Integrated third-party services and APIs to extend application functionalities."
            ]
        },
        {
            company: "DataOne Asia (Thailand) Company Limited",
            position: "Software Developer",
            duration: "2-May-2025 - 31-Oct-2025",
            descriptions: [
                "Developed and maintained scalable web applications using Spring boot.",
            ]
        },
        {
            company: "2J Solution and Service Co., Ldt",
            position: "Full-stack Developer",
            duration: "1-Api-2022 - 31-Mar-2025",
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
            duration: "1-Dec-2020 - 31-Mar-2022",
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
        { icon: FaJava, name: "Java" },
        { icon: SiFlutter, name: "Flutter" },
        { icon: BiLogoSpringBoot, name: "Spring Boot" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: FaLaravel, name: "Laravel" },
        { icon: SiTailwindcss, name: "Tailwindcss" },
        { icon: SiMui, name: "MUI" },
        { icon: FaGit, name: "Git" },
        { icon: FaDocker, name: "Docker" },
        { icon: FaLinux, name: "Linux" },
        { icon: SiNginx, name: "Nginx" },
        { icon: SiMysql, name: "MySQL" },
        { icon: SiPostgresql, name: "Postgresql" },
        { icon: DiMsqlServer, name: "SQL Server" },

    ]
}
