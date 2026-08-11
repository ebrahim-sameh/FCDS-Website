// src/components/ui/SectionTitle.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const SectionTitle = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const textAlign = align === 'center' ? 'text-center' : isArabic ? 'text-end' : 'text-start';

  return (
    <div className={`mb-5 ${textAlign}`}>
      {eyebrow && (
        <p className="fw-semibold mb-2" style={{ color: '#f59e0b', fontSize: '0.85rem', letterSpacing: '0.5px' }}>
          {eyebrow}
        </p>
      )}
      <h2 className="fw-bold" style={{ color: '#0b1f52', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted mx-auto" style={{ maxWidth: '560px', fontSize: '1rem' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;