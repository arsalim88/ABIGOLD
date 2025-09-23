// components/ui/Input.jsx
import React from 'react';

const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${className}`}
      {...props}
    />
  );
};

export default Input;