import React, { useEffect, useRef } from 'react'
import svg from '../assets/svg/arrow.svg'
import { BsArrowDown } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';



const Hero = () => {

    const shopButtonRef = useRef();
    const containerRef = useRef();


  useEffect(() => {
    const btn = shopButtonRef.current;
    const container = containerRef.current;
    if (!btn || !container) return;

    let rafId = null;
    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    const maxOffset = 180;
    const ease = 0.1; // smaller = smoother/slower

    const animate = () => {
      // Lerp for smooth motion
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      btn.style.transform = `translate(${currentX}px, ${currentY}px)`;

      rafId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();

      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);

      const nx = relX / (rect.width / 2);
      const ny = relY / (rect.height / 2);

      targetX = Math.max(-1, Math.min(1, nx)) * maxOffset;
      targetY = Math.max(-1, Math.min(1, ny)) * maxOffset;

      if (!rafId) rafId = requestAnimationFrame(animate);
    };

    container.addEventListener("mousemove", onMouseMove);

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  



  return (
    <section className='bg-white py-6'>
        <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4'>

        {/* LEFT COLS */}
        <div className='flex flex-col space-y-4'>

            <div className='bg-zinc-900 h-[480px] flex flex-col justify-between p-8 rounded-3xl shadow-sm'>
                <h2 className='text-6xl uppercase anton text-white shadow-sm'>
                    FOR <img src={svg} alt="arrow" className='inline-block w-40 ml-5'/>
                    <br/>
                    EVERYONE
                    <br/>
                    BUT
                    <br/>
                    NOT ANYONE
                </h2>
                <p className='text-zinc-300'>
                    We establish personal relationships with our boutiques, to make
                    sure each is vetted for a stress-free shopping experience
                </p>
            </div>


            <div className='grid grid-cols-2 gap-4'>
                {/* 1 */}
                <div className='relative h-[230px] bg-zinc-300 rounded-3xl p-3 overflow-clip'>
                    <div className='absolute inset-0 bg-[url(/images/port-1.png)] bg-cover bg-top'>
                    <span className='absolute bottom-3 left-4 bg-zinc-900/70 backdrop-blur-sm text-white font-semibold tracking-wide z-20 px-2 py-1 rounded-full'>
                        #RIPSTOP
                    </span>
                    </div>
                </div>
                {/* 2 */}

                <div className='relative h-[230px] bg-[#586D64] rounded-3xl  p-3 overflow-clip'>
                    <div className='absolute inset-0 bg-[url(/images/port-2.png)] bg-cover bg-top'>
                    <span className='absolute bottom-3 left-4 bg-zinc-900/70 backdrop-blur-sm text-white font-semibold tracking-wide  z-20 px-2 py-2 rounded-full'>
                        #INSULATED
                    </span>
                    </div>
                </div>
            </div>
        </div>


        {/* RIGHT COLS */}
        <div ref={containerRef} className='relative hidden lg:flex lg:items-center lg:justify-center bg-zinc-300 rounded-3xl overflow-hidden'>

            <div className='w-full h-full flex- items-center justify-center text-zinc-500'>
                Image Holder
            </div>

            <div ref={shopButtonRef} className='absolute bottom-80 right-45 size-20 flex items-center justify-center text-center bg-zinc-800/80 backdrop-blur-md text-zinc-50 uppercase rounded-full border border-zinc-100'>
            SHOP NOW
            </div>

            {/* BUTTON OVERLAYING IMAGE */}
            <div className='absolute bottom-4 right-4 flex space-x-3'>

                {/* 1 */}
                <button className='group bg-white/90 backdrop-blur-xs cursor-pointer flex items-center justify-center gap-10 text-zinc-900 text-xs uppercase pl-4 pr-2 py-1 rounded-full hover:bg-zinc-900 hover:text-zinc-50 transition-all duration-200 ease-in font-semibold '>
                Learn More
                <span className='size-8 bg-zinc-800 group-hover:bg-zinc-100 rounded-full flex items-center justify-center'>
                    <BsArrowDown size={16} className='text-zinc-50 group-hover:text-black hover:font-bold'/>
                </span>
                </button>

                {/* 2 */}

                <button className='border border-zinc-50 group backdrop-blur-xs cursor-pointer flex items-center justify-center gap-10 text-zinc-900 text-xs uppercase pl-4 pr-2 py-1 rounded-full hover:bg-zinc-900 hover:text-zinc-50 transition-all duration-200 ease-in font-semibold '>
                Contact US
                <span className='size-8 bg-zinc-800 group-hover:bg-zinc-100 rounded-full flex items-center justify-center'>
                    <FiMail size={16} className='text-zinc-50 group-hover:text-black'/>
                </span>
                </button>
            
            </div>
        </div>

        {/* MOBILE BUTTON */}
        <div className='w-full md:hidden bg-[#586b3f] text-white p-4 flex items-center justify-center rounded-full font-semibold uppercase'>
            SHOP NOW
        </div>

        </div>
    </section>
  )
}

export default Hero;