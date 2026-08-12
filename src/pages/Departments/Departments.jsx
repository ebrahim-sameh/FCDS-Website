import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import SearchBar from '../../components/ui/SearchBar';
import EmptyState from '../../components/ui/EmptyState';
import LoadingState from '../../components/ui/LoadingState';
import ErrorState from '../../components/ui/ErrorState';
import useSimulatedLoad from '../../hooks/useSimulatedLoad';
import DepartmentCard from './DepartmentCard';
import departments from '../../data/departments';

const Departments = () => {
  const { t } = useTranslation(['departments', 'common']);
  const [query, setQuery] = useState('');

  const loadDepartments = useCallback(() => departments, []);
  const { status, data, retry } = useSimulatedLoad(loadDepartments);

  const filtered = useMemo(() => {
    if (!data) return [];

    const q = query.trim().toLowerCase();
    if (!q) return data;

    return data.filter((item) => {
      const name = t(`departmentsList.${item.key}.name`).toLowerCase();
      const desc = t(`departmentsList.${item.key}.description`).toLowerCase();
      return name.includes(q) || desc.includes(q);
    });
  }, [data, query, t]);

  const emptyTitle = query.trim() ? t('search.noResults') : t('empty');
  const emptyDescription = query.trim() ? t('search.tryAgain') : undefined;

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="container-fluid px-4 px-lg-5 py-3">
        <SectionTitle
          eyebrow={t('departmentsSection.label')}
          title={t('departmentsSection.title')}
          subtitle={t('departmentsSection.description')}
        />

        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-8 col-lg-5">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder={t('searchPlaceholder')}
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
                  <DepartmentCard item={item} />
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

export default Departments;
