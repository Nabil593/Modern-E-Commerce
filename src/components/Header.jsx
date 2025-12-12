import React, { useState } from 'react'
import { navLinksData } from '../assets/data';
import { FiMenu, FiSearch, FiShoppingCart, FiX } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

const activeLinkClasses = "border-zinc-400 font-bold";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

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
          <div className='text-3xl anton text-zinc-900'>
            PUREMALL
          </div>

          {/* NAVIGATION - Desktop */}
          <div className='hidden md:flex space-x-4 text-sm font-medium text-zinc-600'>
            {navLinksData.map((link) => (
              <a
                key={link.name}
                href='#'
                className={`hover:text-zinc-900 hover:font-bold duration-200 transition-all border border-transparent hover:border-zinc-400 p-2 rounded-full ${
                  link.isActive && activeLinkClasses
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ICONS */}
          <div className='flex items-center space-x-6'>
            <button className='text-zinc-700 hover:text-zinc-900 transition-colors'>
              <FiSearch size={20}/>
            </button>

            <button className='text-zinc-700 hover:text-zinc-900 transition-colors'>
              <FaUserCircle size={20}/>
            </button>

            <button className='text-zinc-700 hover:text-zinc-900 transition-colors relative'>
              <FiShoppingCart size={20}/>
              <span className='absolute -top-1 -right-1 bg-red-500 text-white text-[12px] rounded-full w-4 h-4 flex items-center justify-center'>
                0
              </span>
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className='md:hidden text-zinc-700 hover:text-zinc-900 transition-colors'
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-white border-t border-zinc-200'>
          <div className='flex flex-col p-4 space-y-2'>
            {navLinksData.map((link) => (
              <a
                key={link.name}
                href='#'
                className={`hover:text-zinc-900 hover:font-bold duration-200 transition-all border border-transparent hover:border-zinc-400 p-2 rounded-full ${
                  link.isActive && activeLinkClasses
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header;
