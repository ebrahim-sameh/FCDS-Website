import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import DepartmentsSection from './Departments/DepartmentsSection'
import DeanMessageSection from './DeanMessage/DeanMessageSection'
import NewsSection from './News/NewsSection'
import AboutSection from './About/AboutSection'

const Home = () => {
  return (
    <div>
          <HeroSection />
          <DepartmentsSection />
          <DeanMessageSection />
          <NewsSection />
          <AboutSection />
    </div>
  )
}

export default Home
