import { useDispatch, useSelector } from 'react-redux';
import s from './UserMenu.module.css'
import clsx from 'clsx'
import { logout } from '../../redux/auth/operations';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function UserMenu() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const user = useSelector(selectUser)
    return (
         
        <div className={s.wrapper}> 
                
            <button className={buildLinkClass} onClick={() => dispatch(logout())}>Logout</button>
            
        </div>
            
)
}