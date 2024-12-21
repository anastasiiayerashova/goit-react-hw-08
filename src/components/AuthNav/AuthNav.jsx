import s from './AuthNav.module.css'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function AuthNav () {
    return (
        <nav className={s.nav}>
         <NavLink to='/register' className={buildLinkClass}>
                Sign up
            </NavLink>
            <NavLink to='/login' className={buildLinkClass}>
                Log in
            </NavLink>
        </nav>
)
}