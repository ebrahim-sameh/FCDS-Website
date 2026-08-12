import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';

const DepartmentsSection = () => {
  const { t, i18n } = useTranslation('departments');

  const isArabic = i18n.language === 'ar';

  const departments = [
    {
      key: 'businessAnalytics',
      icon: 'bi-bar-chart',
      iconColor: '#2563eb',
      iconBg: '#eaf1ff',
    },
    {
      key: 'intelligentSystems',
      icon: 'bi-cpu',
      iconColor: '#7c3aed',
      iconBg: '#f1eaff',
    },
    {
      key: 'mediaAnalytics',
      icon: 'bi-image',
      iconColor: '#ec4899',
      iconBg: '#fceaf4',
    },
    {
      key: 'healthInformatics',
      icon: 'bi-heart-pulse',
      iconColor: '#059669',
      iconBg: '#e7f6f2',
    },
    {
      key: 'cyberSecurity',
      icon: 'bi-shield-check',
      iconColor: '#dc2626',
      iconBg: '#fdeaea',
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">

        {/* Section Header */}
        <SectionTitle
          eyebrow={t('departmentsSection.label')}
          title={t('departmentsSection.title')}
          subtitle={t('departmentsSection.description')}
        />

        {/* Departments Grid */}
        <div className="row g-4">

          {departments.map((department) => (
            <div
              key={department.key}
              className="col-12 col-md-6 col-lg-4"
            >
              <Link
                to={`/departments/${department.key}`}
                className="text-decoration-none text-dark"
              >
                <div
                  className="h-100 p-4"
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '24px',
                    backgroundColor: '#fff',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow =
                      '0 10px 25px rgba(15, 23, 42, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >

                  {/* Icon */}
                  <div
                    className={`d-flex align-items-center justify-content-center mb-3 ${
                      isArabic ? 'ms-auto' : 'me-auto'
                    }`}
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '18px',
                      backgroundColor: department.iconBg,
                    }}
                  >
                    <i
                      className={`bi ${department.icon}`}
                      style={{
                        color: department.iconColor,
                        fontSize: '1.5rem',
                      }}
                    ></i>
                  </div>

                  {/* Title */}
                  <h4
                    className={`fw-bold mb-3 ${
                      isArabic ? 'text-end' : 'text-start'
                    }`}
                    style={{
                      color: '#111827',
                      fontSize: '1.35rem',
                    }}
                  >
                    {t(`departmentsList.${department.key}.name`)}
                  </h4>

                  {/* Description */}
                  <p
                    className={`mb-4 ${
                      isArabic ? 'text-end' : 'text-start'
                    }`}
                    style={{
                      color: '#64748b',
                      fontSize: '0.9rem',
                      lineHeight: 1.9,
                      minHeight: '55px',
                    }}
                  >
                    {t(`departmentsList.${department.key}.description`)}
                  </p>

                  {/* More Link */}
                  <div
                    className={`d-flex align-items-center gap-2 ${
                      isArabic
                        ? 'justify-content-end'
                        : 'justify-content-start'
                    }`}
                    style={{
                      color: '#2563eb',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                    }}
                  >
                    <span>
                      {t('departmentsSection.learnMore')}
                    </span>

                    <i
                      className={`bi ${
                        isArabic
                          ? 'bi-arrow-left'
                          : 'bi-arrow-right'
                      }`}
                    ></i>
                  </div>

                </div>
              </Link>
            </div>
          ))}

          {/* All Departments */}
          <div className="col-12 col-md-6 col-lg-4">
            <Link
              to="/departments"
              className="text-decoration-none"
            >
              <div
                className="h-100 d-flex align-items-center justify-content-center"
                style={{
                  minHeight: '260px',
                  border: '1px dashed #dbe2ea',
                  borderRadius: '24px',
                  backgroundColor: '#fafbfc',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.borderColor = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fafbfc';
                  e.currentTarget.style.borderColor = '#dbe2ea';
                }}
              >
                <div
                  className="d-flex align-items-center gap-2"
                  style={{
                    color: '#2563eb',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                  }}
                >
                  <span>
                    {t('departmentsSection.allDepartments')}
                  </span>

                  <i
                    className={`bi ${
                      isArabic
                        ? 'bi-arrow-left'
                        : 'bi-arrow-right'
                    }`}
                  ></i>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;