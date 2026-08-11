import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsSection = () => {
  const { t, i18n } = useTranslation('news');

  const isArabic = i18n.language === 'ar';

  // Search + Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const news = [
    {
      key: 'graduation',
      image: '/imgs/news-1.png',
      type: 'event',
    },
    {
      key: 'aiWorkshop',
      image: '/imgs/news-2.png',
      type: 'event',
    },
    {
      key: 'partnership',
      image: '/imgs/news-3.png',
      type: 'news',
    },
    {
      key: 'studentCompetition',
      image: '/imgs/news-4.png',
      type: 'event',
    },
    {
      key: 'dataScienceConference',
      image: '/imgs/news-5.png',
      type: 'event',
    },
    {
      key: 'technologyAgreement',
      image: '/imgs/news-6.png',
      type: 'news',
    },
  ];

  // Search + Filtering
  const filteredNews = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return news.filter((item) => {
      const title = t(`news.${item.key}.title`).toLowerCase();
      const description = t(
        `news.${item.key}.description`
      ).toLowerCase();

      const matchesSearch =
        title.includes(search) ||
        description.includes(search);

      const matchesFilter =
        filterType === 'all' ||
        item.type === filterType;

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterType, i18n.language]);

  return (
    <section className="py-5 bg-white">
      <div className="container py-4">

        {/* Header */}
        <div className="row align-items-end mb-4">

          {/* Title */}
          <div
            className={`col-12 col-md-6 ${
              isArabic
                ? 'order-md-2 text-end'
                : 'order-md-1 text-start'
            }`}
          >
            <div
              className="fw-semibold mb-2"
              style={{
                color: '#f59e0b',
                fontSize: '0.95rem',
              }}
            >
              {t('newsSection.label')}
            </div>

            <h2
              className="fw-bold mb-0"
              style={{
                color: '#111827',
                fontSize: 'clamp(2rem, 4vw, 2.6rem)',
              }}
            >
              {t('newsSection.title')}
            </h2>
          </div>

          {/* All News */}
          <div
            className={`col-12 col-md-6 mt-3 mt-md-0 ${
              isArabic
                ? 'order-md-1 text-start'
                : 'order-md-2 text-end'
            }`}
          >
            <Link
              to="/news"
              className="text-decoration-none fw-semibold"
              style={{
                color: '#2563eb',
              }}
            >
              {t('newsSection.allNews')}

              <i
                className={`bi ${
                  isArabic
                    ? 'bi-arrow-left ms-2'
                    : 'bi-arrow-right ms-2'
                }`}
              ></i>
            </Link>
          </div>

        </div>

        {/* Search + Filter */}
        <div className="row g-3 mb-5">

          {/* Search */}
          <div className="col-12 col-md-8">
            <div className="position-relative">

              <i
                className={`bi bi-search position-absolute top-50 translate-middle-y ${
                  isArabic ? 'end-0 me-3' : 'start-0 ms-3'
                }`}
                style={{
                  color: '#64748b',
                }}
              ></i>

              <input
                type="text"
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                placeholder={
                  isArabic
                    ? 'ابحث في الأخبار...'
                    : 'Search news...'
                }
                className={`form-control ${
                  isArabic ? 'pe-5 text-end' : 'ps-5'
                }`}
                style={{
                  height: '50px',
                  borderRadius: '14px',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'none',
                }}
              />

            </div>
          </div>

          {/* Filter */}
          <div className="col-12 col-md-4">
            <select
              value={filterType}
              onChange={(e) =>
                setFilterType(e.target.value)
              }
              className={`form-select ${
                isArabic ? 'text-end' : ''
              }`}
              style={{
                height: '50px',
                borderRadius: '14px',
                border: '1px solid #e2e8f0',
                boxShadow: 'none',
              }}
            >
              <option value="all">
                {isArabic
                  ? 'كل الأخبار'
                  : 'All News'}
              </option>

              <option value="event">
                {t('news.types.event')}
              </option>

              <option value="news">
                {t('news.types.news')}
              </option>
            </select>
          </div>

        </div>

        {/* Results Count */}
        <div
          className={`mb-4 ${
            isArabic ? 'text-end' : 'text-start'
          }`}
          style={{
            color: '#64748b',
            fontSize: '0.9rem',
          }}
        >
          {isArabic
            ? `عدد النتائج: ${filteredNews.length}`
            : `Results: ${filteredNews.length}`}
        </div>

        {/* News Cards */}
        <div className="row g-4">

          {filteredNews.map((item) => (
            <div
              key={item.key}
              className="col-12 col-md-6 col-lg-4"
            >
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
                    e.currentTarget.style.transform =
                      'translateY(-5px)';

                    e.currentTarget.style.boxShadow =
                      '0 12px 25px rgba(15, 23, 42, 0.10)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      'translateY(0)';

                    e.currentTarget.style.boxShadow =
                      'none';
                  }}
                >

                  {/* Image */}
                  <div
                    className="position-relative overflow-hidden"
                    style={{
                      height: '245px',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={t(
                        `news.${item.key}.title`
                      )}
                      className="w-100 h-100"
                      style={{
                        objectFit: 'cover',
                      }}
                    />

                    {/* Category */}
                    <span
                      className="position-absolute top-0 end-0 m-3 px-3 py-2 bg-white rounded-pill fw-semibold"
                      style={{
                        color: '#2563eb',
                        fontSize: '0.8rem',
                      }}
                    >
                      {t(
                        `news.types.${item.type}`
                      )}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`p-4 ${
                      isArabic
                        ? 'text-end'
                        : 'text-start'
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
                        {t(
                          `news.${item.key}.date`
                        )}
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
                      {t(
                        `news.${item.key}.title`
                      )}
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
                      {t(
                        `news.${item.key}.description`
                      )}
                    </p>

                  </div>

                </article>
              </Link>
            </div>
          ))}

        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div
            className="text-center py-5"
            style={{
              color: '#64748b',
            }}
          >
            <i
              className="bi bi-search"
              style={{
                fontSize: '3rem',
              }}
            ></i>

            <h5 className="mt-3 fw-bold">
              {isArabic
                ? 'لا توجد أخبار مطابقة'
                : 'No matching news found'}
            </h5>

            <p>
              {isArabic
                ? 'جرب البحث بكلمة أخرى أو تغيير نوع الأخبار.'
                : 'Try another search term or change the filter.'}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default NewsSection;