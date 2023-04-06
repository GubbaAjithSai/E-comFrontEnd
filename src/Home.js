import React from 'react'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Exclusive from './components/Exclusive'
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Exclusive />
      <Services/>
    </div>
  )
};
export default Home