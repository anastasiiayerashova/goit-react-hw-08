import { useSelector } from 'react-redux'
import AuthNav from '../AuthNav/AuthNav'
import Navigation from '../Navigation/Navigation'
import UserMenu from '../UserMenu/UserMenu'
import s from './AppBar.module.css'
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors'

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const userEmail = useSelector(selectUser)
    
    return (
        <header className={s.header}>
            <Navigation />
            {isLoggedIn && <p>{userEmail}</p>}
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}