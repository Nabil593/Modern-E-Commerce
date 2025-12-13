import React, { useEffect, useRef } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import TagLine from './components/TagLine';
import ShopSection from './components/ShopSection';
import Mission from './components/Mission';
import DesignCTA from './components/DesignCTA';
import Footer from './components/Footer';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

const App = () => {

  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    const smoother = ScrollSmoother.create({
      content: "#smooth-content",
      smooth: 2,
      effects: true
    })

    return () => {
      smoother && smoother.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }

  },[])

  return (
    <div id='smooth-content' ref={contentRef} className='min-h-screen bg-white antialiased'>
      <Header />
      <Hero />
      <TagLine />
      <ShopSection />
      <Mission />
      <DesignCTA />
      <Footer />
    </div>
  )
}

export default App;