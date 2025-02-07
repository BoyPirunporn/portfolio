'use client';

import { EachElement } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
// variants
const stairAnimation: Variants = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"],
    }
}
// calculate the reverse index fot staggred delay
const reverseIndex = (index: number) => {
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1
}

const Stairs = () => {
    return (
        <>
            {/* render 6 motion divs, each representing a step of the stairs.
            
            Each div will have the same animation defined by the stairsANimation object.
            The delay for each div is calculated dynamically based on it's reversed indec,
            creating a staggered effect with decreasing delay for each subsequent step.
            */}
            <EachElement
                of={[...Array(6)]}
                render={(_, index) => (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial='initial'
                        animate={"animate"}
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            each: "easeInOut",
                            delay: reverseIndex(index) * 0.1
                        }}
                        className='h-full w-full bg-white  relative'
                    />
                )
                }
            />
        </>
    );
}

export default Stairs;