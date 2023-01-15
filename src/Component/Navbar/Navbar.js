import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Navbar.css'
import './Responsive.css'
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom'
import app from '../../firebase.init';
const Navbar = () => {
    const navUrls = ["home","checkout", "about","blogs"]
    const [navbar, setNavbar] = useState(false)
    const navHandler = () => {
        if (navbar) {
            setNavbar(false)
        }
        else {
            setNavbar(true)
        }
    }
    const auth = getAuth(app);

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth).then(() => {
            window.location.reload();
        }).catch((error) => {
           
        });
    }
    return (
        <>
            <nav id="navbar_top" className="navbar">
                <div className="container">
                    <div className="content">
                        <div className="logo">
                            <Link className='btn' to='/' >
                                <h1 className='logo-my'>Fithness</h1>
                            </Link>
                            <FontAwesomeIcon onClick={navHandler} icon={faBars} />
                        </div>
                        <ul className={navbar ? "show" : "dont-show"}>
                            {
                                navUrls.map(url => <li key={url}> <NavLink to={url} className='nav-link-p'>{url}</NavLink></li>)
                            }
                            <li>
                                {
                                    user?
                                        <button onClick={logout} className='logout-btn'>Logout</button>
                                        :
                                        <NavLink className='nav-link-p' to='/user'>
                                            Login
                                        </NavLink>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar