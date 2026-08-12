import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import i18n from './i18n';
import Header from './components/layout/Header/Header.jsx';
import Footer from './components/layout/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import News from './pages/News/News.jsx';
import NewsDetails from './pages/News/NewsDetails.jsx';
import About from './pages/About/About.jsx';
import AboutSection from './pages/About/AboutSection.jsx';
import DeanMessageSection from './pages/DeanMessage/DeanMessageSection.jsx';
import Services from './pages/Services/Services.jsx';
import Contact from './pages/Contact/Contact.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Departments from './pages/Departments/Departments.jsx';
import DepartmentDetails from './pages/Departments/DepartmentDetails.jsx';
import Programs from './pages/Programs/Programs.jsx';
import Faculty from './pages/Faculty/Faculty.jsx';
import FacultyDetails from './pages/Faculty/FacultyDetails.jsx';
import Events from './pages/Events/Events.jsx';
import Announcements from './pages/Announcements/Announcements.jsx';
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
          <Route path="/about" element={<About />} />
          <Route path="/dean-message" element={<DeanMessageSection />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:key" element={<DepartmentDetails />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:key" element={<NewsDetails />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/faculty/:key" element={<FacultyDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
