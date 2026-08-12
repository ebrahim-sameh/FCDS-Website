import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import i18n from './i18n';
import Header from './components/layout/Header/Header.jsx';
import Footer from './components/layout/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import LoadingState from './components/ui/LoadingState.jsx';

const News = lazy(() => import('./pages/News/News.jsx'));
const NewsDetails = lazy(() => import('./pages/News/NewsDetails.jsx'));
const About = lazy(() => import('./pages/About/About.jsx'));
const DeanMessageSection = lazy(() => import('./pages/DeanMessage/DeanMessageSection.jsx'));
const Services = lazy(() => import('./pages/Services/Services.jsx'));
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'));
const Departments = lazy(() => import('./pages/Departments/Departments.jsx'));
const DepartmentDetails = lazy(() => import('./pages/Departments/DepartmentDetails.jsx'));
const Programs = lazy(() => import('./pages/Programs/Programs.jsx'));
const Faculty = lazy(() => import('./pages/Faculty/Faculty.jsx'));
const FacultyDetails = lazy(() => import('./pages/Faculty/FacultyDetails.jsx'));
const Events = lazy(() => import('./pages/Events/Events.jsx'));
const Announcements = lazy(() => import('./pages/Announcements/Announcements.jsx'));

function App() {
  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'ar';
    if (i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
    document.documentElement.lang = savedLang;
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1">
        <Suspense
          fallback={
            <LoadingState message={i18n.t('states.loading', { ns: 'common' })} />
          }
        >
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
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
