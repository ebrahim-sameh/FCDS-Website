import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import i18n from './i18n';
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Home from './pages/Home'

function App() {

  useEffect(() => {
  const savedLang = localStorage.getItem('lang') || 'ar';
  i18n.changeLanguage(savedLang);
  document.documentElement.lang = savedLang;
  document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
}, []);

  return (
    <div className="d-flex flex-column min-vh-100 ">
      <Header />
      <div className="flex-grow-1">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
