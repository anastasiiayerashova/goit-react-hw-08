import s from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function Navigation() {
    return (
        <> 
            <nav className={s.nav}> 
        <NavLink to='/' className={buildLinkClass}>
                <span>
                    Home
                </span>
                {' '}
                <AiOutlineHome size={28} color='#f9f9f9'/>
                </NavLink>
                <NavLink to='/contacts' className={buildLinkClass}>
                Contacts
            </NavLink>
            </nav>
            </>
    )
}