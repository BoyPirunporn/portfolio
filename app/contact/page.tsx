'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EachElement } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const info = [
    { title: "Phone", description: "(+66) 95-879-0289",href:"tel:095-879-0289", icon: <FaPhone /> },
    { title: "E-Mail", description: "pirunporn.aia@gmail.com", icon: <IoMdMail />,href:"mailto:pirunporn.aia@gmail.com" },
    { title: "Address", description: "689 the livin phetkasem 37", icon: <FaMapMarkerAlt /> },
]
const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 1.4,
                    duration: .5,
                    ease: "easeIn"
                }
            }}
            className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                <div className="xl:h-[54%] order-2 xl:order-none">
                    <form action="" className="flex flex-col gap-5 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-4xl text-accent">Contact me</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder="Firstname" />
                            <Input type="lastname" placeholder="Lastname" />
                            <Input type="email" placeholder="Email address" />
                            <Input type="phone" placeholder="Phone number" />
                        </div>
                        {/* textarea */}
                        <Textarea placeholder="Type your message here." className="h-[200px]" />

                        <Button size={"default"} className="max-w-40"> Send message</Button>
                    </form>
                </div>
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                        <EachElement
                            of={info}
                            render={(item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <Link className="text-[28px]" href={item.href ?? ""}>{item.icon}</Link>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            )}
                        />
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;