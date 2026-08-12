import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../../components/ui/Button';
import departments from '../../data/departments';

const DepartmentDetails = () => {
  const { key } = useParams();
  const { t, i18n } = useTranslation('departments');
  const isArabic = i18n.language === 'ar';

  const item = departments.find((dept) => dept.key === key);

  if (!item) {
    return (
      <section className="py-5">
        <div className="container text-center py-5">
          <h2 className="fw-bold mb-4" style={{ color: '#0b1f52' }}>
            {t('details.notFound')}
          </h2>
          <Button to="/departments" variant="primary">
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
            to="/departments"
            className="text-decoration-none fw-semibold"
            style={{ color: '#2563eb' }}
          >
            <i className={`bi ${isArabic ? 'bi-arrow-right' : 'bi-arrow-left'} me-2`} aria-hidden="true" />
            {t('departmentsSection.allDepartments')}
          </Link>
        </div>

        <article className="mx-auto" style={{ maxWidth: '800px' }}>
          <div
            className={`d-flex align-items-center justify-content-center mb-4 ${isArabic ? 'ms-auto' : 'me-auto'}`}
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              backgroundColor: '#e8f0ff',
            }}
          >
            <i
              className={`bi ${item.icon}`}
              style={{ color: '#2563eb', fontSize: '2rem' }}
              aria-hidden="true"
            />
          </div>

          <h1
            className={`fw-bold mb-4 ${isArabic ? 'text-end' : 'text-start'}`}
            style={{ color: '#0b1f52', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            {t(`departmentsList.${key}.name`)}
          </h1>

          <p
            className={`mb-0 ${isArabic ? 'text-end' : 'text-start'}`}
            style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 2 }}
          >
            {t(`departmentsList.${key}.description`)}
          </p>
        </article>
      </div>
    </section>
  );
};

export default DepartmentDetails;
