// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4  text-gray-500">
      <div className="flex items-center">
        <img src="/images/not-ton pay-logo-light.png" alt="Profile Picture" className="h-6" />
      </div>
      <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700">Connect wallet</button>
    </header>
  );
};

export default Header;
