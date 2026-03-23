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
import { Project } from '@/app/types/typed';

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


export const projects: Project[] = [
    {
        num: "01",
        category: 'Full-stack',
        title: 'E-Tax Solution',
        description: 'ให้บริการ e-Tax Invoice & e-Receipt ซึ่งเป็นการออกใบกำกับภาษีและใบเสร็จรับเงินในรูปแบบอิเล็กทรอนิกส์ เป็นบริการที่ช่วยจัดทำและส่งมอบเอกสารภาษีในรูปแบบดิจิทัลได้สะดวกและปลอดภัย บริการ e-Tax Invoice & e-Receipt ให้บริการกับธนาคารกสิกรไทย (KBank), ธนาคารกรุงเทพ (BBL), ธนาคารกรุงศรีอยุธยา (BAY), และธนาคารธนชาตหรือทีเอ็มบีธนชาต (TBANK หรือ RBH) ช่วยในการอำนวยความสะดวกให้ธุรกิจสามารถจัดการเอกสารภาษีและใบเสร็จแบบดิจิทัลง่ายและปลอดภัย การส่งมอบข้อมูลที่เป็นไปตามมาตรฐานของกรมสรรพากรและหน่วยงานที่เกี่ยวข้อง',
        stack: ["Laravel", "Redis", "MySQL"],
        image: ["/assets/project/etax.jpg"],
        live: "https://kbank.etaxsolution.com/",
        github: ""
    },
    {
        num: "02",
        category: 'frontend',
        title: 'Saypay POS',
        description: 'Saypays POS เป็นแอปพลิเคชั่นระบบ Point of Sales (POS) ที่พัฒนาขึ้นเพื่อช่วย ธุรกิจขนาดเล็ก (SMEs) และร้านค้าใหม่ ให้สามารถบริหารจัดการหน้าร้าน ระบบชำระเงิน และสต็อกสินค้าได้อย่างมีประสิทธิภาพ โดยไม่ต้องเสียค่าใช้จ่ายเริ่มต้น',
        stack: ["Flutter", "Provider"],
        image: ["/assets/project/Photo.jpg"],
        live: "https://apps.apple.com/th/app/saypayspos/id6651832881?l=th",
        github: ""
    },
    {
        num: "03",
        category: 'frontend',
        title: 'Pttor Buyer',
        description: 'เป็นบริการที่แยกออกมาจากตัวระบบหลัก (E-Tax) ที่จะให้บริการแก่ บริษัท ปตท. นํ้ามัน และการค้าปลีก จำกัด (มหาชน) (OR) ในการที่จะนำส่งข้อมูลใบกำกับภาษีอิเล็กทรอนิกส์และใบรับอิเล็กทรอนิกส์ (e-Tax invoice & e-Receipt) ทางด้าน Online ณ จุดบริการสถานีน้ำมันที่อยู่ภายใต้เครือข่ายของบริษัท OR และตัวแทนผู้จำหน่ายน้ำมัน (Dealer) เมื่อเกิดรายการขายน้ำมัน',
        stack: ["ReactJS", "MUI", "Axios", "Redux", "Express"],
        image: ["/assets/project/buyer.png"],
        live: "https://pttor-buyer.etaxsolution.com/",
        github: ""
    },
    {
        num: "04",
        category: 'frontend',
        title: 'Sleasing',
        description: 'เป็นหน้าเว็บเพจที่จะให้ผู้ใช้ดาวน์โหลดใบกำกับภาษีและใบรับอิเล็กทรอนิกส์ที่จะได้รับจาก SMS ของระบบ E-Tax',
        stack: ["ReactJS", "MUI", "Axios", "Redux", "Express"],
        image: ["/assets/project/sleasing.png"],
        live: "https://pttor-buyer.etaxsolution.com/",
        github: ""
    },
    {
        num: "05",
        category: 'Full-stack',
        title: 'Plant Redcroos',
        description: 'เป็นโครงการของสภากาชาด จัดทำเพื่อเพิ่มพื้นที่สีเขียวในประเทศไทย เชิญชวน เยาวชนประชาชนทั่วไป ร่วมกันปลูกต้นไม้และลงทะเบียนต้นไม้ที่ปลูก สามารถติดตามการเติบโตของต้นไม้และแบ่งปันข้อมูลผ่านระบบออนไลน์',
        stack: ["Html", "Css", "Bootstrap", "JavaScript", "JQuery", "Ajax", "VB.Net", "MSSQL"],
        image: ["/assets/project/image.png"],
        live: "https://plant.redcross.or.th/",
        github: ""
    },
    {
        num: "06",
        category: 'Mobile application',
        title: 'Quizapp',
        description: 'เกมตอบคำถามแบบง่าย ๆ ที่ผู้เล่นจะต้องตอบคำถามแบบเลือกตอบและติดตามคะแนนของตนเองบนกระดานคะแนน',
        stack: ["React Native", "Zustand", "Firebase"],
        image: ["/assets/project/quizapp.png"],
        live: "https://drive.google.com/file/d/1lFgJNMfYc4YuvWp0gAIcza6t_sgMQjCY/view",
        github: ""
    },
    {
        num: "07",
        category: 'Front-end',
        title: 'I-Landing Page',
        description: 'หน้า Landing Page สำหรับธุรกิจ สตาร์ทอัพ และโปรเจ็กต์ดิจิทัลที่มีดีไซน์ทันสมัยและใช้งานง่าย โดยใช้ NextJs, tailwindcss และ motion-framer',
        stack: ["Next.js", "Tailwindcss", "motion-framer"],
        image: ["/assets/project/iLanding.png"],
        live: "https://i-landing.vercel.app/",
        github: "https://github.com/BoyPirunporn/iLanding"
    },

    {
        num: "08",
        category: 'Front-end',
        title: 'Find Restaurants',
        description: 'แอปพลิเคชั่นค้นหาร้านอาหารที่ทันสมัยและใช้งานง่ายซึ่งสร้างขึ้นด้วย TypeScript และ Material UI ค้นหาร้านอาหารได้อย่างง่ายดายโดยใช้คำสำคัญหรือหมวดหมู่และสำรวจรายละเอียดได้ในครั้งเดียว แอปพลิเคชั่นจะค้นหาร้านอาหารภายในรัศมี 5 กิโลเมตร โดยให้ผู้ใช้สามารถกรองตามชื่อหรือประเภท เช่น ร้านอาหาร เบเกอรี่ หรือคาเฟ่',
        stack: ["ReactJs", "Redux", "Material UI"],
        image: ["/assets/project/restaurants.png"],
        live: "",
        github: "https://github.com/BoyPirunporn/restaurantsWithGooglePlaceApi?tab=readme-ov-file"
    },
    {
        num: "09",
        category: "Tang Tem Pao Portal",
        image: ["/assets/image/tangtempao/portal/1.png"],
        title: "Tang Tem Pao Portal",
        description: "เป็นหน้าต่างเว็บแอปพลิเคชันสำหรับการบริหารจัดการและการดูแลระบบ (Admin) ของระบบบริหารการเงิน 'Tang Tem Pao' (มีตัง) ในขณะที่แอปมือถือถูกออกแบบมาให้ผู้ใช้ทั่วไปกรอกข้อมูลระหว่างเดินทางผ่านสมาร์ทโฟน ตัวหน้าเว็บ Portal นี้ถูกออบแบบมาให้ใช้งานผ่านเครื่องคอมพิวเตอร์ Desktop เพื่อให้มุมมองภาพรวมและแสดงข้อมูลจำนวนมหาศาลได้อย่างชัดเจน มันช่วยให้ผู้ใช้ (หรือแอดมิน ขึ้นอยู่กับสิทธิ์) สามารถจัดการหมวดหมู่ ดูตารางธุรกรรมอย่างลึกซึ้ง และดูแลโครงสร้างงบประมาณตลอดจนยอดเงินทั้งหมดได้",
        stack: [
            "Next.js",
            "Zustand",
            "Shadcn",
            "Tailwindcss"
        ],
        github: "",
        live: "https://tang-tem-pao-portal.vercel.app/"
    },
    {
        num: "10",
        category: "Tang Tem Pao Mobile",
        image: ["/assets/image/tangtempao/mb/1.png", "/assets/image/tangtempao/mb/3.png", "/assets/image/tangtempao/mb/4.png"],
        title: "Tang Tem Pao Mobile",
        description: "เป็นแอปพลิเคชันบนมือถือสำหรับการจัดการการเงินส่วนบุคคล การติดตามค่าใช้จ่าย และการจัดทำงบประมาณ แอปพลิเคชันนี้ถูกออกแบบมาเพื่อให้ผู้ใช้สามารถควบคุมสุขภาพทางการเงินของตนเองได้อย่างเต็มที่ โดยอนุญาตให้บันทึกธุรกรรม, ตั้งเป้าหมายทางการเงิน (งบประมาณ), และติดตามยอดคงเหลือรายวันได้ ตัวแอปถูกสร้างขึ้นให้มีความทันสมัย รวดเร็ว และลื่นไหล",
        stack: [
            "FLutter",
            "Riverpod (State management)",
            "Dio"
        ],
        github: "",
        live: ""
    },
    {
        num: "11",
        category: "ERP Lite",
        image: ["/assets/image/erp/dashboard-erp.png"],
        title: "ERP Lite",
        description: "เป็นแอปพลิเคชัน Frontend สำหรับระบบ ERP ที่สร้างขึ้นเพื่อเพิ่มประสิทธิภาพการดำเนินงานของธุรกิจ เช่น การจัดซื้อ การจัดการสินค้าคงคลัง และการจัดการคำสั่งซื้อ",
        stack: [
            "Next.js",
            "Tailwindcss",
            "Shadcn UI",
        ],
        github: "",
        live: ""
    }

]