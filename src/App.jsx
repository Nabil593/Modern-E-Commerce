import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import TagLine from './components/TagLine';
import ShopSection from './components/ShopSection';
import Mission from './components/Mission';
import DesignCTA from './components/DesignCTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='min-h-screen bg-white antialiased'>
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