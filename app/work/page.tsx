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
import { Project } from '../types/typed';
import { projects } from '@/lib/data';



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