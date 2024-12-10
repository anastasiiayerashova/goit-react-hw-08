import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import SearchBox from '../../components/SearchBox/SearchBox'
import s from './ContactsPage.module.css'
import { selectLoading, selectError } from '../../redux/contacts/selectors'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import AnimatedLayout from '../../components/AnimatedLayout/AnimatedLayout'

export default function ContactsPage() {
    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)

    
    
    return (
    <AnimatedLayout> 
        <ContactForm />
        <SearchBox/>
            {loading && !error && <Loader />}
        <ContactList/>
    </AnimatedLayout>
    )
}