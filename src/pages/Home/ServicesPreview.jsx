import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';
import ServiceCard from '../Services/ServiceCard';
import services from '../../data/services';

const ServicesPreview = () => {
  const { t } = useTranslation('services');
  const preview = services.slice(0, 3);

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="container-fluid px-4 px-lg-5">
        <SectionTitle
          eyebrow={t('label')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="row g-4 mb-4">
          {preview.map((item) => (
            <div key={item.key} className="col-12 col-md-6 col-lg-4">
              <ServiceCard item={item} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/services" variant="primary">
            {t('viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
