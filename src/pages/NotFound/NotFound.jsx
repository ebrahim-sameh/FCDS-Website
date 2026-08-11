import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/ui/Button';

const NotFound = () => {
  const { t } = useTranslation('common');

  return (
    <section className="py-5">
      <div className="container text-center py-5">
        <h1 className="fw-bold mb-3" style={{ color: '#0b1f52' }}>
          404
        </h1>
        <p className="text-muted mb-4">{t('notFound.message')}</p>
        <Button to="/" variant="primary">
          {t('notFound.backHome')}
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
