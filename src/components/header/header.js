import React from 'react'
import './header.css'
function Header({ scrollme }) {

    return (
        <div className='flex justify-center  bg-slate-900'>
            <ul className='flex my-6 md:8 lg:my-12 text-white text-md font-bold'>
                <li className='active mx-2 sm:mx-6 lg:mx-10 text-sm md:text-lg'><a href='/#'
                >Home</a></li>
                <li className='mx-2 sm:mx-6 lg:mx-10 text-sm md:text-lg'><a href="/#"
                    onClick={(e) => scrollme(e.target.innerText)}>AboutMe</a></li>
                <li className='mx-2 sm:mx-6 lg:mx-10 text-sm md:text-lg'><a href="/#"
                    onClick={(e) => scrollme(e.target.innerText)}>Resume</a></li>
                <li className='mx-2 sm:mx-6 lg:mx-10 text-sm md:text-lg'><a href="/#"
                    onClick={(e) => scrollme(e.target.innerText)}>ContactMe</a></li>
            </ul>
        </div>
    )
}

export default Header