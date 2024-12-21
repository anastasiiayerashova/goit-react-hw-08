import s from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilteredContacts } from '../../redux/contacts/selectors'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contacts/operations'

const listAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
    },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }, 
  }),
}

export default function ContactList() {
  
  const contacts = useSelector(selectFilteredContacts)

  return (
    <motion.ul className={s.list} initial='hidden' animate='visible'>
      {contacts.map((item, index) => (
        <motion.li key={item.id} variants={listAnimation} custom={index + 1}>  
          <Contact {...item}/>
        </motion.li>
      ))}
    </motion.ul>
  );
}