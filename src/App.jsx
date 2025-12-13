import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import TagLine from './components/TagLine';
import ShopSection from './components/ShopSection';

const App = () => {
  return (
    <div className='min-h-screen bg-white antialiased'>
      <Header />
      <Hero />
      <TagLine />
      <ShopSection />
    </div>
  )
}

export default App;