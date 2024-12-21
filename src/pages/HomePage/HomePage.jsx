import s from './HomePage.module.css'
import { motion } from 'framer-motion'
import { FaRegAddressBook } from "react-icons/fa";

 const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.3}
    })
}

export default function HomePage() {
    return (
        <motion.div className={s.homeWrapper} custom={1} variants={textAnimation} initial='hidden' animate='visible'> 
            <motion.h1 className={s.title} custom={1} variants={textAnimation} initial='hidden' animate='visible'>Welcome to Your Personal Phonebook <FaRegAddressBook /></motion.h1>
            <motion.p className={s.text} custom={2} variants={textAnimation} initial='hidden' animate='visible'>Effortlessly manage your contacts in one secure place.
                Sign up today to create your account and start building your personal phonebook.
                Add, filter, and delete contacts with ease. Stay organized and keep your important
                connections at your fingertips!
            </motion.p>
        </motion.div>
    )
}