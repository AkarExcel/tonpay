// app/page.tsx
import Header from '../../components/Header';
import FormCard from '@/components/airtime/FormCard';



const Airtime: React.FC = () => {
  return (
    <div className="min-h-screen justify-between text-white">
      <Header />
      <main className="container mx-auto px-4">
       <div className="flex flex-col items-center justify-center p-4 mt-5 h-full">
       <span className='text-2xl text-center'><strong>Airtime</strong></span>
       {/* tailwindcss Inline form with select and text input  */}
        <FormCard />
       </div>
      </main>
      
    </div>
  );
};

export default Airtime;
