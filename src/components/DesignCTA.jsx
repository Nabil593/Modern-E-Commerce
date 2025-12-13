import React, { useEffect, useRef, useState } from 'react'
import { BiPlay } from 'react-icons/bi';
import { BsPlay, BsPlayBtn } from 'react-icons/bs';

const DesignCTA = () => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const vid = videoRef.current
        if(!vid) return;

        function handleEnded() {
            setIsPlaying(false)
            try {
                vid.currentTime = 0
            } catch (err) {
                void err
            }
        }
        vid.addEventListener("ended", handleEnded)

        return () => vid.removeEventListener("ended", handleEnded);
    },[]);

    const handlePlayClick = async () => {
        const vid = videoRef.current
        if (!vid) return;

        setIsPlaying(true)
        try {
            vid.currentTime = 0
            vid.muted = true
            await vid.BiPlay()
        } catch (err) {
            setIsPlaying(false)
            console.warn("Video play failed: ", err);
        }
    }



  return (
    <div className='bg-white py-20 text-center'>
        <h2 className='text-6xl anton leading-tight text-zinc-900 tracking-tight mb-12 uppercase'>
            WANT TO DESIGN YOUR OWN? <br/> FIT, WE CAN DO IT
        </h2>

        {/* AD MEDIA CONTAINER */}
        <div className='max-w-7xl mx-auto px-4 aspect-square lg:aspect-[2/1] bg-zinc-300 rounded-3xl overflow-hidden relative'>
        <div className='absolute inset-0 flex items-center justify-center text-zinc-500'>

            {/* VIDEO */}
            <video ref={videoRef} className={`size-fit saturate-120 object-cover w-full h-full ${isPlaying ? "pointer-events-none" : ""}`}>
                <source src="/videos/wedding.mp4" />
                Your browser does not support the video tag.
            </video>

            {/* PLAY BUTTON */}
            {!isPlaying && (
                <div 
                 onClick={handlePlayClick}
                 onKeyDown={(e) => {
                    if(e.key === "Enter" || e.key === " ")
                        handlePlayClick();
                 }}
                 role='button'
                 tabIndex={0}
                 className='size-20 bg-zinc-800/60 backdrop-blur-xs rounded-full absolute flex items-center justify-center border-2 border-white cursor-pointer hover:scale-105 transform transition-all duration-200 ease-in'>
                    <BiPlay size={50} className='text-white ml-1 mt-0.5'/>
                </div>
            )}


        </div>
        </div>

    </div>
  )
}

export default DesignCTA;