import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import NewsCard from './NewsCard';
import SearchBar from '../../components/ui/SearchBar';
import EmptyState from '../../components/ui/EmptyState';
import LoadingState from '../../components/ui/LoadingState';
import ErrorState from '../../components/ui/ErrorState';
import useSimulatedLoad from '../../hooks/useSimulatedLoad';
import news from '../../data/news';

const News = () => {
  const { t, i18n } = useTranslation(['news', 'common']);
  const isArabic = i18n.language === 'ar';

  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const loadNews = useCallback(() => news, []);
  const { status, data, retry } = useSimulatedLoad(loadNews);

  const filteredNews = useMemo(() => {
    if (!data) return [];

    return data.filter((item) => {
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
  }, [activeFilter, data, search, t]);

  const emptyMessage =
    search || activeFilter !== 'all'
      ? t('search.noResults')
      : t('empty');

  const emptyDescription =
    search || activeFilter !== 'all' ? t('search.tryAgain') : undefined;

  return (
    <main className="bg-white">

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


      <section className="container pb-4">

        <div className="row g-3 align-items-center">

          <div className="col-12 col-md-6">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder={t('search.placeholder')}
            />
          </div>


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


      <section className="container pb-5">

        {status === 'loading' && (
          <LoadingState message={t('states.loading', { ns: 'common' })} />
        )}

        {status === 'error' && (
          <ErrorState
            message={t('states.error', { ns: 'common' })}
            onRetry={retry}
            retryLabel={t('states.retry', { ns: 'common' })}
          />
        )}

        {status === 'ready' && (
          filteredNews.length > 0 ? (
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
            <EmptyState
              title={emptyMessage}
              description={emptyDescription}
              icon="bi-search"
            />
          )
        )}

      </section>

    </main>
  );
};

export default News;
