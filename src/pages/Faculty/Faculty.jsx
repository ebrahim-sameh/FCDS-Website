import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import SearchBar from '../../components/ui/SearchBar';
import FilterSelect from '../../components/ui/FilterSelect';
import EmptyState from '../../components/ui/EmptyState';
import FacultyCard from './FacultyCard';
import faculty from '../../data/faculty';
import departments from '../../data/departments';

const Faculty = () => {
  const { t } = useTranslation(['faculty', 'departments']);

  const [search, setSearch] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  const filterOptions = useMemo(
    () => [
      { value: 'all', label: t('filterAll') },
      ...departments.map((dept) => ({
        value: dept.key,
        label: t(`departmentsList.${dept.key}.name`, { ns: 'departments' }),
      })),
    ],
    [t]
  );

  const filteredFaculty = useMemo(() => {
    const searchText = search.toLowerCase();

    return faculty.filter((item) => {
      const matchesDepartment =
        departmentFilter === 'all' || item.department === departmentFilter;

      const name = t(`items.${item.key}.name`);
      const bio = t(`items.${item.key}.bio`);
      const deptName = t(`departmentsList.${item.department}.name`, { ns: 'departments' });

      const matchesSearch =
        name.toLowerCase().includes(searchText) ||
        bio.toLowerCase().includes(searchText) ||
        deptName.toLowerCase().includes(searchText);

      return matchesDepartment && matchesSearch;
    });
  }, [departmentFilter, search, t]);

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="container-fluid px-4 px-lg-5 py-3">
        <SectionTitle
          eyebrow={t('page.label')}
          title={t('page.title')}
          subtitle={t('page.description')}
        />

        <div className="row g-3 mb-4">
          <div className="col-12 col-md-8">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder={t('searchPlaceholder')}
            />
          </div>
          <div className="col-12 col-md-4">
            <FilterSelect
              value={departmentFilter}
              onChange={setDepartmentFilter}
              options={filterOptions}
            />
          </div>
        </div>

        {filteredFaculty.length > 0 ? (
          <div className="row g-4">
            {filteredFaculty.map((item) => (
              <div key={item.key} className="col-12 col-md-6 col-lg-4">
                <FacultyCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState title={t('empty')} icon="bi-search" />
        )}
      </div>
    </section>
  );
};

export default Faculty;
