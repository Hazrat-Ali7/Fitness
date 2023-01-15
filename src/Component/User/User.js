import React from 'react'

import {  NavLink, Outlet } from 'react-router-dom'
import LoginGoogle from './LoginGoogle'
import './User.css'
const User = () => {

    return (
        <div className='user'>
            <div className='left-side'>
            </div>
            <div className='right-side'>
                <div className='content'>
                    <h2>Get more things done with Login platform.
                    </h2>
                    <p>Access to the most powerfull tool in the entire design and web industry. </p>

                        <div className='button-group'>
                            <NavLink className='butn-login' to='login'>Login</NavLink>
                            <NavLink to="register">
                                Register
                            </NavLink>
                        </div>
                   <Outlet />
                   <LoginGoogle />
                </div>
               
            </div>
           
        </div>
    )
}

export default User


