import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import i18n from './i18n';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

import Home from './pages/Home';
import NewsDetails from './pages/News/NewsDetails';
import NewsSection from './pages/News/NewsSection';

import AboutSection from './pages/About/AboutSection';
import DeanMessageSection from './pages/DeanMessage/DeanMessageSection';

function App() {
  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'ar';

    i18n.changeLanguage(savedLang);

    document.documentElement.lang = savedLang;
    document.documentElement.dir =
      savedLang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">

      <Header />

      <div className="flex-grow-1">
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* About */}
          <Route
            path="/about"
            element={<AboutSection />}
          />

          {/* Dean Message */}
          <Route
            path="/dean-message"
            element={<DeanMessageSection />}
          />

          {/* News */}
          <Route
            path="/news"
            element={<NewsSection />}
          />

          {/* News Details */}
          <Route
            path="/news/:key"
            element={<NewsDetails />}
          />

        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;