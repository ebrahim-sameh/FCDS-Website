import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';

const links = [
  { key: 'departments', icon: 'bi-diagram-3', path: '/departments' },
  { key: 'programs', icon: 'bi-journal-text', path: '/programs' },
  { key: 'news', icon: 'bi-newspaper', path: '/news' },
  { key: 'announcements', icon: 'bi-megaphone', path: '/announcements' },
  { key: 'faculty', icon: 'bi-people', path: '/faculty' },
  { key: 'services', icon: 'bi-grid', path: '/services' },
  { key: 'events', icon: 'bi-calendar-event', path: '/events' },
  { key: 'contact', icon: 'bi-headset', path: '/contact' },
];

const QuickLinks = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-5 container-fluid px-4 px-lg-5">
      <SectionTitle title={t('quickLinks.title')} />
      <div className="row g-4">
        {links.map((link) => (
          <div key={link.key} className="col-6 col-md-4 col-lg-3">
            <Link
              to={link.path}
              className="d-flex flex-column align-items-center text-center p-4 rounded-4 text-decoration-none h-100"
              style={{ backgroundColor: '#f8f9fb', color: '#0b1f52', transition: 'all .2s' }}
            >
              <i className={`bi ${link.icon} mb-3`} style={{ fontSize: '2rem', color: '#f59e0b' }}></i>
              <span className="fw-semibold">{t(`quickLinks.${link.key}`)}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
