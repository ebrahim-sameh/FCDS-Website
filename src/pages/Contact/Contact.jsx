import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]?[\d\s()-]{8,20}$/;

const Contact = () => {
  const { t, i18n } = useTranslation('contact');
  const { t: tCommon } = useTranslation('common');
  const isArabic = i18n.language === 'ar';

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = t('validation.nameRequired');
    } else if (form.name.trim().length < 2) {
      nextErrors.name = t('validation.nameShort');
    }

    if (!form.email.trim()) {
      nextErrors.email = t('validation.emailRequired');
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = t('validation.emailInvalid');
    }

    if (!form.phone.trim()) {
      nextErrors.phone = t('validation.phoneRequired');
    } else if (!phonePattern.test(form.phone.trim())) {
      nextErrors.phone = t('validation.phoneInvalid');
    }

    if (!form.message.trim()) {
      nextErrors.message = t('validation.messageRequired');
    } else if (form.message.trim().length < 10) {
      nextErrors.message = t('validation.messageShort');
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    window.setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
    }, 400);
  };

  const fieldClass = (field) =>
    `form-control ${errors[field] ? 'is-invalid' : ''}`;

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fb' }}>
      <div className="container-fluid px-4 px-lg-5 py-3">
        <SectionTitle
          eyebrow={t('label')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <div
              className={`h-100 p-4 rounded-4 text-white ${isArabic ? 'text-end' : 'text-start'}`}
              style={{ backgroundColor: '#0b1f52' }}
            >
              <h3 className="fw-bold mb-4" style={{ fontSize: '1.25rem' }}>
                {t('infoTitle')}
              </h3>

              <div className="mb-3">
                <div className="fw-semibold mb-1" style={{ color: '#f59e0b' }}>
                  {t('addressLabel')}
                </div>
                <p className="mb-0" style={{ color: '#c3cbe0' }}>
                  {tCommon('footer.address')}
                </p>
              </div>

              <div className="mb-3">
                <div className="fw-semibold mb-1" style={{ color: '#f59e0b' }}>
                  {t('phoneLabel')}
                </div>
                <p className="mb-0" style={{ color: '#c3cbe0' }} dir="ltr">
                  +20 3 5420744
                </p>
              </div>

              <div className="mb-3">
                <div className="fw-semibold mb-1" style={{ color: '#f59e0b' }}>
                  {t('emailLabel')}
                </div>
                <p className="mb-0" style={{ color: '#c3cbe0' }} dir="ltr">
                  fcds-dean@alexu.edu.eg
                </p>
              </div>

              <div>
                <div className="fw-semibold mb-1" style={{ color: '#f59e0b' }}>
                  {t('hoursLabel')}
                </div>
                <p className="mb-0" style={{ color: '#c3cbe0' }}>
                  {t('hours')}
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <form
              onSubmit={handleSubmit}
              noValidate
              className={`bg-white p-4 p-md-5 rounded-4 border h-100 ${isArabic ? 'text-end' : 'text-start'}`}
              style={{ borderColor: '#e2e8f0' }}
            >
              {status === 'success' && (
                <div className="alert alert-success" role="status">
                  {t('success')}
                </div>
              )}

              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label htmlFor="name" className="form-label fw-semibold">
                    {t('form.name')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={fieldClass('name')}
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                </div>

                <div className="col-12 col-md-6">
                  <label htmlFor="email" className="form-label fw-semibold">
                    {t('form.email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={fieldClass('email')}
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    dir="ltr"
                  />
                  {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                </div>

                <div className="col-12">
                  <label htmlFor="phone" className="form-label fw-semibold">
                    {t('form.phone')}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={fieldClass('phone')}
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    dir="ltr"
                  />
                  {errors.phone && <div className="invalid-feedback d-block">{errors.phone}</div>}
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label fw-semibold">
                    {t('form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className={fieldClass('message')}
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <div className="invalid-feedback d-block">{errors.message}</div>
                  )}
                </div>
              </div>

              <div className={`mt-4 d-flex ${isArabic ? 'justify-content-start' : 'justify-content-end'}`}>
                <Button type="submit" variant="primary" disabled={status === 'sending'}>
                  {status === 'sending' ? t('form.sending') : t('form.submit')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
