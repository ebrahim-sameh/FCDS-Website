import React from 'react';

const LoadingState = ({ message = 'Loading...' }) => {
  return (
    <div
      className="text-center py-5 text-muted d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: 320 }}
      role="status"
      aria-live="polite"
    >
      <i
        className="bi bi-arrow-repeat fs-2 d-inline-block mb-2 loading-state-icon"
        style={{ width: '1.5rem', height: '1.5rem' }}
        aria-hidden="true"
      />
      <p className="mb-0">{message}</p>
    </div>
  );
};

export default LoadingState;
