import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import SearchBar from '../../components/ui/SearchBar';
import FilterSelect from '../../components/ui/FilterSelect';
import EmptyState from '../../components/ui/EmptyState';
import LoadingState from '../../components/ui/LoadingState';
import ErrorState from '../../components/ui/ErrorState';
import useSimulatedLoad from '../../hooks/useSimulatedLoad';
import ProgramCard from './ProgramCard';
import programs from '../../data/programs';
import departments from '../../data/departments';

const Programs = () => {
  const { t } = useTranslation(['programs', 'departments', 'common']);
  const [query, setQuery] = useState('');
  const [dept, setDept] = useState('all');

  const loadPrograms = useCallback(() => programs, []);
  const { status, data, retry } = useSimulatedLoad(loadPrograms);

  const filterOptions = useMemo(
    () => [
      { value: 'all', label: t('allDepartments') },
      ...departments.map((d) => ({
        value: d.key,
        label: t(`departmentsList.${d.key}.name`, { ns: 'departments' }),
      })),
    ],
    [t]
  );

  const filtered = useMemo(() => {
    if (!data) return [];

    const q = query.trim().toLowerCase();
    return data.filter((item) => {
      const matchesDept = dept === 'all' || item.department === dept;
      if (!matchesDept) return false;
      if (!q) return true;
      const name = t(`items.${item.key}.name`).toLowerCase();
      const summary = t(`items.${item.key}.summary`).toLowerCase();
      return name.includes(q) || summary.includes(q);
    });
  }, [data, query, dept, t]);

  const hasFilters = query.trim() || dept !== 'all';
  const emptyTitle = hasFilters ? t('search.noResults') : t('empty');
  const emptyDescription = hasFilters ? t('search.tryAgain') : undefined;

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="container-fluid px-4 px-lg-5 py-3">
        <SectionTitle
          eyebrow={t('page.label')}
          title={t('page.title')}
          subtitle={t('page.description')}
        />

        <div className="row g-3 justify-content-center mb-4">
          <div className="col-12 col-md-6 col-lg-5">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder={t('searchPlaceholder')}
            />
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <FilterSelect
              value={dept}
              onChange={setDept}
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
          filtered.length > 0 ? (
            <div className="row g-4">
              {filtered.map((item) => (
                <div key={item.key} className="col-12 col-md-6 col-lg-4">
                  <ProgramCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title={emptyTitle}
              description={emptyDescription}
              icon="bi-search"
            />
          )
        )}
      </div>
    </section>
  );
};

export default Programs;
