import { motion } from "framer-motion";
import s from './AnimatedLayout.module.css'

export default function AnimatedLayout({ children }) {
    const variants = {
     hidden: {
        opacity: 0,
        z: 0,
        x: 1000,
        y: 0,
        scale: 1,
        rotateY: 180
    },
     enter: {
        opacity: 1,
        z: 0,
        x: 0,
        y: 0,
        scale: 1,
        rotateY: 0
    },
     exit: {
        opacity: 0,
        z: 0,
        x: -1000,
        y: 0,
        scale: 1,
        rotateY: -180
    },
}

const transition = {
    type: 'keyframes',
    values: [0, 50, 100, 50, 0],
    duration: 0.7,
    ease: 'easeInOut'
}

    return (
         <motion.div initial='hidden' animate='enter' exit='exit' variants={variants} transition={transition} className={s.layout}>
        {children}
        </motion.div>
    )
}