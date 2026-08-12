import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsCard = ({ item }) => {
  const { t, i18n } = useTranslation('news');

  const isArabic = i18n.language === 'ar';

  return (
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

        {/* Image */}
        <div className="position-relative media-frame">
          <img
            src={item.image}
            alt={t(`news.${item.key}.title`)}
            width={640}
            height={400}
            loading="lazy"
            decoding="async"
          />

          {/* Category */}
          <span
            className="position-absolute top-0 end-0 m-3 px-3 py-2 bg-white rounded-pill fw-semibold"
            style={{
              color: '#2563eb',
              fontSize: '0.8rem',
            }}
          >
            {t(`news.types.${item.type}`)}
          </span>
        </div>

        {/* Content */}
        <div
          className={`p-4 ${
            isArabic ? 'text-end' : 'text-start'
          }`}
        >

          {/* Date */}
          <div
            className={`d-flex align-items-center gap-2 mb-3 ${
              isArabic
                ? 'justify-content-end'
                : 'justify-content-start'
            }`}
            style={{
              color: '#64748b',
              fontSize: '0.8rem',
            }}
          >
            <i className="bi bi-calendar3"></i>

            <span>
              {t(`news.${item.key}.date`)}
            </span>
          </div>

          {/* Title */}
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

          {/* Description */}
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
  );
};

export default NewsCard;