import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/ui/Button';
import heroImage from '../../assets/hero.webp';

const HeroSection = () => {
  const { t, i18n } = useTranslation('home');
  const isArabic = i18n.language === 'ar';

  return (
    <section>
      {/* React 19 hoists this into <head> for early LCP discovery */}
      <link rel="preload" as="image" href={heroImage} fetchPriority="high" />

      <div
        className="position-relative d-flex align-items-end overflow-hidden"
        style={{ minHeight: '520px', contain: 'layout paint' }}
      >
        <img
          src={heroImage}
          alt=""
          width={1600}
          height={900}
          fetchPriority="high"
          decoding="async"
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: 'cover' }}
        />

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              'linear-gradient(90deg, rgba(11,31,82,0.75) 0%, rgba(11,31,82,0.55) 45%, rgba(11,31,82,0.85) 100%)',
          }}
        ></div>

        <div className="container-fluid px-4 px-lg-5 position-relative py-5">
          <div className="row">
            <div
              className={`col-12 col-lg-7 ${
                isArabic ? 'ms-auto text-end' : 'me-auto text-start'
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
                  isArabic ? 'justify-content-end' : 'justify-content-start'
                }`}
              >
                <Button to="/admissions" variant="outline">
                  {t('hero.admissionsBtn')}
                </Button>

                <Button
                  to="/departments"
                  variant="primary"
                  icon={
                    <i
                      className={`bi ${isArabic ? 'bi-arrow-left' : 'bi-arrow-right'}`}
                    ></i>
                  }
                >
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
