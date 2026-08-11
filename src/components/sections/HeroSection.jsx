import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t, i18n } = useTranslation('home');
  const isArabic = i18n.language === 'ar';

  const stats = [
    { key: 'faculty', value: '+50' },
    { key: 'founded', value: '2021' },
    { key: 'students', value: '+2000' },
    { key: 'departments', value: '5' },
  ];

  return (
    <section>

      {/* الخلفية + المحتوى */}
      <div
        className="position-relative d-flex align-items-end"
        style={{ minHeight: '520px' }}
      >

        {/* صورة الخلفية */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: "url('/imgs/Computer and Data Science.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* طبقة التعتيم الكحلي */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              'linear-gradient(90deg, rgba(11,31,82,0.75) 0%, rgba(11,31,82,0.55) 45%, rgba(11,31,82,0.85) 100%)',
          }}
        ></div>

        {/* المحتوى */}
        <div className="container-fluid px-4 px-lg-5 position-relative py-5">
          <div className="row">

            <div
              className={`col-12 col-lg-7 ${
                isArabic
                  ? 'ms-auto text-end'
                  : 'me-auto text-start'
              }`}
            >

              <p
                className="fw-semibold mb-2"
                style={{
                  color: '#f59e0b',
                  fontSize: '0.95rem',
                }}
              >
                {t('hero.location')}
              </p>

              <h1
                className="text-white fw-bold mb-3"
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                  lineHeight: 1.3,
                }}
              >
                {t('hero.title')}
              </h1>

              <p
                className="text-white-50 mb-4"
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  maxWidth: '560px',
                }}
              >
                {t('hero.description')}
              </p>

              <div
                className={`d-flex flex-wrap gap-3 ${
                  isArabic
                    ? 'justify-content-end'
                    : 'justify-content-start'
                }`}
              >
                <Link
                  to="/admissions"
                  className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"
                >
                  {t('hero.admissionsBtn')}
                </Link>

                <Link
                  to="/departments"
                  className="btn btn-warning rounded-pill px-4 py-2 fw-semibold d-flex align-items-center gap-2"
                >
                  {t('hero.exploreBtn')}

                  <i
                    className={`bi ${
                      isArabic
                        ? 'bi-arrow-left'
                        : 'bi-arrow-right'
                    }`}
                  ></i>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* شريط الإحصائيات */}
      <div
        style={{ backgroundColor: '#0b1f52' }}
        className="py-4"
      >
        <div className="container-fluid px-4 px-lg-5">
          <div className="row text-center g-4">

            {stats.map((stat) => (
              <div
                key={stat.key}
                className="col-6 col-lg-3"
              >
                <div
                  className="fw-bold mb-1"
                  style={{
                    color: '#f59e0b',
                    fontSize: '2rem',
                  }}
                >
                  {stat.value}
                </div>

                <div
                  style={{
                    color: '#c3cbe0',
                    fontSize: '0.9rem',
                  }}
                >
                  {t(`stats.${stat.key}`)}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;