import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { asset } from '../../utils/asset';

const About = () => {
  const { t, i18n } = useTranslation('about');
  const isArabic = i18n.language === 'ar';
  const textAlign = isArabic ? 'text-end' : 'text-start';

  const stats = [
    { key: 'students', value: '+2000', icon: 'bi-mortarboard' },
    { key: 'programs', value: '5', icon: 'bi-journal-bookmark' },
    { key: 'faculty', value: '+50', icon: 'bi-person-workspace' },
    { key: 'labs', value: '12', icon: 'bi-hdd-network' },
  ];
  const values = [
    { key: 'excellence', icon: 'bi-award', color: '#2563eb', bg: '#eaf1ff' },
    { key: 'innovation', icon: 'bi-lightbulb', color: '#f59e0b', bg: '#fdf3e2' },
    { key: 'integrity', icon: 'bi-shield-check', color: '#059669', bg: '#e7f6f2' },
    { key: 'collaboration', icon: 'bi-people', color: '#7c3aed', bg: '#f1eaff' },
  ];

return(
    <div>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(135deg, #0b1f52 0%, #123a8a 100%)' }}
        className="text-white py-5">
            <div className="container py-4 py-lg-5 text-center">
                <div
                className="d-flex align-items-center justify-content-center gap-2 mb-3"
                style={{ fontSize: '0.9rem', color: '#b9c6ea' }}>
                    <Link to="/" className="text-decoration-none" style={{ color: '#b9c6ea' }}>
                    {t('hero.breadcrumbHome')}
                    </Link>
                    <i className={`bi ${isArabic ? 'bi-chevron-left' : 'bi-chevron-right'}`} style={{ fontSize: '0.7rem' }}></i>
                    <span className="text-white fw-semibold">{t('hero.breadcrumbCurrent')}</span>
                </div>
                <h1 className="fw-bold mb-3 mx-auto" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', maxWidth: '900px' }}>
                    {t('hero.title')}
                </h1>
                <p className="mb-0 mx-auto" style={{ color: '#c8d3ee', fontSize: '1.05rem', lineHeight: 1.9, maxWidth: '720px' }}>
                    {t('hero.subtitle')}
                </p>
            </div>
        </section>
        {/* Overview */}
        <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className={`col-12 col-lg-6 ${isArabic ? 'order-lg-2' : 'order-lg-1'}`}>
              <img
                src={asset('imgs/hero.webp')}
                alt={t('overview.imageAlt')}
                className="img-fluid w-100"
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                style={{ borderRadius: '24px', objectFit: 'cover', maxHeight: '420px', boxShadow: '0 12px 30px rgba(15, 23, 42, 0.12)' }}
              />
            </div>
            <div className={`col-12 col-lg-6 ${isArabic ? 'order-lg-1' : 'order-lg-2'} ${textAlign}`}>
              <div className="fw-semibold mb-2" style={{ color: '#f59e0b', fontSize: '0.95rem' }}>
                {t('overview.label')}
              </div>
              <h2 className="fw-bold mb-4" style={{ color: '#0b1f52', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
                {t('overview.title')}
              </h2>
              <p className="mb-3" style={{ color: '#53657d', fontSize: '1rem', lineHeight: 2 }}>
                {t('overview.paragraph1')}
              </p>
              <p className="mb-0" style={{ color: '#53657d', fontSize: '1rem', lineHeight: 2 }}>
                {t('overview.paragraph2')}
              </p>
            </div>
          </div>
        </div>
        </section>
        {/* Stats */}
        <section className="py-5" style={{ backgroundColor: '#0b1f52' }}>
        <div className="container py-2">
          <div className="row g-4 text-center">
            {stats.map((stat) => (
              <div key={stat.key} className="col-6 col-lg-3">
                <i className={`bi ${stat.icon} mb-2 d-block`} style={{ color: '#f59e0b', fontSize: '2rem' }}></i>
                <div className="fw-bold text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
                  {stat.value}
                </div>
                <div style={{ color: '#b9c6ea', fontSize: '0.95rem' }}>{t(`stats.${stat.key}`)}</div>
              </div>
            ))}
          </div>
        </div>
        </section>
        {/* Vision and Mission */}
        <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-4">
            {['vision', 'mission'].map((item, index) => (
              <div key={item} className="col-12 col-lg-6">
                <div
                  className={`h-100 p-4 p-lg-5 ${textAlign}`}
                  style={{ borderRadius: '24px', backgroundColor: index === 0 ? '#eef6ff' : '#fdf6ea', border: '1px solid #e2e8f0' }}
                >
                  <div
                    className={`d-flex align-items-center justify-content-center mb-3 ${isArabic ? 'ms-auto' : 'me-auto'}`}
                    style={{ width: '56px', height: '56px', borderRadius: '18px', backgroundColor: index === 0 ? '#dbe9ff' : '#fae8c8' }}
                  >
                    <i className={`bi ${index === 0 ? 'bi-eye' : 'bi-flag'}`} style={{ color: index === 0 ? '#2563eb' : '#d97706', fontSize: '1.6rem' }}></i>
                  </div>
                  <h3 className="fw-bold mb-3" style={{ color: '#0b1f52', fontSize: '1.6rem' }}>
                    {t(`visionMission.${item}.title`)}
                  </h3>
                  <p className="mb-0" style={{ color: '#53657d', fontSize: '1rem', lineHeight: 2 }}>
                    {t(`visionMission.${item}.text`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
        {/* Values */}
        <section className="py-5" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <div className="fw-semibold mb-2" style={{ color: '#f59e0b', fontSize: '0.95rem' }}>
              {t('values.label')}
            </div>
            <h2 className="fw-bold mb-0" style={{ color: '#0b1f52', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
              {t('values.title')}
            </h2>
          </div>

          <div className="row g-4">
            {values.map((value) => (
              <div key={value.key} className="col-12 col-sm-6 col-lg-3">
                <div className={`h-100 p-4 bg-white ${textAlign}`} style={{ borderRadius: '24px', border: '1px solid #e2e8f0' }}>
                  <div
                    className={`d-flex align-items-center justify-content-center mb-3 ${isArabic ? 'ms-auto' : 'me-auto'}`}
                    style={{ width: '54px', height: '54px', borderRadius: '18px', backgroundColor: value.bg }}
                  >
                    <i className={`bi ${value.icon}`} style={{ color: value.color, fontSize: '1.5rem' }}></i>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#111827', fontSize: '1.15rem' }}>
                    {t(`values.items.${value.key}.title`)}
                  </h5>
                  <p className="mb-0" style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.9 }}>
                    {t(`values.items.${value.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
    </div>
);
};

export default About;