import React from 'react';

const LoadingState = ({ message = 'Loading...' }) => {
  return (
    <div className="text-center py-5 text-muted">
      <i
        className="bi bi-arrow-repeat fs-2 d-inline-block mb-2 loading-state-icon"
        aria-hidden="true"
      />
      <p className="mb-0">{message}</p>
    </div>
  );
};

export default LoadingState;
