import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/ui/SectionTitle';
import { asset } from '../../utils/asset';

const DeanMessageSection = () => {
  const { t, i18n } = useTranslation('deanMessage');
  const isArabic = i18n.language === 'ar';

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: '#eef6ff',
      }}
    >
      <div className="container py-4 py-lg-5">
        <div className="row align-items-center g-5">

          {/* الصورة */}
          <div
            className={`col-12 col-lg-5 ${
              isArabic ? 'order-lg-2' : 'order-lg-1'
            }`}
          >
            <div
              className="mx-auto"
              style={{
                maxWidth: '430px',
              }}
            >
              <img
                src={asset('imgs/dean.webp')}
                alt={t('deanMessage.imageAlt')}
                className="img-fluid w-100"
                width={430}
                height={540}
                loading="lazy"
                decoding="async"
                style={{
                  height: '540px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.12)',
                }}
              />
            </div>
          </div>

          {/* المحتوى */}
          <div
            className={`col-12 col-lg-7 ${
              isArabic
                ? 'order-lg-1 text-end'
                : 'order-lg-2 text-start'
            }`}
          >
            {/* Section Header */}
            <SectionTitle
              eyebrow={t('deanMessage.label')}
              title={t('deanMessage.title')}
              align="start"
            />

            {/* Quote icon */}
            <div
              style={{
                color: '#b9d0f7',
                fontSize: '3rem',
                lineHeight: 0.7,
                fontWeight: 'bold',
              }}
            >
              “
            </div>

            {/* Message */}
            <div
              className="mt-3"
              style={{
                color: '#53657d',
                fontSize: '1rem',
                lineHeight: 2,
                maxWidth: '700px',
              }}
            >
              <p className="mb-4">
                {t('deanMessage.paragraph1')}
              </p>

              <p className="mb-4">
                {t('deanMessage.paragraph2')}
              </p>
            </div>

            {/* Dean Information */}
            <div className="mb-4">
              <h5
                className="fw-bold mb-1"
                style={{
                  color: '#111827',
                }}
              >
                {t('deanMessage.name')}
              </h5>

              <div
                style={{
                  color: '#64748b',
                  fontSize: '0.9rem',
                }}
              >
                {t('deanMessage.position')}
              </div>
            </div>

            {/* More */}
            <Link
              to="/dean-message"
              className="text-decoration-none d-inline-flex align-items-center gap-2 fw-semibold"
              style={{
                color: '#2563eb',
              }}
            >
              <span>
                {t('deanMessage.readMore')}
              </span>

              <i
                className={`bi ${
                  isArabic
                    ? 'bi-arrow-left'
                    : 'bi-arrow-right'
                }`}
              ></i>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DeanMessageSection;