import { motion } from "framer-motion";

const HeadeText = ({
    title,
    description
}: {
    title: string;
    description?: string;
}) => {
    return (
        <>
            <motion.h3 variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
            }} className='text-4xl font-bold'>{title}</motion.h3>
            {description && <motion.p className='max-w-[600px] text-sm   text-white/60 mx-auto xl:mx-0'>{description}</motion.p>}
        </>
    );
}

export default HeadeText;