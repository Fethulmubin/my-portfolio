import React from 'react'

const NavBar = () => {
  return (
    <header className='navbar'>
        <div className='inner'>
            <a className='logo flex' href="#hero">
                <p className='logo'>Fethulmubin</p>
                <p className='logo hidden md:block'>Kedir</p>
            </a>

            <nav className='desktop'>
                <ul className='flex text-xl md:text-2xl font-semibold gap-10'>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#exper">About</a></li>
                </ul>
            </nav>

            <a href="#contact" className='contact-btn group'>
                <div className='inner font-semibold '>
                    <span className='md:py-1 font-semibold'>Contact me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar