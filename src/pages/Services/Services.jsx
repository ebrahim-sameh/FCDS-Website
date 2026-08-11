import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';
import ServiceCard from './ServiceCard';
import servicesData from './services';

const Services = () => {
  const { t, i18n } = useTranslation('services');
  const isArabic = i18n.language === 'ar';
  const [status, setStatus] = useState('loading');
  const [items, setItems] = useState([]);

  const loadServices = () => {
    setStatus('loading');

    window.setTimeout(() => {
      try {
        if (!servicesData.length) {
          setItems([]);
          setStatus('empty');
          return;
        }

        setItems(servicesData);
        setStatus('ready');
      } catch {
        setItems([]);
        setStatus('error');
      }
    }, 250);
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="container-fluid px-4 px-lg-5 py-3">
        <SectionTitle
          eyebrow={t('label')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        {status === 'loading' && (
          <p className={`text-muted ${isArabic ? 'text-end' : 'text-start'}`}>
            {t('loading')}
          </p>
        )}

        {status === 'empty' && (
          <p className={`text-muted ${isArabic ? 'text-end' : 'text-start'}`}>
            {t('empty')}
          </p>
        )}

        {status === 'error' && (
          <div className={`d-flex flex-column gap-3 align-items-${isArabic ? 'end' : 'start'}`}>
            <p className="text-danger mb-0">{t('error')}</p>
            <Button variant="outlineDark" onClick={loadServices}>
              {t('retry')}
            </Button>
          </div>
        )}

        {status === 'ready' && (
          <div className="row g-4">
            {items.map((item) => (
              <div key={item.key} className="col-12 col-md-6 col-lg-4">
                <ServiceCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
