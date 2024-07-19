// components/BalanceCard.tsx
import React from 'react';

const BalanceCard: React.FC = () => {
  return (
    <div className="p-4 mt-4 bg-ton_blue text-white rounded-lg shadow-md">
      <div className="flex justify-between">
        <div>
          <span>Available Balance</span>
          <span className="block text-2xl">₦ 3,407.92</span>
        </div>
        <div>
          <span>Reward points  </span>
          <span className="block">1000000.0</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
