import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../redux/contacts/operations'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import Loader from './Loader/Loader'
import ContactList from './ContactList/ContactList'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AppBar from './AppBar/AppBar'
import ContactsPage from '../pages/ContactsPage/ContactsPage'

export default function App() {
  
  

  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className='mainWrapper'>
      <AppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
      </Routes>
      
      
    </div>
  )
}


