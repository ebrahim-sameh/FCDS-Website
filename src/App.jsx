import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import i18n from './i18n';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
<<<<<<< HEAD
import Services from './pages/Services/Services.jsx';
import Contact from './pages/Contact/Contact.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
=======
import News from './pages/News/News';
import NewsDetails from './pages/News/NewsDetails';
import AboutSection from './pages/About/AboutSection';
import DeanMessageSection from './pages/DeanMessage/DeanMessageSection';
>>>>>>> origin/main

function App() {
  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'ar';
    i18n.changeLanguage(savedLang);
    document.documentElement.lang = savedLang;
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
=======
          <Route path="/about" element={<AboutSection />} />
          <Route path="/dean-message" element={<DeanMessageSection />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:key" element={<NewsDetails />} />
>>>>>>> origin/main
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
