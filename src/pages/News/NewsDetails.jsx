import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsDetails = () => {
  const { key } = useParams();
  const { t, i18n } = useTranslation('news');

  const isArabic = i18n.language === 'ar';

  const news = {
    graduation: {
      image: '/imgs/news-1.png',
      type: 'event',
    },

    aiWorkshop: {
      image: '/imgs/news-2.png',
      type: 'event',
    },

    partnership: {
      image: '/imgs/news-3.png',
      type: 'news',
    },

    studentCompetition: {
      image: '/imgs/news-4.png',
      type: 'event',
    },

    dataScienceConference: {
      image: '/imgs/news-5.png',
      type: 'event',
    },

    technologyAgreement: {
      image: '/imgs/news-6.png',
      type: 'news',
    },
  };

  const currentNews = news[key];

  if (!currentNews) {
    return (
      <section className="py-5">
        <div className="container text-center py-5">
          <h2 className="fw-bold mb-4">
            {isArabic ? 'الخبر غير موجود' : 'News Not Found'}
          </h2>

          <Link
            to="/news"
            className="btn btn-warning px-4 py-2"
          >
            {isArabic ? 'العودة إلى الأخبار' : 'Back to News'}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-5">
      <div className="container py-4">

        {/* Back */}
        <div
          className={`mb-4 ${
            isArabic ? 'text-end' : 'text-start'
          }`}
        >
          <Link
            to="/news"
            className="text-decoration-none fw-semibold"
            style={{
              color: '#2563eb',
            }}
          >
            <i
              className={`bi ${
                isArabic
                  ? 'bi-arrow-right me-2'
                  : 'bi-arrow-left me-2'
              }`}
            ></i>

            {isArabic
              ? 'العودة إلى الأخبار'
              : 'Back to News'}
          </Link>
        </div>

        <article className="mx-auto" style={{ maxWidth: '1000px' }}>

          {/* Main Image */}
          <div
            className="overflow-hidden mb-4"
            style={{
              borderRadius: '24px',
              height: '500px',
            }}
          >
            <img
              src={currentNews.image}
              alt={t(`news.${key}.title`)}
              className="w-100 h-100"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Category */}
          <div
            className={`mb-3 ${
              isArabic ? 'text-end' : 'text-start'
            }`}
          >
            <span
              className="badge rounded-pill px-3 py-2"
              style={{
                backgroundColor: '#eff6ff',
                color: '#2563eb',
                fontSize: '0.9rem',
              }}
            >
              {t(`news.types.${currentNews.type}`)}
            </span>
          </div>

          {/* Date */}
          <div
            className={`d-flex align-items-center gap-2 mb-4 ${
              isArabic
                ? 'justify-content-end'
                : 'justify-content-start'
            }`}
            style={{
              color: '#64748b',
              fontSize: '0.9rem',
            }}
          >
            <i className="bi bi-calendar3"></i>

            <span>
              {t(`news.${key}.date`)}
            </span>
          </div>

          {/* Title */}
          <h1
            className={`fw-bold mb-4 ${
              isArabic ? 'text-end' : 'text-start'
            }`}
            style={{
              color: '#111827',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.5,
            }}
          >
            {t(`news.${key}.title`)}
          </h1>

          {/* Short Description */}
          <p
            className={`mb-4 ${
              isArabic ? 'text-end' : 'text-start'
            }`}
            style={{
              color: '#475569',
              fontSize: '1.15rem',
              lineHeight: 2,
              fontWeight: '500',
            }}
          >
            {t(`news.${key}.description`)}
          </p>

          {/* Full Content */}
          <div
            className={`news-content ${
              isArabic ? 'text-end' : 'text-start'
            }`}
            style={{
              color: '#475569',
              fontSize: '1.05rem',
              lineHeight: 2.1,
            }}
          >
            {t(`news.${key}.content`)
              .split('\n')
              .map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
          </div>

          {/* Back */}
          <div
            className={`mt-5 ${
              isArabic ? 'text-end' : 'text-start'
            }`}
          >
            <Link
              to="/news"
              className="btn px-4 py-2 fw-semibold"
              style={{
                backgroundColor: '#f59e0b',
                color: '#111827',
                borderRadius: '12px',
              }}
            >
              {isArabic
                ? '← العودة إلى الأخبار'
                : '← Back to News'}
            </Link>
          </div>

        </article>
      </div>
    </section>
  );
};

export default NewsDetails;