import React from 'react'
import HeroSection from './HeroSection'
import DepartmentsSection from '../Departments/DepartmentsSection'
import DeanMessageSection from '../DeanMessage/DeanMessageSection'
import NewsSection from '../News/NewsSection'
import AboutSection from '../About/AboutSection'
import StatisticsSection from './StatisticsSection'
import QuickLinks from './QuickLinks'
import ServicesPreview from './ServicesPreview'
import ProgramsPreview from './ProgramsPreview'
import EventsPreview from './EventsPreview'
import AnnouncementsPreview from './AnnouncementsPreview'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatisticsSection />
      <QuickLinks />
      <DepartmentsSection />
      <ProgramsPreview />
      <DeanMessageSection />
      <NewsSection />
      <AnnouncementsPreview />
      <ServicesPreview />
      <EventsPreview />
      <AboutSection />
    </div>
  )
}

export default Home
