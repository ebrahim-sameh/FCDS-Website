import React from 'react';
import { Link } from 'react-router-dom';

const variantStyles = {
  primary: 'btn-warning',
  outline: 'btn-outline-light',
  outlineDark: 'btn-outline-secondary',
};

const Button = ({ children, to, href, onClick, variant = 'primary', icon, type = 'button', className = '', ...props }) => {
  const classes = `btn ${variantStyles[variant]} rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2 ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...props}>
        {children}
        {icon}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
      {icon}
    </button>
  );
};

export default Button;