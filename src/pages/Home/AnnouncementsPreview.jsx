import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';
import AnnouncementCard from '../Announcements/AnnouncementCard';
import announcements from '../../data/announcements';

const AnnouncementsPreview = () => {
  const { t } = useTranslation('announcements');
  const preview = announcements.slice(0, 3);

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="container-fluid px-4 px-lg-5">
        <SectionTitle
          eyebrow={t('page.label')}
          title={t('page.title')}
          subtitle={t('page.description')}
        />

        <div className="row g-4 mb-4">
          {preview.map((item) => (
            <div key={item.key} className="col-12 col-md-6 col-lg-4">
              <AnnouncementCard item={item} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/announcements" variant="primary">
            {t('viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsPreview;
