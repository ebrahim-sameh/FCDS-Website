import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import i18n from './i18n';
import Header from './components/layout/Header/Header.jsx';
import Footer from './components/layout/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import News from './pages/News/News.jsx';
import NewsDetails from './pages/News/NewsDetails.jsx';
import AboutSection from './pages/About/AboutSection.jsx';
import DeanMessageSection from './pages/DeanMessage/DeanMessageSection.jsx';
import Services from './pages/Services/Services.jsx';
import Contact from './pages/Contact/Contact.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

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
          <Route path="/about" element={<AboutSection />} />
          <Route path="/dean-message" element={<DeanMessageSection />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:key" element={<NewsDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
