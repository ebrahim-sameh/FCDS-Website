import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import SearchBar from '../../components/ui/SearchBar';
import FilterSelect from '../../components/ui/FilterSelect';
import EmptyState from '../../components/ui/EmptyState';
import AnnouncementCard from './AnnouncementCard';
import announcements from '../../data/announcements';

const Announcements = () => {
  const { t } = useTranslation('announcements');

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

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
    const searchText = search.toLowerCase();

    return announcements.filter((item) => {
      const matchesCategory =
        categoryFilter === 'all' || item.category === categoryFilter;

      const title = t(`items.${item.key}.title`);
      const summary = t(`items.${item.key}.summary`);

      const matchesSearch =
        title.toLowerCase().includes(searchText) ||
        summary.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [categoryFilter, search, t]);

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

        {filteredAnnouncements.length > 0 ? (
          <div className="row g-4">
            {filteredAnnouncements.map((item) => (
              <div key={item.key} className="col-12 col-md-6 col-lg-4">
                <AnnouncementCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState title={t('empty')} icon="bi-search" />
        )}
      </div>
    </section>
  );
};

export default Announcements;
