import { EachElement } from "@/lib/utils";
import { about } from "@/lib/data";
import { TabsContent } from "../ui/tabs";
import { motion } from "framer-motion";
import Link from "next/link";

const TabsContentAboutMe = () => {
    return (
        <TabsContent value="about" className="w-full text-center xl:text-left">
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
                className="flex flex-col gap-[30px]"
            >
                <motion.h3 variants={{
                    hidden: { x: -100, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 150, } },
                }}
                    className='text-4xl font-bold'>{about.title}</motion.h3>
                <motion.p variants={{
                    hidden: { x: -100, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 150, } },
                }}
                    className='max-w-[600px] text-sm   text-white/60 mx-auto xl:mx-0'>{about.description}</motion.p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    <EachElement
                        of={about.info}
                        render={(item, index) => {
                                return (
                                    <motion.li
                                        variants={{
                                            hidden: { x: -100, opacity: 0 },
                                            visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 150, } },
                                        }}
                                        key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                        <span className="text-white/60">{item.fieldName}</span>
                                        <span className="text-white">{item.fieldValue}</span>
                                    </motion.li>
                                )
                        }}
                    />
                </ul>
            </motion.div>
        </TabsContent>
    );
}

export default TabsContentAboutMe;