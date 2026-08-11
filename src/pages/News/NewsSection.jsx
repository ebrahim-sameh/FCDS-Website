import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import newsData from './news';

const NewsSection = () => {
  const { t, i18n } = useTranslation('news');
  const isArabic = i18n.language === 'ar';
  const news = newsData.slice(0, 3);

  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5">
          <SectionTitle
            eyebrow={t('newsSection.label')}
            title={t('newsSection.title')}
            align="start"
          />

          <Link
            to="/news"
            className="text-decoration-none fw-semibold"
            style={{ color: '#2563eb' }}
          >
            {t('newsSection.allNews')}
            <i
              className={`bi ${
                isArabic ? 'bi-arrow-left ms-2' : 'bi-arrow-right ms-2'
              }`}
            ></i>
          </Link>
        </div>

        <div className="row g-4">
          {news.map((item) => (
            <div key={item.key} className="col-12 col-md-6 col-lg-4">
              <Link
                to={`/news/${item.key}`}
                className="text-decoration-none text-dark"
              >
                <article
                  className="h-100 overflow-hidden"
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '24px',
                    backgroundColor: '#fff',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow =
                      '0 12px 25px rgba(15, 23, 42, 0.10)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: '245px' }}
                  >
                    <img
                      src={item.image}
                      alt={t(`news.${item.key}.title`)}
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />

                    <span
                      className="position-absolute top-0 end-0 m-3 px-3 py-2 bg-white rounded-pill fw-semibold"
                      style={{ color: '#2563eb', fontSize: '0.8rem' }}
                    >
                      {t(`news.types.${item.type}`)}
                    </span>
                  </div>

                  <div className={`p-4 ${isArabic ? 'text-end' : 'text-start'}`}>
                    <div
                      className={`d-flex align-items-center gap-2 mb-3 ${
                        isArabic ? 'justify-content-end' : 'justify-content-start'
                      }`}
                      style={{ color: '#64748b', fontSize: '0.8rem' }}
                    >
                      <i className="bi bi-calendar3"></i>
                      <span>{t(`news.${item.key}.date`)}</span>
                    </div>

                    <h5
                      className="fw-bold mb-3"
                      style={{
                        color: '#111827',
                        fontSize: '1.15rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {t(`news.${item.key}.title`)}
                    </h5>

                    <p
                      className="mb-0"
                      style={{
                        color: '#64748b',
                        fontSize: '0.9rem',
                        lineHeight: 1.8,
                      }}
                    >
                      {t(`news.${item.key}.description`)}
                    </p>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
