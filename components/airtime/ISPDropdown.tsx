// components/ISPDropdown.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import mtn from "@/assets/images/mtn.png";
import glo from "@/assets/images/glo.jpg";
import airtel from "@/assets/images/airtel.png";
import _9mobile from "@/assets/images/9mobile.png";

interface ISP {
  name: string;
  logo: any;
}

const isps: ISP[] = [
  { name: 'MTN', logo: mtn },
  { name: 'Glo', logo: glo },
  { name: 'Airtel', logo: airtel },
  { name: '9mobile', logo: _9mobile },
];

const ISPDropdown = () => {
  const [selectedISP, setSelectedISP] = useState<ISP>(isps[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleISPSelect = (isp: ISP) => {
    setSelectedISP(isp);
    setIsOpen(false);
  };

  return (
    <div className="relative w-{50%}">
      <button
        onClick={handleDropdownToggle}
        className="flex items-center  border rounded-md p-4"
      >
        <Image src={selectedISP.logo} alt={selectedISP.name} className="w-6 h-6" width={200} height={200}/>
        <span className="ml-2">{selectedISP.name}</span>
      </button>
      {isOpen && (
        <div className="absolute bg-gray-400 border rounded-md mt-2 pr-5 w-full z-10">
          {isps.map((isp) => (
            <button
              key={isp.name}
              onClick={() => handleISPSelect(isp)}
              className="flex items-center w-full p-2 hover:bg-gray-100"
            >
              <Image src={isp.logo} alt={isp.name} className="w-6 h-6" width={200} height={200} />
              <span className="ml-2">{isp.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ISPDropdown;

// 