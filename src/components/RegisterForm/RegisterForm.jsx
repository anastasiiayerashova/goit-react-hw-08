import s from './RegisterForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useId } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const FeedbackScheme = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
})

export default function RegisterForm() {
    const dispatch = useDispatch()
    const nameId = useId()
    const emailId = useId()
    const pwdId = useId()
    
    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    const hoverAnimation = {
        scale: 1.1,
        cursor: 'pointer',
        backgroundColor: '#14C57C',
        color: 'white'
    }

    const handleRegister = (values, options) => {
        dispatch(register(values))
        options.resetForm()
    }

    return (
    <div className={s.formDiv}>
            <Formik initialValues={initialValues} validationSchema={FeedbackScheme} onSubmit={handleRegister}>
            <Form className={s.form}>
                <label htmlFor={nameId}>Name</label>
                    <Field type='text' id={nameId} name='name' className={s.inputs}/>
                <ErrorMessage name='name' component='span' className={s.error}></ErrorMessage>
                <label htmlFor={emailId}>Email</label>
                <Field type='email' id={emailId} name='email' className={s.inputs} />
                    <ErrorMessage name='email' component='span' className={s.error}></ErrorMessage>
                    <label htmlFor={pwdId}>Password</label>
                <Field type='password' id={pwdId} name='password' className={s.inputs} />
                <ErrorMessage name='password' component='span' className={s.error}></ErrorMessage>
                <motion.button type='submit' className={s.addBtn} whileHover={hoverAnimation}>Register</motion.button>
            </Form>
            </Formik>
        </div>
  );
}