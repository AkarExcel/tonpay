// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4  text-gray-500">
      <div className="flex items-center">
        <img src="/images/pass-160.jpg" alt="Profile Picture" className="w-10 h-10 rounded-full" />
        <span className="ml-2 text-lg text-white font-semibold">Hi, ESan</span>
      </div>
      <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700">Connect wallet</button>
    </header>
  );
};

export default Header;
