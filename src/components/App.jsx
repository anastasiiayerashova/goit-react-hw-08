import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import ContactsPage from '../pages/ContactsPage/ContactsPage'
import Layout from './Layout/Layout'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PrivateRoute from './PrivateRoute'
import { selectIsRefreshing } from '../redux/auth/selectors'
import { refreshUser } from '../redux/auth/operations'
import RestrictedRoute from './RestrictedRoute'

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing)

  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? null : (
    <Layout> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts' element={<PrivateRoute>
          <ContactsPage/>
          </PrivateRoute>} />
        <Route path='/register' element={<RestrictedRoute component={<RegisterPage/>} redirectTo='/contacts'/>} />
        <Route path='/login' element={<RestrictedRoute component={<LoginPage/>} redirectTo='/contacts'/>}/>
      </Routes>
    </Layout> 
  )
}