'use client';


import {
    Tabs,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs';

import { motion } from 'framer-motion';
import TabsContentExperience from '@/components/resume/TabsContentExperience';
import TabsContentEducation from '@/components/resume/TabsContentEducation';
import TabsContentSkill from '@/components/resume/TabsContentSkills';
import TabsContentAboutMe from '@/components/resume/TabsContentAboutMe';

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 1.4,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }} 
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value={'experience'}>Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>


                    {/* contents */}

                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContentExperience />
                        {/* education */}
                        <TabsContentEducation />
                        {/* skills */}
                        <TabsContentSkill />
                        {/* about */}
                        <TabsContentAboutMe />
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Resume;