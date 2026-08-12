import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ProgramCard = ({ item }) => {
  const { t, i18n } = useTranslation(['programs', 'departments'])
  const isArabic = i18n.language === 'ar'

  return (
    <article
      className={`h-100 p-4 rounded-4 d-flex flex-column ${isArabic ? 'text-end' : 'text-start'}`}
      style={{
        backgroundColor: '#fff',
        border: '1px solid #e2e8f0',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 10px 24px rgba(15, 23, 42, 0.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div className={`d-flex align-items-center gap-2 mb-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
        <span
          className="badge rounded-pill px-3 py-2"
          style={{ backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '0.8rem' }}
        >
          {t(`degree.${item.degree}`)}
        </span>
        {item.creditHours && (
          <span className="text-muted" style={{ fontSize: '0.8rem' }}>
            {item.creditHours} {t('meta.creditHours')}
          </span>
        )}
      </div>
      <h3 className="fw-bold mb-2" style={{ color: '#0b1f52', fontSize: '1.15rem' }}>
        {t(`items.${item.key}.name`)}
      </h3>
      <p className="mb-3 flex-grow-1" style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.7 }}>
        {t(`items.${item.key}.summary`)}
      </p>
      <Link
        to={`/departments/${item.department}`}
        className="fw-semibold text-decoration-none"
        style={{ color: '#2563eb', fontSize: '0.9rem' }}
      >
        {t('viewDepartment')}
        <i className={`bi ${isArabic ? 'bi-arrow-left' : 'bi-arrow-right'} ms-2`} aria-hidden="true" />
      </Link>
    </article>
  )
}

export default ProgramCard