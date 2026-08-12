import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import FilterSelect from '../../components/ui/FilterSelect';
import EmptyState from '../../components/ui/EmptyState';
import LoadingState from '../../components/ui/LoadingState';
import ErrorState from '../../components/ui/ErrorState';
import useSimulatedLoad from '../../hooks/useSimulatedLoad';
import EventCard from './EventCard';
import events from '../../data/events';

const Events = () => {
  const { t } = useTranslation(['events', 'common']);
  const [typeFilter, setTypeFilter] = useState('all');

  const loadEvents = useCallback(() => events, []);
  const { status, data, retry } = useSimulatedLoad(loadEvents);

  const filterOptions = useMemo(
    () => [
      { value: 'all', label: t('types.all') },
      { value: 'academic', label: t('types.academic') },
      { value: 'contest', label: t('types.contest') },
      { value: 'career', label: t('types.career') },
    ],
    [t]
  );

  const filteredEvents = useMemo(() => {
    if (!data) return [];

    return data.filter(
      (item) => typeFilter === 'all' || item.type === typeFilter
    );
  }, [data, typeFilter]);

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="container-fluid px-4 px-lg-5 py-3">
        <SectionTitle
          eyebrow={t('page.label')}
          title={t('page.title')}
          subtitle={t('page.description')}
        />

        <div className="row mb-4">
          <div className="col-12 col-md-4 ms-md-auto">
            <FilterSelect
              value={typeFilter}
              onChange={setTypeFilter}
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
          filteredEvents.length > 0 ? (
            <div className="row g-4">
              {filteredEvents.map((item) => (
                <div key={item.key} className="col-12 col-md-6 col-lg-4">
                  <EventCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <EmptyState title={t('empty')} icon="bi-calendar-x" />
          )
        )}
      </div>
    </section>
  );
};

export default Events;
