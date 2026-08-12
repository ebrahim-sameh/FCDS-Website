import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/ui/Button';
import { asset } from '../../utils/asset';

const HeroSection = () => {
  const { t, i18n } = useTranslation('home');
  const isArabic = i18n.language === 'ar';


  return (
    <section>

      {/* الخلفية + المحتوى */}
      <div
        className="position-relative d-flex align-items-end"
        style={{ minHeight: '520px', contain: 'layout paint' }}
      >

        {/* صورة الخلفية */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url('${asset('imgs/Computer and Data Science.jpg')}')`,
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
                <Button to="/admissions" variant="outline">
                  {t('hero.admissionsBtn')}
                </Button>

                <Button to="/departments" variant="primary" icon={<i className={`bi ${isArabic ? 'bi-arrow-left' : 'bi-arrow-right'}`}></i>}>
                  {t('hero.exploreBtn')}
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;