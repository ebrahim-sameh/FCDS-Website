import React from 'react';

const FilterSelect = ({ value, onChange, options = [], className = '' }) => {
  return (
    <select
      className={`form-select ${className}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        height: 50,
        borderRadius: 14,
        border: '1px solid #e2e8f0',
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
