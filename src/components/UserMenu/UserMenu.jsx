import { useDispatch } from 'react-redux';
import s from './UserMenu.module.css'
import clsx from 'clsx'
import { logout } from '../../redux/auth/operations';
import { motion } from 'framer-motion';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const hoverAnimation = {
    scale: 1.1,
    cursor: 'pointer',
    backgroundColor: '#14C57C',
    color: 'white'
}

export default function UserMenu() {
    const dispatch = useDispatch()

    return (
        <div className={s.wrapper}>   
            <motion.button className={buildLinkClass} whileHover={hoverAnimation} onClick={() => dispatch(logout())}>Logout</motion.button>
        </div>     
)
}