import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../../components/ui/Button';
import departments from '../../data/departments';
import programs from '../../data/programs';
import ProgramCard from '../Programs/ProgramCard';

const DepartmentDetails = () => {
  const { key } = useParams();
  const { t, i18n } = useTranslation('departments');
  const isArabic = i18n.language === 'ar';

  const item = departments.find((dept) => dept.key === key);
  const relatedPrograms = programs.filter((p) => p.department === key);
  const align = isArabic ? 'text-end' : 'text-start';

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
  const highlights = t(`departmentsList.${key}.highlights`, { returnObjects: true });
  const careers = t(`departmentsList.${key}.careers`, { returnObjects: true });

  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        <div className={`mb-4 ${align}`}>
          <Link to="/departments" className="text-decoration-none fw-semibold" style={{ color: '#2563eb' }}>
            <i className={`bi ${isArabic ? 'bi-arrow-right' : 'bi-arrow-left'} me-2`} aria-hidden="true" />
            {t('departmentsSection.allDepartments')}
          </Link>
        </div>
        <div className={`d-flex align-items-center gap-3 mb-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
          <div
            className="d-flex align-items-center justify-content-center flex-shrink-0"
            style={{ width: 72, height: 72, borderRadius: 20, backgroundColor: '#e8f0ff' }}
          >
            <i className={`bi ${item.icon}`} style={{ color: '#2563eb', fontSize: '2rem' }} aria-hidden="true" />
          </div>
          <h1 className={`fw-bold mb-0 ${align}`} style={{ color: '#0b1f52', fontSize: 'clamp(1.8rem, 5vw, 2.6rem)' }}>
            {t(`departmentsList.${key}.name`)}
          </h1>
        </div>
        <p className={`mb-4 ${align}`} style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 2 }}>
          {t(`departmentsList.${key}.description`)}
        </p>
        {relatedPrograms.length > 0 && (
          <div className="row g-3 mb-5">
            <div className="col-12 col-sm-4">
              <div className="p-3 rounded-4 text-center h-100" style={{ backgroundColor: '#f8f9fb' }}>
                <div className="fw-bold" style={{ color: '#2563eb', fontSize: '1.6rem' }}>
                  {relatedPrograms.length}
                </div>
                <div className="text-muted" style={{ fontSize: '0.85rem' }}>{t('meta.programs')}</div>
              </div>
            </div>
          </div>
        )}
        {Array.isArray(highlights) && highlights.length > 0 && (
          <div className="mb-5">
            <h2 className={`fw-bold mb-3 ${align}`} style={{ color: '#0b1f52', fontSize: '1.4rem' }}>
              {t('details.highlightsTitle')}
            </h2>
            <div className="row g-3">
              {highlights.map((point, i) => (
                <div key={i} className="col-12 col-md-6">
                  <div className={`d-flex align-items-start gap-2 ${isArabic ? 'flex-row-reverse text-end' : ''}`}>
                    <i className="bi bi-check-circle-fill flex-shrink-0" style={{ color: '#2563eb', marginTop: 4 }} aria-hidden="true" />
                    <span style={{ color: '#334155' }}>{point}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {relatedPrograms.length > 0 && (
          <div className="mb-5">
            <h2 className={`fw-bold mb-4 ${align}`} style={{ color: '#0b1f52', fontSize: '1.4rem' }}>
              {t('details.programsTitle')}
            </h2>
            <div className="row g-4">
              {relatedPrograms.map((program) => (
                <div key={program.key} className="col-12 col-md-6">
                  <ProgramCard item={program} />
                </div>
              ))}
            </div>
          </div>
        )}
        {Array.isArray(careers) && careers.length > 0 && (
          <div className="p-4 rounded-4" style={{ backgroundColor: '#0b1f52' }}>
            <h2 className={`fw-bold mb-3 ${align}`} style={{ color: '#fff', fontSize: '1.4rem' }}>
              {t('details.careersTitle')}
            </h2>
            <div className={`d-flex flex-wrap gap-2 ${isArabic ? 'justify-content-end' : ''}`}>
              {careers.map((job, i) => (
                <span
                  key={i}
                  className="badge rounded-pill px-3 py-2"
                  style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', fontSize: '0.85rem' }}
                >
                  {job}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default DepartmentDetails;
