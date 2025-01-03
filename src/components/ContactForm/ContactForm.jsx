import s from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import { useId } from 'react';
import { MdAdd } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { motion } from 'framer-motion';

const FeedbackScheme = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
})

const hoverAnimation = {
    scale: 1.1,
    cursor: 'pointer',
    backgroundColor: '#14C57C',
    color: 'white'
}

export default function ContactForm() {
     const nameId = useId()
     const numberId = useId()
     const dispatch = useDispatch()

     const initialValues = {
        name: '',
        number: ''
    }

    const handleAddContact = (values, options) => {
        const newContact = {
            name: values.name,
            number: values.number
        }
        dispatch(addContact(newContact))
        options.resetForm()
    }

    return (
        <div className={s.formDiv}>
            <Formik initialValues={initialValues} validationSchema={FeedbackScheme} onSubmit={handleAddContact}>
            <Form className={s.form}>
                <label htmlFor={nameId}>Name</label>
                    <Field type='text' id={nameId} name='name' className={s.inputs}/>
                    <ErrorMessage name='name' component='span' className={s.error}></ErrorMessage>
                <label htmlFor={numberId}>Number</label>
                    <Field type='number' id={numberId} name='number' className={s.inputs} />
                    <ErrorMessage name='number' component='span' className={s.error}></ErrorMessage>
                <motion.button type='submit' className={s.addBtn} whileHover={hoverAnimation}>Add contact<MdAdd /></motion.button>
            </Form>
            </Formik>
        </div>
    )
}