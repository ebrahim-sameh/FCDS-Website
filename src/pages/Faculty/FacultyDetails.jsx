import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../../components/ui/Button';
import faculty from '../../data/faculty';

const FacultyDetails = () => {
  const { key } = useParams();
  const { t, i18n } = useTranslation(['faculty', 'departments']);
  const isArabic = i18n.language === 'ar';

  const item = faculty.find((member) => member.key === key);

  if (!item) {
    return (
      <section className="py-5">
        <div className="container text-center py-5">
          <h2 className="fw-bold mb-4" style={{ color: '#0b1f52' }}>
            {t('details.notFound')}
          </h2>
          <Button to="/faculty" variant="primary">
            {t('details.back')}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        <div className={`mb-4 ${isArabic ? 'text-end' : 'text-start'}`}>
          <Link
            to="/faculty"
            className="text-decoration-none fw-semibold"
            style={{ color: '#2563eb' }}
          >
            <i className={`bi ${isArabic ? 'bi-arrow-right' : 'bi-arrow-left'} me-2`} aria-hidden="true" />
            {t('details.back')}
          </Link>
        </div>

        <article className="mx-auto" style={{ maxWidth: '800px' }}>
          <div
            className={`d-flex align-items-center justify-content-center mb-4 ${isArabic ? 'ms-auto' : 'me-auto'}`}
            style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              backgroundColor: '#e8f0ff',
            }}
          >
            <i className="bi bi-person-fill" style={{ color: '#2563eb', fontSize: '2.5rem' }} aria-hidden="true" />
          </div>

          <h1
            className={`fw-bold mb-2 ${isArabic ? 'text-end' : 'text-start'}`}
            style={{ color: '#0b1f52', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            {t(`items.${key}.name`)}
          </h1>

          <p
            className={`mb-4 ${isArabic ? 'text-end' : 'text-start'}`}
            style={{ color: '#f59e0b', fontWeight: 600 }}
          >
            {t(`roles.${item.role}`)}
          </p>

          <p
            className={`mb-4 ${isArabic ? 'text-end' : 'text-start'}`}
            style={{ color: '#64748b', fontSize: '0.95rem' }}
          >
            <span className="fw-semibold" style={{ color: '#0b1f52' }}>
              {t('details.department')}:
            </span>{' '}
            {t(`departmentsList.${item.department}.name`, { ns: 'departments' })}
          </p>

          <p
            className={`mb-0 ${isArabic ? 'text-end' : 'text-start'}`}
            style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 2 }}
          >
            {t(`items.${key}.bio`)}
          </p>
        </article>
      </div>
    </section>
  );
};

export default FacultyDetails;
