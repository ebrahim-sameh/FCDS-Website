import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../../components/ui/SectionTitle'
import Button from '../../components/ui/Button'
import ProgramCard from './ProgramCard'
import programs from '../../data/programs'
import departments from '../../data/departments'

const Programs = () => {
  const { t, i18n } = useTranslation(['programs', 'departments'])
  const isArabic = i18n.language === 'ar'
  const [query, setQuery] = useState('')
  const [dept, setDept] = useState('all')
  const [hasError, setHasError] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return programs.filter((item) => {
      const matchesDept = dept === 'all' || item.department === dept
      if (!matchesDept) return false
      if (!q) return true
      const name = t(`items.${item.key}.name`).toLowerCase()
      const summary = t(`items.${item.key}.summary`).toLowerCase()
      return name.includes(q) || summary.includes(q)
    })
  }, [query, dept, t])

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="container-fluid px-4 px-lg-5 py-3">
        <SectionTitle
          eyebrow={t('page.label')}
          title={t('page.title')}
          subtitle={t('page.description')}
        />

        {/* Search + filter */}
        <div className="row g-3 justify-content-center mb-4">
          <div className="col-12 col-md-6 col-lg-5">
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
          <div className="col-12 col-md-4 col-lg-3">
            <select
              className="form-select form-select-lg rounded-pill"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              aria-label={t('filterByDepartment')}
              dir={isArabic ? 'rtl' : 'ltr'}
            >
              <option value="all">{t('allDepartments')}</option>
              {departments.map((d) => (
                <option key={d.key} value={d.key}>
                  {t(`departments:departmentsList.${d.key}.name`)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {hasError ? (
          <div className="text-center py-5">
            <p className="text-danger mb-3">{t('error')}</p>
            <Button variant="outlineDark" onClick={() => setHasError(false)}>
              {t('retry')}
            </Button>
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-muted text-center py-5 mb-0">{t('empty')}</p>
        ) : (
          <div className="row g-4">
            {filtered.map((item) => (
              <div key={item.key} className="col-12 col-md-6 col-lg-4">
                <ProgramCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Programs