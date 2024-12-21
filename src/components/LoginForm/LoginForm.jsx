import { useId, useState } from 'react'
import s from './LoginForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from "yup";
import { login } from '../../redux/auth/operations'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";

const FeedbackScheme = Yup.object().shape({
    email: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
})

export default function LoginForm() {
    const emailId = useId()
    const pwdId = useId()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const hoverAnimation = {
        scale: 1.1,
        cursor: 'pointer',
        backgroundColor: '#14C57C',
        color: 'white'
    }

    const initialValues = {
        email: '',
        password: ''
    }

    const handleLogin = (values, options) => {
        dispatch(login(values)).unwrap().then(res => {
            toast(`Welcome ${res.user.email}`)
            options.resetForm()
            navigate('/contacts')
        }).catch(() => {
            toast.error('Please, try again', {
                style: {
                    backgroundColor: 'black',
                    color: 'white'
            }
        })})
    }
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const [showPassword, setShowPassword] = useState(false)

    const toggleVisibility = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className={s.formDiv}>

            <Formik initialValues={initialValues} validationSchema={FeedbackScheme} onSubmit={handleLogin}>
            <Form className={s.form}>
                <label htmlFor={emailId}>Email</label>
                <Field type='email' id={emailId} name='email' className={s.inputs} />
                    <ErrorMessage name='email' component='span' className={s.error}></ErrorMessage>
                    <label htmlFor={pwdId} className={s.pwdLabel}>Password</label>
                    <div className={s.pwdCont}> 
                    <Field type={showPassword ? 'text' : 'password'} id={pwdId} name='password' className={s.inputs} />
                        <button type='button' className={`${s.pwdIcon} ${showPassword ? s.line : ''}`} onClick={toggleVisibility}><FaEye color='#f9f9f9' size={20} /></button>
                        </div>
                    <ErrorMessage name='password' component='span' className={s.error}></ErrorMessage>
                    {isLoggedIn ? null : <div className={s.text}>
                        <p>Don't have an account? &nbsp;</p>
                        <Link to='/register' className={s.link}>Sign up</Link>
                    </div>}
                    
                <motion.button type='submit' className={s.addBtn} whileHover={hoverAnimation}>Log in</motion.button>
            </Form>
            </Formik>
        </div>
    )
}