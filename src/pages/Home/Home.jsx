import React from 'react'
import HeroSection from './HeroSection'
import DepartmentsSection from '../Departments/DepartmentsSection'
import DeanMessageSection from '../DeanMessage/DeanMessageSection'
import NewsSection from '../News/NewsSection'
import AboutSection from '../About/AboutSection'
import StatisticsSection from './StatisticsSection'
import QuickLinks from './QuickLinks'
import ServicesPreview from './ServicesPreview'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatisticsSection />
      <QuickLinks />
      <DepartmentsSection />
      <DeanMessageSection />
      <NewsSection />
      <ServicesPreview />
      <AboutSection />
    </div>
  )
}

export default Home
