import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import NewsCard from './NewsCard';
import news from '../../data/news';

const News = () => {
  const { t, i18n } = useTranslation('news');

  const isArabic = i18n.language === 'ar';

  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchesFilter =
        activeFilter === 'all' ||
        item.type === activeFilter;

      const title = t(`news.${item.key}.title`);
      const description = t(
        `news.${item.key}.description`
      );

      const searchText = search.toLowerCase();

      const matchesSearch =
        title.toLowerCase().includes(searchText) ||
        description.toLowerCase().includes(searchText);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search, t]);

  return (
    <main className="bg-white">

      {/* Page Header */}
      <section className="container py-5">

        <div
          className={`text-${isArabic ? 'end' : 'start'}`}
        >
          <div
            className="fw-semibold mb-2"
            style={{
              color: '#f59e0b',
            }}
          >
            {t('page.label')}
          </div>

          <h1
            className="fw-bold mb-3"
            style={{
              color: '#111827',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            }}
          >
            {t('page.title')}
          </h1>

          <p
            className="mb-0"
            style={{
              color: '#64748b',
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            {t('page.description')}
          </p>
        </div>

      </section>


      {/* Filters + Search */}
      <section className="container pb-4">

        <div className="row g-3 align-items-center">

          {/* Search */}
          <div className="col-12 col-md-6">
            <div className="position-relative">

              <i
                className="bi bi-search position-absolute"
                style={{
                  left: isArabic ? 'auto' : '18px',
                  right: isArabic ? '18px' : 'auto',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#64748b',
                }}
              ></i>

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder={t('search.placeholder')}
                className={`form-control ${
                  isArabic ? 'text-end pe-5' : 'ps-5'
                }`}
                style={{
                  height: '50px',
                  borderRadius: '25px',
                  border: '1px solid #e2e8f0',
                }}
              />

            </div>
          </div>


          {/* Filters */}
          <div
            className={`col-12 col-md-6 d-flex gap-2 ${
              isArabic
                ? 'justify-content-start'
                : 'justify-content-end'
            }`}
          >

            <button
              className="btn rounded-pill px-4"
              onClick={() => setActiveFilter('all')}
              style={{
                backgroundColor:
                  activeFilter === 'all'
                    ? '#2563eb'
                    : '#fff',
                color:
                  activeFilter === 'all'
                    ? '#fff'
                    : '#475569',
                border: '1px solid #e2e8f0',
              }}
            >
              {t('filters.all')}
            </button>

            <button
              className="btn rounded-pill px-4"
              onClick={() => setActiveFilter('news')}
              style={{
                backgroundColor:
                  activeFilter === 'news'
                    ? '#2563eb'
                    : '#fff',
                color:
                  activeFilter === 'news'
                    ? '#fff'
                    : '#475569',
                border: '1px solid #e2e8f0',
              }}
            >
              {t('filters.news')}
            </button>

            <button
              className="btn rounded-pill px-4"
              onClick={() => setActiveFilter('event')}
              style={{
                backgroundColor:
                  activeFilter === 'event'
                    ? '#2563eb'
                    : '#fff',
                color:
                  activeFilter === 'event'
                    ? '#fff'
                    : '#475569',
                border: '1px solid #e2e8f0',
              }}
            >
              {t('filters.events')}
            </button>

          </div>

        </div>

      </section>


      {/* News Cards */}
      <section className="container pb-5">

        {filteredNews.length > 0 ? (

          <div className="row g-4">

            {filteredNews.map((item) => (
              <div
                key={item.key}
                className="col-12 col-md-6 col-lg-4"
              >
                <NewsCard item={item} />
              </div>
            ))}

          </div>

        ) : (

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

            <h4 className="mt-3">
              {t('search.noResults')}
            </h4>

            <p>
              {t('search.tryAgain')}
            </p>
          </div>

        )}

      </section>

    </main>
  );
};

export default News;