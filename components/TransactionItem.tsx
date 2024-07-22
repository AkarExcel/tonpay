// components/TransactionItem.tsx
import React from 'react';
import {BanknotesIcon} from '@heroicons/react/24/solid'

interface TransactionItemProps {
  description: string;
  date: string;
  amount: string;
  status: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ description, date, amount, status }) => {
  return (
    
    <div className="w-full px-2 flex items-center justify-between   text-white text-xs">
      
      <div className='flex gap-2'>
        <div className='flex items-center justify-center bg-background rounded-full p-2 w-10 h-10'>
          <BanknotesIcon className='w-8 h-8'/>
        </div>
        
        <div>
          <p>{description}</p>
          <small>{date}</small>
        </div>
      </div>


      <div className="text-right">
        <p className='font-bold text-base'>{amount}</p>
        <p className='font-light text-xs'>+2000 pts</p>
        <small className={status === 'Successful' ? 'text-green-500' : 'text-red-500'}>{status}</small>
      </div>
    </div>
  );
};

export default TransactionItem;
