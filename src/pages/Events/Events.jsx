import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import FilterSelect from '../../components/ui/FilterSelect';
import EmptyState from '../../components/ui/EmptyState';
import EventCard from './EventCard';
import events from '../../data/events';

const Events = () => {
  const { t } = useTranslation('events');
  const [typeFilter, setTypeFilter] = useState('all');

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
    return events.filter(
      (item) => typeFilter === 'all' || item.type === typeFilter
    );
  }, [typeFilter]);

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

        {filteredEvents.length > 0 ? (
          <div className="row g-4">
            {filteredEvents.map((item) => (
              <div key={item.key} className="col-12 col-md-6 col-lg-4">
                <EventCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState title={t('empty')} icon="bi-calendar-x" />
        )}
      </div>
    </section>
  );
};

export default Events;
