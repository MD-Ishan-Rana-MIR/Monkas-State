import React from 'react'
import Banner from './Banner'
import HeroSection from './HeroSection'
import Update from './Update'
import AboutUs from './AboutUs'
import UniqueHome from './UniqueHome'
import EstateService from './EstateService';
import LogoList from './LogoList LogoList'
import RealEstateSection from './RealEstateSection'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RealEstateSection></RealEstateSection>
      <LogoList></LogoList>
      <EstateService></EstateService>
      <UniqueHome></UniqueHome>
      <AboutUs></AboutUs>
      <Update></Update>
      <HeroSection></HeroSection>
    </div>
  )
}

export default Home
