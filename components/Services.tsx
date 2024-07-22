// components/Service.tsx
import { FC } from 'react';
import { PhoneIcon, DevicePhoneMobileIcon, LightBulbIcon } from '@heroicons/react/24/solid';

const services = [
  { name: 'Airtime', icon: PhoneIcon },
  { name: 'Data', icon: DevicePhoneMobileIcon },
  { name: 'Electricity', icon: LightBulbIcon },
];

const Service: FC = () => {
  return (
    <div className="flex items-center text-gray-200 justify-between w-full p-2">
      {services.map((service) => (
        <button
          key={service.name}
          className="flex flex-col rounded-lg  items-center p-2 text-primary hover:text-secondary"
        >
            <div className='flex items-center justify-center bg-gray-900 rounded-full p-2 w-14 h-14'>
            <service.icon className="w-6 h-6 mb-1" />
            </div>
          
          <span className="font-bold text-base">{service.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Service;
