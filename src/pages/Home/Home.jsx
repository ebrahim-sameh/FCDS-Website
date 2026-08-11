import React from 'react'
import HeroSection from './HeroSection'
import DepartmentsSection from '../Departments/DepartmentsSection'
import DeanMessageSection from '../DeanMessage/DeanMessageSection'
import NewsSection from '../News/NewsSection'
import AboutSection from '../About/AboutSection'
import StatisticsSection from './StatisticsSection'

const Home = () => {
  return (
    <div>
          <HeroSection />
          <StatisticsSection />
          <DepartmentsSection />
          <DeanMessageSection />
          <NewsSection />
          <AboutSection />
    </div>
  )
}

export default Home
