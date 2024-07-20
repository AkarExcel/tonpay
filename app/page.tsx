// app/page.tsx
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import TransactionItem from '../components/TransactionItem';
import Card from '../components/Card'
import Service from '@/components/Services';
import Reward from '@/components/Rewards';


const Home: React.FC = () => {
  return (
    <div className="min-h-screen justify-between text-white">
      <Header />
      <main className="container mx-auto px-4">
        <BalanceCard />
        <Card>
        
        <TransactionItem 
            description="Transfer to MSQ RUKPOKWU"
            date="Jul 16th, 17:58:32"
            amount="-₦1,500.00"
            status="Successful"
          />
          <TransactionItem 
            description="Transfer to Michael Olugben..."
            date="Jul 15th, 19:51:26"
            amount="+₦2,000.00"
            status="Successful"
          />
        </Card>
        <Card>
          <Service/>
        </Card>
        <Reward 
          profilePic='/images/pass-160.jpg'
          username="John Doe" 
          rewardToken={1000} 
          />
      </main>
      
    </div>
  );
};

export default Home;
