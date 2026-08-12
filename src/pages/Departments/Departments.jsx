import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../components/ui/SectionTitle'
import Button from '../../components/ui/Button'
import DepartmentCard from './DepartmentCard'
import departments from '../../data/departments'

const Departments = () => {
  const { t, i18n } = useTranslation('departments')
  const isArabic = i18n.language === 'ar'
  const [query, setQuery] = useState('')
  const [hasError, setHasError] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return departments
    return departments.filter((item) => {
      const name = t(`departmentsList.${item.key}.name`).toLowerCase()
      const desc = t(`departmentsList.${item.key}.description`).toLowerCase()
      return name.includes(q) || desc.includes(q)
    })
  }, [query, t])

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
            <div className="position-relative">
              <i
                className="bi bi-search position-absolute top-50 translate-middle-y text-muted"
                style={{ [isArabic ? 'right' : 'left']: '1rem' }}
                aria-hidden="true"
              />
              <input
                type="text"
                className={`form-control form-control-lg rounded-pill ${isArabic ? 'pe-5 text-end' : 'ps-5'}`}
                placeholder={t('searchPlaceholder')}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label={t('searchPlaceholder')}
              />
            </div>
          </div>
        </div>

        {hasError ? (
          <div className="text-center py-5">
            <p className="text-danger mb-3">{t('details.error')}</p>
            <Button variant="outlineDark" onClick={() => setHasError(false)}>
              {t('details.retry')}
            </Button>
          </div>
        ) : filtered.length === 0 ? (
          <p className={`text-muted text-center py-5 mb-0`}>{t('empty')}</p>
        ) : (
          <div className="row g-4">
            {filtered.map((item) => (
              <div key={item.key} className="col-12 col-md-6 col-lg-4">
                <DepartmentCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Departments