import React, { useEffect } from 'react';

const Modal = ({ open, onClose, title, children }) => {
  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: 'rgba(15, 23, 42, 0.45)', zIndex: 1050 }}
      onClick={onClose}
      role="presentation"
    >
      <div
        className="bg-white rounded-4 p-4 mx-3"
        style={{ width: 'min(520px, 100%)' }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 fw-bold mb-0" style={{ color: '#0b1f52' }}>
            {title}
          </h2>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
