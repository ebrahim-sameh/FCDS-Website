import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation('common');
  const isArabic = i18n.language === 'ar';
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'departments', path: '/departments' },
    { key: 'news', path: '/news' },
    { key: 'contact', path: '/contact' },
  ];

  const departments = [
    { key: 'businessAnalytics', path: '/departments/business-analytics' },
    { key: 'intelligentSystems', path: '/departments/intelligent-systems' },
    { key: 'mediaAnalytics', path: '/departments/media-analytics' },
    { key: 'healthInformatics', path: '/departments/health-informatics' },
    { key: 'cyberSecurity', path: '/departments/cyber-security' },
  ];

  const socialLinks = [
    { icon: 'bi-send', url: '#', label: 'Telegram' },
    { icon: 'bi-chat-dots', url: '#', label: 'Chat' },
    { icon: 'bi-at', url: 'mailto:fcds-dean@alexu.edu.eg', label: 'Email' },
    { icon: 'bi-globe', url: '#', label: 'Website' },
  ];

  return (
    <footer style={{ backgroundColor: '#0b1f52' }} className="text-white pt-5">
      <div className="container-fluid px-4 px-lg-5">
        <div className="row g-4 pb-4">

          {/* عمود الكلية + الوصف + السوشيال */}
          <div className="col-12 col-lg-3 order-1 order-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3 justify-content-lg-end">
              <div
                className="rounded-circle bg-white d-flex align-items-center justify-content-center fw-bold flex-shrink-0"
                style={{ width: 44, height: 44, fontSize: '1.1rem', color: '#0b1f52' }}
              >
                {isArabic ? 'ح' : 'C'}
              </div>
              <div className={isArabic ? 'text-end' : 'text-start'}>
                <div className="fw-semibold" style={{ fontSize: '0.95rem' }}>
                  {t('college.name')}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#a9b4d0' }}>
                  {t('college.university')}
                </div>
              </div>
            </div>

            <p
              className={`mb-3 ${isArabic ? 'text-end' : 'text-start'}`}
              style={{ fontSize: '0.85rem', color: '#c3cbe0', lineHeight: 1.8 }}
            >
              {t('college.description')}
            </p>

            <div className="d-flex gap-2 justify-content-lg-end">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  aria-label={social.label}
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{
                    width: 38,
                    height: 38,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    textDecoration: 'none',
                  }}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* عمود روابط سريعة */}
          <div className="col-6 col-lg-3 order-2 order-lg-3">
            <h6 className={`fw-bold mb-3 ${isArabic ? 'text-end' : 'text-start'}`}>
              {t('footer.quickLinks')}
            </h6>
            <ul className={`list-unstyled ${isArabic ? 'text-end' : 'text-start'}`}>
              {quickLinks.map((link) => (
                <li key={link.key} className="mb-2">
                  <Link
                    to={link.path}
                    className="text-decoration-none"
                    style={{ color: '#c3cbe0', fontSize: '0.9rem' }}
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* عمود الأقسام العلمية */}
          <div className="col-6 col-lg-3 order-3 order-lg-2">
            <h6 className={`fw-bold mb-3 ${isArabic ? 'text-end' : 'text-start'}`}>
              {t('footer.departments')}
            </h6>
            <ul className={`list-unstyled ${isArabic ? 'text-end' : 'text-start'}`}>
              {departments.map((dept) => (
                <li key={dept.key} className="mb-2">
                  <Link
                    to={dept.path}
                    className="text-decoration-none"
                    style={{ color: '#c3cbe0', fontSize: '0.9rem' }}
                  >
                    {t(`departmentsList.${dept.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* عمود تواصل معنا */}
          <div className="col-12 col-lg-3 order-4 order-lg-1">
            <h6 className={`fw-bold mb-3 ${isArabic ? 'text-end' : 'text-start'}`}>
              {t('footer.contactUs')}
            </h6>
            <ul className={`list-unstyled ${isArabic ? 'text-end' : 'text-start'}`}>
              <li className="mb-3 d-flex align-items-center gap-2 justify-content-lg-end">
                <span style={{ fontSize: '0.9rem', color: '#c3cbe0' }}>
                  {t('footer.address')}
                </span>
                <i className="bi bi-geo-alt" style={{ color: '#f59e0b' }}></i>
              </li>
              <li className="mb-3 d-flex align-items-center gap-2 justify-content-lg-end">
                <span style={{ fontSize: '0.9rem', color: '#c3cbe0' }} dir="ltr">
                  +20 3 5420744
                </span>
                <i className="bi bi-telephone" style={{ color: '#f59e0b' }}></i>
              </li>
              <li className="mb-3 d-flex align-items-center gap-2 justify-content-lg-end">
                <span style={{ fontSize: '0.9rem', color: '#c3cbe0' }} dir="ltr">
                  fcds-dean@alexu.edu.eg
                </span>
                <i className="bi bi-envelope" style={{ color: '#f59e0b' }}></i>
              </li>
            </ul>
          </div>

        </div>

        {/* الشريط السفلي */}
        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: '0.85rem' }}
        >
          <span style={{ color: '#a9b4d0' }}>{t('college.university')}</span>
          <span style={{ color: '#a9b4d0' }}>
            {t('footer.copyright', { year: currentYear })}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;