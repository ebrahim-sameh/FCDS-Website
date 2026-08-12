import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';
import ProgramCard from './ProgramCard';
import programs from '../../data/programs';

const Programs = () => {
  const { t, i18n } = useTranslation('programs');
  const isArabic = i18n.language === 'ar';
  const [items, setItems] = useState(programs);
  const [hasError, setHasError] = useState(false);

  const loadPrograms = () => {
    try {
      setHasError(false);
      setItems(programs);
    } catch {
      setItems([]);
      setHasError(true);
    }
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="container-fluid px-4 px-lg-5 py-3">
        <SectionTitle
          eyebrow={t('page.label')}
          title={t('page.title')}
          subtitle={t('page.description')}
        />

        {hasError && (
          <div className={`d-flex flex-column gap-3 align-items-${isArabic ? 'end' : 'start'}`}>
            <p className="text-danger mb-0">{t('error')}</p>
            <Button variant="outlineDark" onClick={loadPrograms}>
              {t('retry')}
            </Button>
          </div>
        )}

        {!hasError && items.length === 0 && (
          <p className={`text-muted ${isArabic ? 'text-end' : 'text-start'}`}>{t('empty')}</p>
        )}

        {!hasError && items.length > 0 && (
          <div className="row g-4">
            {items.map((item) => (
              <div key={item.key} className="col-12 col-md-6 col-lg-4">
                <ProgramCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Programs;
