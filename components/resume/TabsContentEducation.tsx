import { EachElement } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { education } from "@/lib/data";
import { TabsContent } from "../ui/tabs";
import HeadeText from "./HeaderText";
import { motion } from "framer-motion";

const TabsContentEducation = () => {
    return (
        <TabsContent value='education' className='w-full'>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: .3
                        }
                    }
                }}
                initial="hidden"
                animate="visible"
                className='flex flex-col gap-[30px] text-center xl:text-left'>
                <HeadeText title={education.title} />
                <ScrollArea className='h-[400px]'>
                    <ul
                        className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                        <EachElement
                            of={education.items}
                            render={(item, index) => (
                                <motion.li
                                    variants={{
                                        hidden: { x: -100, opacity: 0 },
                                        visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
                                    }}
                                    key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                    <span className='text-accent'>{item.duration}</span>
                                    <h3 className='text-md max-w-[260px] min-h-[60px] text-center lg:text-left text-wrap'>{item.degree}</h3>
                                    <div className='flex items-center gap-3'>
                                        {/* dot */}
                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                        <p className='text-sm text-white/60'>{item.institution}</p>
                                    </div>
                                </motion.li>
                            )}
                        />
                    </ul>
                </ScrollArea>
            </motion.div>
        </TabsContent>
    );
}

export default TabsContentEducation;