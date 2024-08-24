import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    // navItems
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/Services", link: "Services"},
        {path: "/about", link: "About"},
        {path: "/blogs", link: "Blogs"},
        {path: "/contact", link: "Contact"},
    ]
  return (
    <div className='bg-black'>
        <nav className='px-4 py-4'> 
            <a href="" className='text-xl font-bold text-white'>Design <span className='text-orange-500'>DK</span></a>

            {/* navitems for lg devices */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path, link}) => <li className='text-white'>
                        <NavLink to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            
        </nav>
    </div>
  )
}

export default Navbar