import s from './RegisterForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useId, useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { FaEye } from "react-icons/fa";

const FeedbackScheme = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
})

const hoverAnimation = {
    scale: 1.1,
    cursor: 'pointer',
    backgroundColor: '#14C57C',
    color: 'white'
}

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

    const handleRegister = (values, options) => {
        dispatch(register(values))
        options.resetForm()
    }

    const [showPassword, setShowPassword] = useState(false)

    const toggleVisibility = () => {
        setShowPassword(!showPassword)
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
                    <div className={s.pwdCont}> 
                        <Field type={showPassword ? 'text' : 'password'} id={pwdId} name='password' className={s.inputs} />
                        <button type='button' className={`${s.pwdIcon} ${showPassword ? s.line : ''}`} onClick={toggleVisibility}><FaEye color='#f9f9f9' size={20} /></button>
                    </div>
                    <ErrorMessage name='password' component='span' className={s.error}></ErrorMessage>
                <motion.button type='submit' className={s.addBtn} whileHover={hoverAnimation}>Sign up</motion.button>
            </Form>
            </Formik>
    </div>
  );
}