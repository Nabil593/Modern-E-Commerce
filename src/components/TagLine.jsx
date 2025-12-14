import React from 'react'
import { BsAsterisk } from 'react-icons/bs';

const TagLine = () => {
  return (
    <div className='bg-white py-25 mt-25'>
        <div className='relative max-w-6xl mx-auto px-4 text-center'>
        <div className='absolute hidden md:block size-20 bg-zinc-300 rounded-full left-80 -top-10 overflow-clip'>
            <div className={`size-full bg-[url(/images/port-3.png)] bg-cover bg-top`}>
            </div>
        </div>

        <div className='text-3xl lg:text-5xl font-extrabold leading-tight text-zinc-900 tracking-tight'>
            Puremall is pioneering for Eleveted Everyday <br/>
            Life, Styles change
            <div className='border w-fit inline-flex items-center border-zinc-600 rounded-full pr-4 pl-2
             pb-1'>
                <BsAsterisk size={45} className='inline-block'/>With season
            </div>
            <div>, united <br/> by the lebarating essence of travel-inspired lightheartedness</div>
        </div>

        {/* image */}
        <div className='absolute overflow-clip size-20 hidden md:block bg-zinc-300 rounded-full left-70 -bottom-4'>

            <div className={`size-full bg-[url(/images/port-5.png)] bg-cover bg-top`}>
            </div>
        </div>

        <div className='absolute overflow-clip size-20 hidden md:block bg-zinc-300 rounded-full right-70 -bottom-4'>

            <div className={`size-full bg-[url(/images/port-4.png)] bg-cover bg-top`}>
            </div>
        </div>

    </div>
    </div>
  )
}

export default TagLine;