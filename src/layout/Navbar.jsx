import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaFacebook, FaLinkedinIn, FaTwitter, FaXmark } from "react-icons/fa6";
import Modal from '../components/Modal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    // navItems
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/Services", link: "Services"},
        {path: "/about", link: "About"},
        {path: "/blogs", link: "Blogs"},
        {path: "/contact", link: "Contact"},
    ]

    // modal details

    const openModal = () => {
        setIsMenuOpen(true)
    }

    const clogeModal = () => {
        setIsMenuOpen(false)
    }
  return (
    <header className='bg-black text-white'>
        <nav className='px-16 py-4 mx-auto flex justify-between items-center '> 
            <a href="" className='text-xl font-bold text-white'>Design <span className='text-orange-500'>DK</span></a>

            {/* navitems for lg devices */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path, link}) => <li key={path} className='text-white'>
                        <NavLink 
                             className={({ isActive, isPending }) =>
                                isActive
                                  ? "active"
                                  : isPending
                                  ? "pending"
                                  : ""
                              }
                        to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            {/* menu icons */}
            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href="" className='hover:text-orange-500'><FaFacebook /></a>
                <a href="" className='hover:text-orange-500'><FaLinkedinIn /></a>
                <a href="" className='hover:text-orange-500'><FaTwitter /></a>
                <button onClick={openModal} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
            </div>
            
            <Modal isOpen={isMenuOpen} onClose={clogeModal} />

            {/* mobile menu btn display mobile screen */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark /> : <FaBars className='w-5 h-5' />
                    }
                </button>
            </div>

        </nav>

        {/* menu items only for mobile */}
        <div>
            <ul className={`md:hidden gap-12 text-lg block space-y-4 py-6 px-4 bg-white ${isMenuOpen ? "transition-all ease-out duration-150" : "hidden"}`}>
                {
                    navItems.map(({path, link}) => <li key={path} className='text-black'>
                        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>
        </div>
    </header>
  )
}

export default Navbar