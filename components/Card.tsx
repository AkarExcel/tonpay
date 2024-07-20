// components/TransactionCard.tsx
import { FC, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="flex p-2 flex-col justify-between items-center my-2 bg-ton_black text-gray-500 rounded-lg shadow-md">
      {children}
    </div>
  );
};

export default Card;
