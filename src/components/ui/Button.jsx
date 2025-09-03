// components/ui/Button.jsx
import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 disabled:bg-gray-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;