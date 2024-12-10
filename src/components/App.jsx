import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../redux/contacts/operations'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import { selectLoading } from '../redux/contacts/selectors'
import { selectError } from '../redux/contacts/selectors'
import Loader from './Loader/Loader'
import ContactList from './ContactList/ContactList'

export default function App() {
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  

  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className='mainWrapper'>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      <ContactList/>
    </div>
  )
}


