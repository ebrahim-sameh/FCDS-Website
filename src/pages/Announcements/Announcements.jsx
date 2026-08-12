import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import SearchBar from '../../components/ui/SearchBar';
import FilterSelect from '../../components/ui/FilterSelect';
import EmptyState from '../../components/ui/EmptyState';
import LoadingState from '../../components/ui/LoadingState';
import ErrorState from '../../components/ui/ErrorState';
import Modal from '../../components/ui/Modal';
import useSimulatedLoad from '../../hooks/useSimulatedLoad';
import AnnouncementCard from './AnnouncementCard';
import announcements from '../../data/announcements';

const Announcements = () => {
  const { t, i18n } = useTranslation(['announcements', 'common']);
  const isArabic = i18n.language === 'ar';

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const loadAnnouncements = useCallback(() => announcements, []);
  const { status, data, retry } = useSimulatedLoad(loadAnnouncements);

  const filterOptions = useMemo(
    () => [
      { value: 'all', label: t('categories.all') },
      { value: 'academic', label: t('categories.academic') },
      { value: 'exams', label: t('categories.exams') },
      { value: 'services', label: t('categories.services') },
      { value: 'opportunities', label: t('categories.opportunities') },
    ],
    [t]
  );

  const filteredAnnouncements = useMemo(() => {
    if (!data) return [];

    const searchText = search.toLowerCase();

    return data.filter((item) => {
      const matchesCategory =
        categoryFilter === 'all' || item.category === categoryFilter;

      const title = t(`items.${item.key}.title`);
      const summary = t(`items.${item.key}.summary`);

      const matchesSearch =
        title.toLowerCase().includes(searchText) ||
        summary.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [categoryFilter, data, search, t]);

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="container-fluid px-4 px-lg-5 py-3">
        <SectionTitle
          eyebrow={t('page.label')}
          title={t('page.title')}
          subtitle={t('page.description')}
        />

        <div className="row g-3 mb-4">
          <div className="col-12 col-md-8">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder={t('searchPlaceholder')}
            />
          </div>
          <div className="col-12 col-md-4">
            <FilterSelect
              value={categoryFilter}
              onChange={setCategoryFilter}
              options={filterOptions}
            />
          </div>
        </div>

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
          filteredAnnouncements.length > 0 ? (
            <div className="row g-4">
              {filteredAnnouncements.map((item) => (
                <div key={item.key} className="col-12 col-md-6 col-lg-4">
                  <AnnouncementCard
                    item={item}
                    onClick={() => setSelectedItem(item)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <EmptyState title={t('empty')} icon="bi-search" />
          )
        )}
      </div>

      <Modal
        open={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        title={selectedItem ? t(`items.${selectedItem.key}.title`) : ''}
      >
        {selectedItem && (
          <div className={isArabic ? 'text-end' : 'text-start'}>
            <div
              className={`d-flex align-items-center gap-2 mb-3 ${isArabic ? 'justify-content-end' : 'justify-content-start'}`}
              style={{ color: '#64748b', fontSize: '0.9rem' }}
            >
              <i className="bi bi-calendar3" aria-hidden="true" />
              <span>{selectedItem.date}</span>
            </div>
            <p className="mb-0" style={{ color: '#475569', lineHeight: 1.8 }}>
              {t(`items.${selectedItem.key}.body`)}
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Announcements;
