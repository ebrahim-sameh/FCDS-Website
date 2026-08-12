import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FacultyCard = ({ item }) => {
  const { t, i18n } = useTranslation(['faculty', 'departments']);
  const isArabic = i18n.language === 'ar';

  return (
    <Link to={`/faculty/${item.key}`} className="text-decoration-none text-dark">
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
          className={`d-flex align-items-center justify-content-center mb-3 ${isArabic ? 'ms-auto' : 'me-auto'}`}
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            backgroundColor: '#e8f0ff',
          }}
        >
          <i className="bi bi-person-fill" style={{ color: '#2563eb', fontSize: '1.6rem' }} aria-hidden="true" />
        </div>

        <h3 className="fw-bold mb-1" style={{ color: '#0b1f52', fontSize: '1.15rem' }}>
          {t(`items.${item.key}.name`)}
        </h3>

        <p className="mb-2" style={{ color: '#f59e0b', fontSize: '0.85rem', fontWeight: 600 }}>
          {t(`roles.${item.role}`)}
        </p>

        <p className="mb-0" style={{ color: '#64748b', fontSize: '0.9rem' }}>
          {t(`departmentsList.${item.department}.name`, { ns: 'departments' })}
        </p>
      </article>
    </Link>
  );
};

export default FacultyCard;
