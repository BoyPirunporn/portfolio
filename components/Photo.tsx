import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <div className="relative flex items-center justify-center
                    w-[300px] h-[300px]
                    xl:w-[506px] xl:h-[506px]">

            {/* Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-[10px] xl:inset-[14px]
             rounded-full overflow-hidden"
            >
                <Image
                    src="/me4.png"
                    alt="me"
                    fill
                    priority
                    quality={100}
                    className="object-cover"
                />
            </motion.div>

            {/* Circle */}
            <motion.svg
                className="absolute inset-0"
                viewBox="0 0 506 506"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                        strokeDasharray: [
                            "15 120 25 25",
                            "16 25 92 72",
                            "4 250 22 22"
                        ],
                        rotate: 360
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ transformOrigin: "50% 50%" }}
                />
            </motion.svg>
        </div>
    )
}

export default Photo
