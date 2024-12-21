import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import SearchBox from '../../components/SearchBox/SearchBox'
import s from './ContactsPage.module.css'
import { selectLoading, selectError } from '../../redux/contacts/selectors'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import AnimatedLayout from '../../components/AnimatedLayout/AnimatedLayout'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contacts/operations'

export default function ContactsPage() {
    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    
    
    return (
    <AnimatedLayout> 
        <ContactForm />
        <SearchBox/>
            {loading && !error && <Loader />}
        <ContactList/>
    </AnimatedLayout>
    )
}