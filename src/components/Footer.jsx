import React from 'react'
import { BiSend, BiShoppingBag } from 'react-icons/bi';
import { buyingLinksData, productLinksData, socialLinksData } from '../assets/data';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className='bg-zinc-900 text-white p-16'>

    <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>

        {/* COL01: LOGO & TAGLINE */}
        <div className=''>
            <div className='text-4xl text-zinc-100 anton flex flex-row items-center gap-2 mb-4'>
                <BiShoppingBag size={40} className='text-zinc-50 inline-flex'/> PUREMALL
            </div>
            <p className='text-sm text-zinc-400'>FOR EVERYONE BUT NOT ANYONE</p>
        </div>

        {/* COL02: PRODUCT LINKS */}
        <div className=''>
            {
                productLinksData.map(({title, links}) => (
                    <FooterLinks key={title} title={title} links={links} />
                ))
            }
        </div>

        {/* COL03: BUYING LINKS */}
        <div>
            {
                buyingLinksData.map(({title, links}) => (
                    <FooterLinks key={title} title={title} links={links} />
                ))
            }
        </div>

        {/* COL04: SOCIAL LINKS & JOIN COMMUNITY LINKS */}
        <div>
            {
                socialLinksData.map(({title, links}) => (
                    <FooterLinks key={title} title={title} links={links} />
                ))
            }

         {/* COMMUNITY FORM */}
         <h4 className='text-lg mt-2 font-bold mb-4 uppercase'>
            JOIN OUR COMMUNITY
         </h4>
         <form className='flex border border-zinc-600/60 rounded-full p-1 w-fit'>

         <input type='email' placeholder='Email Address' className='flex-1 px-4 py-2 text-white text-sm outline-none'/>

         <button type='submit' className='bg-zinc-700 aspect-square text-white p-3 cursor-pointer rounded-full hover:bg-zinc-600 ease-in text-sm'>
            <BiSend className='hover:rotate-360 transition-all duration-300'/>
         </button>

         </form>

        </div>
    </div>
    </footer>
  )
}

export default Footer;