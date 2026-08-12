import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../../ui/Button';
import logo from '../../../assets/au-logo.svg';

const Header = () => {
  const { t, i18n } = useTranslation('common');
  const isArabic = i18n.language === 'ar';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', newLang);
  };

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'departments', path: '/departments' },
    { key: 'programs', path: '/programs' },
    { key: 'news', path: '/news' },
    { key: 'announcements', path: '/announcements' },
    { key: 'faculty', path: '/faculty' },
    { key: 'services', path: '/services' },
    { key: 'events', path: '/events' },
    { key: 'contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="border-bottom bg-white sticky-top">
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center justify-content-between py-2">

          <Link
            to="/"
            className="d-flex align-items-center gap-2 text-decoration-none"
            aria-label={t('nav.home')}
          >
            <img
              src={logo}
              alt=""
              className="header-logo"
              width={150}
              height={50}
            />
          </Link>

          {/* روابط التنقل - Desktop */}
          <nav className="d-none d-xl-flex align-items-center gap-3 flex-wrap justify-content-center">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `text-decoration-none fw-medium ${
                    isActive
                      ? 'text-primary border-bottom border-2 border-warning pb-1'
                      : 'text-dark'
                  }`
                }
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </nav>

          {/* أزرار Desktop */}
          <div className="d-none d-xl-flex align-items-center gap-3">
            <Button variant="outlineDark" onClick={toggleLanguage} aria-label="Toggle language">
              <span
                className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                style={{ width: 20, height: 20, fontSize: '0.7rem' }}
              >
                {isArabic ? 'ع' : 'E'}
              </span>
              <span className="fw-semibold" style={{ fontSize: '0.8rem' }}>
                {isArabic ? 'EN' : 'AR'}
              </span>
            </Button>

            <Button
              to="/admissions"
              variant="primary"
              icon={<i className="bi bi-arrow-up" aria-hidden="true"></i>}
            >
              {t('buttons.applyNow')}
            </Button>
          </div>

          {/* زرار الهامبرجر - موبايل/تابلت فقط */}
          <button
            className="btn d-xl-none border-0"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <i className="bi bi-list fs-2"></i>
          </button>

        </div>
      </div>

      {/* ====== Offcanvas Menu (موبايل) ====== */}
      <div
        className={`offcanvas ${isArabic ? 'offcanvas-end' : 'offcanvas-start'} ${
          isMenuOpen ? 'show' : ''
        }`}
        tabIndex="-1"
        style={{ visibility: isMenuOpen ? 'visible' : 'hidden' }}
      >
        <div className="offcanvas-header border-bottom">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-decoration-none"
            aria-label={t('nav.home')}
          >
            <img
              src={logo}
              alt=""
              className="header-logo-sm"
              width={120}
              height={40}
            />
          </Link>
          <button
            type="button"
            className="btn-close"
            onClick={closeMenu}
            aria-label={isArabic ? 'إغلاق' : 'Close'}
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column">
          <nav className="d-flex flex-column gap-1 mb-4">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-decoration-none fw-medium py-2 px-2 rounded ${
                    isActive ? 'bg-light text-primary' : 'text-dark'
                  }`
                }
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </nav>

          <div className="d-flex flex-column gap-3 mt-auto">
            <Button
              variant="outlineDark"
              onClick={toggleLanguage}
              className="justify-content-center"
            >
              <span
                className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                style={{ width: 20, height: 20, fontSize: '0.7rem' }}
              >
                {isArabic ? 'ع' : 'E'}
              </span>
              <span className="fw-semibold" style={{ fontSize: '0.8rem' }}>
                {isArabic ? 'EN' : 'AR'}
              </span>
            </Button>

            <Button
              to="/admissions"
              variant="primary"
              icon={<i className="bi bi-arrow-up" aria-hidden="true"></i>}
              className="justify-content-center"
              onClick={closeMenu}
            >
              {t('buttons.applyNow')}
            </Button>
          </div>
        </div>
      </div>

      {/* خلفية معتمة عند فتح المنيو */}
      {isMenuOpen && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;