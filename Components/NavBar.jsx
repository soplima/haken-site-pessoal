import React from 'react'
import Link from 'next/link'
import NavLink from './NavLinks'

 {/* This array contains the necessary navigation links for the navbar. 
     Each link is an object with a title and a path */} 
const navLinks = [
    {
        title: 'About',
        path: '#about',
    },
    {
        title: 'Projects',
        path: '#projects',
    },
    {
        title: 'Contact',
        path: '#contact',
    }
]

 {/* This functional component returns the JSX for rendering the navbar. */} 
const NavBar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'> 
        <div className="flex flex-wrap items-center justify-between mx-auto px-4">
             {/* it was necessary to create a second iv so the space between the two images could be correctly placed */} 
            <div className="flex items-center space-x-4">
                <img 
                src="/image-logo.png" 
                alt="Logo"
                className="block"
                width={50}
                height={50}
                />
                <img 
                src="/nome-logo.png" 
                alt="Nome Logo"
                className="block"
                width={150}
                height={150}
                />
            </div>
            <div className="menu block md:w-auto" id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
