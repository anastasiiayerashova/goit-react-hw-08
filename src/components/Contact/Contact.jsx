import { useDispatch } from 'react-redux'
import s from './Contact.module.css'
import { FaUser } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { LuMinus } from "react-icons/lu";
import { deleteContact } from '../../redux/contacts/operations'
import { motion } from 'framer-motion';

const variants = {
        hidden: { opacity: 0, x: -100 }, 
        visible: { opacity: 1, x: 0 },  
        exit: { opacity: 0, x: 100 }    
    };

export default function Contact({ ...item }) {
    const dispatch = useDispatch()

    const handleDeleteContact = () => {
        dispatch(deleteContact(item.id))
    }

    const hoverAnimation = {
        scale: 1.1,
        cursor: 'pointer',
        backgroundColor: 'rgb(246, 59, 59)',
        color: 'white'
}

    return (
        <motion.div className={s.item} variants={variants} exit='exit' layout>
            <div className={s.itemDiv}>  
                <div className={s.iconsDiv}>  
                    <FaUser color='#14C57C'/>
                    <p className={s.name}>{item.name}</p>
                </div>
                <div className={s.iconsDiv}>  
                    <MdLocalPhone color='#14C57C'/>
                    <p className={s.phone}>{item.number}</p>
                </div>
            </div>
            <motion.button className={s.btn} type='button' onClick={handleDeleteContact} whileHover={hoverAnimation}>Delete<LuMinus /></motion.button>
        </motion.div>
    )
}