import {  getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import app from '../../firebase.init';

const Login = () => {
    const auth = getAuth(app)
    const emailFeild = useRef('');
    const passwordFeild = useRef('');
    const [eError , seteError] = useState('')
    const [success, setSuccess] = useState('')
   
    const login = (e) => {
        e.preventDefault()
        const email = emailFeild.current.value;
        const password = passwordFeild.current.value;

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setSuccess("Login Success Full")  
             
        })
        .catch((error) => {
            seteError(error.message)
        })
    }

    return (
        <form action='submit' onSubmit={login} className='login'>
            <input  ref={emailFeild} type="email" placeholder='E-mail Adress' required/>
            <input  ref={passwordFeild} type="password" placeholder='Password' required/>
            <button className='btn-login'>Login</button>
            <button className='btn-forget'>Forget Password ?</button>

        <p className='error'>{eError}</p>
        <p className='text-success'>{success}</p>
        </form>
    )
}

export default Login