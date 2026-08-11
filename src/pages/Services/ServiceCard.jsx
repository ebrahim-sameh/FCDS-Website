import React from 'react';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ item }) => {
  const { t, i18n } = useTranslation('services');
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
      <div
        className="d-flex align-items-center justify-content-center mb-3"
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          backgroundColor: '#e8f0ff',
        }}
      >
        <i
          className={`bi ${item.icon}`}
          style={{ color: '#2563eb', fontSize: '1.6rem' }}
          aria-hidden="true"
        />
      </div>

      <h3 className="fw-bold mb-2" style={{ color: '#0b1f52', fontSize: '1.15rem' }}>
        {t(`items.${item.key}.title`)}
      </h3>

      <p className="mb-0" style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.7 }}>
        {t(`items.${item.key}.description`)}
      </p>
    </article>
  );
};

export default ServiceCard;
