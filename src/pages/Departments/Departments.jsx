import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import DepartmentCard from './DepartmentCard';
import departments from '../../data/departments';

const Departments = () => {
  const { t } = useTranslation('departments');

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="container-fluid px-4 px-lg-5 py-3">
        <SectionTitle
          eyebrow={t('departmentsSection.label')}
          title={t('departmentsSection.title')}
          subtitle={t('departmentsSection.description')}
        />

        <div className="row g-4">
          {departments.map((item) => (
            <div key={item.key} className="col-12 col-md-6 col-lg-4">
              <DepartmentCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
