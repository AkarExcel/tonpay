// components/TransactionItem.tsx
import React from 'react';

interface TransactionItemProps {
  description: string;
  date: string;
  amount: string;
  status: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ description, date, amount, status }) => {
  return (
    <div className="flex items-center justify-between p-4 mt-2 text-white ">
      <div>
        <p>{description}</p>
        <small>{date}</small>
      </div>
      <div className="text-right">
        <p className='font-bold text-xl'>{amount}</p>
        <small className={status === 'Successful' ? 'text-green-500' : 'text-red-500'}>{status}</small>
      </div>
    </div>
  );
};

export default TransactionItem;
