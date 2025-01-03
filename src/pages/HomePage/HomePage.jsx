import s from './HomePage.module.css'
import { motion } from 'framer-motion'
import { FaRegAddressBook } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BiLogInCircle } from "react-icons/bi";

 const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

export default function HomePage() {
    return (
        <motion.div className={s.homeWrapper} custom={1} variants={textAnimation} initial='hidden' animate='visible'> 
            <motion.h1 className={s.title} custom={1} variants={textAnimation} initial='hidden' animate='visible'>Welcome to Your Personal Phonebook <FaRegAddressBook size={32} className={s.phoneIcon} /></motion.h1>
            <motion.p className={s.text} custom={2} variants={textAnimation} initial='hidden' animate='visible'>Effortlessly manage your contacts in one secure place.
                Sign up today to create your account and start building your personal phonebook. Stay organized and keep your important
                connections at your fingertips!
            </motion.p>
            <motion.ul className={s.descList} custom={3} variants={textAnimation} initial='hidden' animate='visible' >
                <motion.li className={s.descItem} custom={4} variants={textAnimation} initial='hidden' animate='visible'><IoIosCheckmarkCircleOutline color='#14c57c'/>Simple and intuitive interface</motion.li>
                <motion.li className={s.descItem} custom={5} variants={textAnimation} initial='hidden' animate='visible'><IoIosCheckmarkCircleOutline color='#14c57c'/>Easy contact editing</motion.li>
                <motion.li className={s.descItem} custom={6} variants={textAnimation} initial='hidden' animate='visible'><IoIosCheckmarkCircleOutline color='#14c57c'/>Access from any device</motion.li>
                <motion.li className={s.descItem} custom={7} variants={textAnimation} initial='hidden' animate='visible'><IoIosCheckmarkCircleOutline color='#14c57c'/>Secure data storage</motion.li>
                <motion.li className={s.descItem} custom={8} variants={textAnimation} initial='hidden' animate='visible'><IoIosCheckmarkCircleOutline color='#14c57c'/>Quick search</motion.li>
            </motion.ul>
            <p className={s.descList}>To start managing your contacts and access your personal phonebook, just create a free account or log in if you already have one.</p>
            <ul className={s.descList}>
                <motion.li className={s.descItemIcon} custom={9} variants={textAnimation} initial='hidden' animate='visible'><BiLogInCircle color='#14c57c' size={30}/>Sign Up: It only takes a few quick steps to sign up and start organizing your contacts right away.</motion.li>
                <motion.li className={s.descItemIcon} custom={10} variants={textAnimation} initial='hidden' animate='visible'><BiLogInCircle color='#14c57c' size={30}/>Log In: If you already have an account, log in to continue managing your contacts.</motion.li>
            </ul>
        </motion.div>
    )
}