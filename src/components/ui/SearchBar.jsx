import React from 'react';

const SearchBar = ({ value, onChange, placeholder = '', className = '' }) => {
  return (
    <div className={`position-relative ${className}`}>
      <i
        className="bi bi-search position-absolute top-50 translate-middle-y start-0 ms-3"
        style={{ color: '#64748b' }}
        aria-hidden="true"
      />
      <input
        type="search"
        className="form-control ps-5"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder || 'Search'}
        style={{
          height: 50,
          borderRadius: 14,
          border: '1px solid #e2e8f0',
        }}
      />
    </div>
  );
};

export default SearchBar;
