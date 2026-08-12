import React from 'react';

const EmptyState = ({ title, description, icon = 'bi-inbox' }) => {
  return (
    <div className="text-center py-5" style={{ color: '#64748b' }}>
      <i className={`bi ${icon}`} style={{ fontSize: '2.5rem' }} aria-hidden="true" />
      {title && <h5 className="mt-3 fw-bold">{title}</h5>}
      {description && <p className="mb-0">{description}</p>}
    </div>
  );
};

export default EmptyState;
