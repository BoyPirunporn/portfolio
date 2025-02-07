import { EachElement } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import { experience } from "@/lib/data";
import { TabsContent } from "../ui/tabs";
import HeadeText from "./HeaderText";
import { motion } from "framer-motion";

const TabsContentExperience = () => {
    return (
        <TabsContent value='experience' className='w-full text-center xl:text-left'>

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
                className='flex flex-col gap-[30px] '>
                <HeadeText title={experience.title} />
                <ScrollArea className='h-[400px]'>
                    <ul

                        className='grid grid-cols-1 lg:grid-cols-1 gap-[30px]'>
                        <EachElement
                            of={experience.items}
                            render={(item, index) => (
                                <motion.li
                                    variants={{
                                        hidden: { x: -100, opacity: 0 },
                                        visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
                                    }}
                                    key={index} className='bg-[#232329]  py-6 px-10 rounded-xl flex flex-col gap-1'>
                                    <div className="flex flex-col items-start justify-start">
                                        <span className='text-accent '>{item.duration}</span>
                                        <h3 className='text-xl max-w-[260px] min-h-[40px] text-center lg:text-left'>{item.position}</h3>
                                        <div className='flex items-center gap-3 mb-[20px]'>
                                            {/* dot */}
                                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                            <p className='text-white/60 text-sm'>{item.company}</p>
                                        </div>
                                    </div>
                                    <ul className="ml-[2rem] list-disc marker:text-accent text-sm text-white/60 text-start lg:text-left">
                                        <EachElement
                                            of={item.descriptions}
                                            render={(item, index) => (
                                                <li key={index} className="">{item}</li>
                                            )}
                                        />
                                    </ul>

                                </motion.li>
                            )}
                        />
                    </ul>
                </ScrollArea>
            </motion.div>

        </TabsContent>
    );
}

export default TabsContentExperience;