// components/Reward.tsx
import { FC } from 'react';


interface RewardProps {
  profilePic: string;
  username: string;
  rewardToken: number;
}

const Reward: FC<RewardProps> = ({ profilePic, username, rewardToken }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-16 h-full">
      <img 
        src={profilePic} 
        alt="Profile Picture" 
        className="w-16 h-16 rounded-full mb-4" 
      />
      <h2 className="font-semibold text-2xl mb-2">{username}</h2>
      <p className="flex items-center justify-center font-bold text-primary"><img className="w-6 h-6 rounded-full mb-4" src="/images/not-ton pay.svg" alt="Icon" /> <span className='pb-2 text-4xl '>{rewardToken}</span></p>
    </div>
  );
};

export default Reward;
