import React from 'react';
import { useTranslation } from 'react-i18next';

const AnnouncementCard = ({ item }) => {
  const { t, i18n } = useTranslation('announcements');
  const isArabic = i18n.language === 'ar';

  return (
    <article
      className={`h-100 p-4 rounded-4 ${isArabic ? 'text-end' : 'text-start'}`}
      style={{
        backgroundColor: '#fff',
        border: '1px solid #e2e8f0',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 10px 24px rgba(15, 23, 42, 0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <span
        className="badge rounded-pill mb-3 px-3 py-2"
        style={{ backgroundColor: '#fff7ed', color: '#f59e0b', fontSize: '0.8rem' }}
      >
        {t(`categories.${item.category}`)}
      </span>

      <div
        className={`d-flex align-items-center gap-2 mb-2 ${isArabic ? 'justify-content-end' : 'justify-content-start'}`}
        style={{ color: '#64748b', fontSize: '0.85rem' }}
      >
        <i className="bi bi-calendar3" aria-hidden="true" />
        <span>{item.date}</span>
      </div>

      <h3 className="fw-bold mb-2" style={{ color: '#0b1f52', fontSize: '1.15rem' }}>
        {t(`items.${item.key}.title`)}
      </h3>

      <p className="mb-0" style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.7 }}>
        {t(`items.${item.key}.summary`)}
      </p>
    </article>
  );
};

export default AnnouncementCard;
