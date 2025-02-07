import { EachElement } from "@/lib/utils";
import { skills } from "@/lib/data";
import { TabsContent } from "../ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import HeadeText from "./HeaderText";
import { motion } from "framer-motion";

const TabsContentSkill = () => {
    return (
        <TabsContent value="skills">
            <div className="flex flex-col gap-[30px]">
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
                    className="flex flex-col gap-[30px] text-center xl:text-left">
                    <HeadeText title={skills.title} />
                </motion.div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    <EachElement
                        of={skills.skillLists}
                        render={(skill, index) => (
                            <motion.li
                                variants={{
                                    initial: {
                                        opacity: 0,
                                    },
                                    animate: {
                                        opacity: 1,
                                    },
                                }}
                                initial='initial'
                                animate={"animate"}
                                transition={{
                                    duration: 0.2,
                                    each: "easeInOut",
                                    delay: index * 0.1
                                }}
                                key={index}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                <skill.icon />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </motion.li>
                        )}
                    />
                </ul>
            </div>
        </TabsContent>
    );
}

export default TabsContentSkill;