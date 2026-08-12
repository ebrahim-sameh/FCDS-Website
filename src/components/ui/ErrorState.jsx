import React from 'react';

const ErrorState = ({ message, onRetry, retryLabel = 'Retry' }) => {
  return (
    <div className="card border-0 shadow-sm mx-auto" style={{ maxWidth: 480 }}>
      <div className="card-body text-center py-5">
        <div className="alert alert-danger mb-4" role="alert">
          <i className="bi bi-exclamation-triangle me-2" aria-hidden="true" />
          {message}
        </div>
        {onRetry && (
          <button type="button" className="btn btn-outline-primary" onClick={onRetry}>
            {retryLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorState;
