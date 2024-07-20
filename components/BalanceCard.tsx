// components/BalanceCard.tsx
import React from 'react';
import {ChevronRightIcon} from '@heroicons/react/24/solid'

const BalanceCard: React.FC = () => {
  return (
    <div className="p-4 mt-4 bg-ton_blue text-white rounded-lg shadow-md">
      <div className="flex justify-between">
        <div>
          <span>Available Balance</span>
          <span className="block text-2xl">₦ 3,407.92</span>
        </div>
        <div>
        <button className="rounded-full px-4 py-2 font-semibold text-white ring-white ring-1  active:ring-1 active:ring-offset-2 active:ring-primary hover:ring-white hover:bg-ton_black/50">+ Add money</button>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
