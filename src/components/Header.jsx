import React from 'react'
import { navLinksData } from '../assets/data';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';


const activeLinkClasses = "border-zinc-400 font-bold";

const Header = () => {
  return (
    <header>
        {/* ANNOUNCEMENT BAR */}
        <div className='bg-zinc-900 text-white text-center text-xs py-2'>
            Sign up and get 20% off for all new-season collections
        </div>

        {/* MAIN BAR */}
        <div className='bg-white py-4'>
            <div className='max-w-7xl mx-auto px-4 flex justify-between items-center border border-zinc-200 rounded-2xl p-4'>
        {/* LOGO */}
        <div className='flex items-center justify-between gap-2'>
            <div className='text-3xl anton text-zinc-900'>
                PUREMALL
            </div>
        </div>

        {/* NAVIGATION */}
        <div className='hidden md:flex space-x-4 text-sm font-medium text-zinc-600'>

            {
                navLinksData.map((link) => (
                    <a key={link.name} href='#' className={`hover:text-zinc-900 hover:font-bold duration-200 transition-all border border-transparent hover:border-zinc-400 p-2 rounded-full ${
                        link.isActive && activeLinkClasses
                    }`}>
                        {link.name}
                    </a>
                ))
            }

        </div>

        {/* CARD ICONS */}
        <div className=' flex items-center space-x-6'>
            <button className='text-zinc-700 hover:text-zinc-900 transition-colors'>
                <FiSearch size={20}/>
            </button>

            <button className='text-zinc-700 hover:text-zinc-900 transition-colors'>
                <FaUserCircle size={20}/>
            </button>

            <button className='text-zinc-700 hover:text-zinc-900 transition-colors'>
                <FiShoppingCart size={20}/>
            </button>

        </div>

            </div>
        </div>


    </header>
  )
}

export default Header;