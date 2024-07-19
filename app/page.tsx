// app/page.tsx
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import TransactionItem from '../components/TransactionItem';
import Navmenu from '../components/Navmenu'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <main className="container mx-auto px-4">
        <BalanceCard />
        <div className='bg-ton_black text-gray-500 rounded-lg shadow-md'>
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
        </div>

      </main>
      <Navmenu />
    </div>
  );
};

export default Home;
