'use client';

import React from 'react';
import ISPDropdown from './ISPDropdown';

const FormCard: React.FC = () => {
return (
    <div className="p-4">
      <header className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Airtime</h1>
        <a href="#" className="text-sm text-gray-500">History</a>
      </header>

      <div className="mt-4 flex items-center">
        <ISPDropdown />
        <p className="ml-2 text-lg border rounded-md p-4 w-full">
          <input type="text" value="090 2066 9843" className='w-full text-white bg-black border-0'/>
        </p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 bg-gray-200 p-10 rounded-lg">
        {[
          { cashback: '₦0.5 Cashback', amount: '₦50', pay: '₦50' },
          { cashback: '₦1 Cashback', amount: '₦100', pay: '₦100' },
          { cashback: '₦2 Cashback', amount: '₦200', pay: '₦200' },
          { cashback: '₦5 Cashback', amount: '₦500', pay: '₦500' },
          { cashback: '₦10 Cashback', amount: '₦1,000', pay: '₦1,000' },
          { cashback: '₦20 Cashback', amount: '₦2,000', pay: '₦2,000' },
        ].map((item, index) => (
          <div key={index} className="bg-white border rounded-md p-2 text-center cursor-pointer">
            <p className="text-sm text-black mb-2 p-1 bg-green-200 rounded-sm ">{item.cashback}</p>
            <p className="text-lg text-black mb-1">{item.amount}</p>
            <p className="text-sm text-gray-500">Pay {item.pay}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <input type="number" min="50" max="500000" className="w-full p-2 border rounded-md text-black" placeholder="₦ 50 - 500,000" />
        <button className="mt-2 w-full p-2 bg-green-500 text-white rounded-md">Pay</button>
      </div>
    </div>
  );
};

export default FormCard;
