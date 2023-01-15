
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import app from '../../firebase.init';

const Register = () => {
    const emailFeild = useRef('');
    const passwordFeild = useRef('');
    const nameFeild = useRef('');
    const [eError, seteError] = useState('')
    const [success, setSuccess] = useState('')
    const auth = getAuth(app);
   
    const register = (e) => {
        e.preventDefault()
        const email = emailFeild.current.value;
        const password = passwordFeild.current.value;
        const displayName = nameFeild.current.value;
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
           
            setSuccess("User Create Successfully")
            updateUserName(displayName)
            
        })
        .catch((error) => {
            
            const errorMessage = error.message;
            seteError(errorMessage)
          
        });


     
    }


    const updateUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then((result) => {
                console.log(result)
               
            })
            .catch((error) => {
               
               
            })
    }
    return (
        <form onSubmit={register} className='login'>
            <input ref={nameFeild} type="text" placeholder='Name' required />
            <input ref={emailFeild} type="email" placeholder='E-mail Adress' required />
            <input ref={passwordFeild} type="password" placeholder='Password' required />
            <button className='btn-login'>Register</button>
            <p className='error'>{eError}</p>
            <p className='text-success'>{success}</p>
        </form>
    )
}

export default Register