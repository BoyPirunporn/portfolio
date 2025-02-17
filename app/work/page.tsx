"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';


import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { EachElement } from '@/lib/utils';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Swiper as SwiperType } from 'swiper/types';
import Image from 'next/image';
import WorkSlideBtns from '@/components/WorkSlideBtns';
type Project = {
    num: string;
    category: string;
    title: string;
    description: string;
    stack: string[];
    image: string;
    live: string,
    github: string;
}
const projects: Project[] = [
    {
        num: "01",
        category: 'Full-stack',
        title: 'project 1',
        description: 'ให้บริการ e-Tax Invoice & e-Receipt ซึ่งเป็นการออกใบกำกับภาษีและใบเสร็จรับเงินในรูปแบบอิเล็กทรอนิกส์ เป็นบริการที่ช่วยจัดทำและส่งมอบเอกสารภาษีในรูปแบบดิจิทัลได้สะดวกและปลอดภัย บริการ e-Tax Invoice & e-Receipt ให้บริการกับธนาคารกสิกรไทย (KBank), ธนาคารกรุงเทพ (BBL), ธนาคารกรุงศรีอยุธยา (BAY), และธนาคารธนชาตหรือทีเอ็มบีธนชาต (TBANK หรือ RBH) ช่วยในการอำนวยความสะดวกให้ธุรกิจสามารถจัดการเอกสารภาษีและใบเสร็จแบบดิจิทัลง่ายและปลอดภัย การส่งมอบข้อมูลที่เป็นไปตามมาตรฐานของกรมสรรพากรและหน่วยงานที่เกี่ยวข้อง',
        stack: ["Laravel", "Redis", "MySQL"],
        image: "/assets/project/etax.jpg",
        live: "https://kbank.etaxsolution.com/",
        github: ""
    },
    {
        num: "02",
        category: 'frontend',
        title: 'project 2',
        description: 'Saypays POS เป็นแอปพลิเคชั่นระบบ Point of Sales (POS) ที่พัฒนาขึ้นเพื่อช่วย ธุรกิจขนาดเล็ก (SMEs) และร้านค้าใหม่ ให้สามารถบริหารจัดการหน้าร้าน ระบบชำระเงิน และสต็อกสินค้าได้อย่างมีประสิทธิภาพ โดยไม่ต้องเสียค่าใช้จ่ายเริ่มต้น',
        stack: ["Flutter", "Provider"],
        image: "/assets/project/Photo.jpg",
        live: "https://apps.apple.com/th/app/saypayspos/id6651832881?l=th",
        github: ""
    },
    {
        num: "03",
        category: 'frontend',
        title: 'project 3',
        description: 'เป็นบริการที่แยกออกมาจากตัวระบบหลัก (E-Tax) ที่จะให้บริการแก่ บริษัท ปตท. นํ้ามัน และการค้าปลีก จำกัด (มหาชน) (OR) ในการที่จะนำส่งข้อมูลใบกำกับภาษีอิเล็กทรอนิกส์และใบรับอิเล็กทรอนิกส์ (e-Tax invoice & e-Receipt) ทางด้าน Online ณ จุดบริการสถานีน้ำมันที่อยู่ภายใต้เครือข่ายของบริษัท OR และตัวแทนผู้จำหน่ายน้ำมัน (Dealer) เมื่อเกิดรายการขายน้ำมัน',
        stack: ["ReactJS", "MUI", "Axios", "Redux", "Express"],
        image: "/assets/project/buyer.png",
        live: "https://pttor-buyer.etaxsolution.com/",
        github: ""
    },
    {
        num: "04",
        category: 'frontend',
        title: 'project 4',
        description: 'เป็นหน้าเว็บเพจที่จะให้ผู้ใช้ดาวน์โหลดใบกำกับภาษีและใบรับอิเล็กทรอนิกส์ที่จะได้รับจาก SMS ของระบบ E-Tax',
        stack: ["ReactJS", "MUI", "Axios", "Redux", "Express"],
        image: "/assets/project/sleasing.png",
        live: "https://pttor-buyer.etaxsolution.com/",
        github: ""
    },
    {
        num: "05",
        category: 'Full-stack',
        title: 'project 5',
        description: 'เป็นโครงการของสภากาชาด จัดทำเพื่อเพิ่มพื้นที่สีเขียวในประเทศไทย เชิญชวน เยาวชนประชาชนทั่วไป ร่วมกันปลูกต้นไม้และลงทะเบียนต้นไม้ที่ปลูก สามารถติดตามการเติบโตของต้นไม้และแบ่งปันข้อมูลผ่านระบบออนไลน์',
        stack: ["Html", "Css", "Bootstrap", "JavaScript", "JQuery", "Ajax", "VB.Net", "MSSQL"],
        image: "/assets/project/image.png",
        live: "https://plant.redcross.or.th/",
        github: ""
    },
    // {
    //     num: "06",
    //     category: 'Front-end',
    //     title: 'project 6',
    //     description: 'เทมเพลตหน้าแลนดิ้งเพจรองรับการแสดงผลในทุกอุปกรณ์ (responsive) สร้างขึ้นด้วย NextJS,Tailwindcss และ Motion-Framer  มีการแสดงผลที่เน้นประสบการณ์ของผู้ใช้ที่ดีและการออกแบบที่เรียบง่าย เทมเพลตประกอบด้วยหลายส่วน เช่น Hero, About, Stats และ Contact มีฟีเจอร์การเลื่อนเนื้อหาอย่างราบรื่น (smooth scrolling) และมีการแสดงผลแอนิเมชันเพื่อเพิ่มความน่าสนใจให้กับผู้ใช้',
    //     stack: ["Next.js", "Tailwindcss", "motion-framer"],
    //     image: "/assets/project/iLanding.png",
    //     live: "https://plant.redcross.or.th/",
    //     github: ""
    // }
]


const Work = () => {

    const [project, setProject] = useState<Project>(projects[0]);

    const handleSlideChange = (swiper: SwiperType) => {
        const currentIndex = swiper.activeIndex;
        //update projec state base on current slide index
        setProject(projects[currentIndex]);
    }
    return (
        < motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: .4,
                    ease: "easeIn"
                }
            }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className='flex flex-col gap-[30px]'>
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className='text-[42] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>

                            <p className='text-white/60'>{project.description}</p>
                            <ul className='flex gap-4 flex-wrap'>
                                <EachElement
                                    of={project.stack}
                                    render={(item, index) => (
                                        <li key={index} className='text-xl text-accent'>
                                            {item}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )}
                                />
                            </ul>

                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className='flex items-center gap-4'>
                                <Link href={project.live}>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Project Live</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsGithub className={`text-white text-3xl  ${!project.github ? 'text-white/40' : 'group-hover:text-accent'}`} />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Git Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">

                        <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className='w-full'>
                                    <div className="h-[460px] ">
                                        <div className='absolute top-0 bottom-0 w-full h-full  z-10'></div>
                                        <div className="relative h-full w-full">
                                            <Image
                                                src={project.image}
                                                alt=''
                                                className='object-contain'
                                                fill
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            {/* <WorkSliderBtns */}
                            <WorkSlideBtns
                                containerStyles={'flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'}
                                btnStyles={`bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all `} />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Work;