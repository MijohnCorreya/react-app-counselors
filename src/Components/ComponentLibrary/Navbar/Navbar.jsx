import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import COUNSELORS from '../../../Assets/counselors-logo-neg.svg'


//navbar component used for the navigation
const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => setClick(false);
    
    return (
        <>
            <nav className='navbar'>
                <div className='navbar__container'>
                    <Link to='/' className="navbar__logo">
                        <img src ={COUNSELORS} alt='COUNSELORS'/>
                    </Link>

                    {/* icon changes in the Hamburger menu */}
                    
                    <div className='menu__icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav__menu active' : 'nav__menu'}>
                        <li className='nav__item'>
                            <Link
                                to='/'
                                className="nav__links"
                                onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link
                                to='/leistungen'
                                className="nav__links"
                                onClick={closeMobileMenu}>
                                Leistungen
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link
                                to='/'
                                className="nav__links"
                                onClick={closeMobileMenu}>
                                Start-up Pitch
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link
                                to='/'
                                className="nav__links"
                                onClick={closeMobileMenu}>
                                Workshops
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link
                                to='/'
                                className="nav__links"
                                onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link
                                to='/'
                                className="nav__links"
                                onClick={closeMobileMenu}>
                                kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar


