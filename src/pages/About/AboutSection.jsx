import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation('about');

  const features = [
    {
      key: 'accreditedPrograms',
      icon: 'bi-mortarboard',
    },
    {
      key: 'modernLabs',
      icon: 'bi-flask',
    },
    {
      key: 'excellentTeaching',
      icon: 'bi-people',
    },
    {
      key: 'employmentOpportunities',
      icon: 'bi-briefcase',
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: '#eef6ff',
      }}
    >
      <div className="container py-4 py-lg-5">

        {/* Section Header */}
        <div className="text-center mb-5">

          <div
            className="fw-semibold mb-2"
            style={{
              color: '#f59e0b',
              fontSize: '0.95rem',
            }}
          >
            {t('whyFCDS.label')}
          </div>

          <h2
            className="fw-bold mb-0"
            style={{
              color: '#111827',
              fontSize: 'clamp(2rem, 4vw, 2.6rem)',
            }}
          >
            {t('whyFCDS.title')}
          </h2>

        </div>

        {/* Features */}
        <div className="row g-4 text-center">

          {features.map((feature) => (
            <div
              key={feature.key}
              className="col-12 col-sm-6 col-lg-3"
            >
              <div className="px-3">

                {/* Icon */}
                <div
                  className="mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    backgroundColor: '#e8f0ff',
                  }}
                >
                  <i
                    className={`bi ${feature.icon}`}
                    style={{
                      color: '#2563eb',
                      fontSize: '1.8rem',
                    }}
                  />
                </div>

                {/* Title */}
                <h5
                  className="fw-bold mb-2"
                  style={{
                    color: '#111827',
                    fontSize: '1.15rem',
                  }}
                >
                  {t(`whyFCDS.features.${feature.key}.title`)}
                </h5>

                {/* Description */}
                <p
                  className="mb-0"
                  style={{
                    color: '#64748b',
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                  }}
                >
                  {t(`whyFCDS.features.${feature.key}.description`)}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AboutSection;