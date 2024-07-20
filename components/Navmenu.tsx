// components/NavMenu.tsx
import { FC } from 'react';
 import { HomeIcon, UserGroupIcon,ClipboardDocumentListIcon } from '@heroicons/react/24/solid';
// const HomeIcon: any = require('@heroicons/react/24/solid').HomeIcon;
// const ClipboardListIcon: any = require('@heroicons/react/24/solid').ClipboardListIcon;
// const UserGroupIcon: any = require('@heroicons/react/24/solid').UserGroupIcon;

const NavMenu: FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-ton_black shadow-lg">
      <nav className="flex justify-around p-4">
        <a href="#" className="flex flex-col items-center text-primary">
            
          <HomeIcon className="w-6 h-6" />
          <span className="text-sm">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center text-primary">
          <ClipboardDocumentListIcon className="w-6 h-6" />
          <span className="text-sm">Tasks</span>
        </a>
        <a href="#" className="flex flex-col items-center text-primary">
          <UserGroupIcon className="w-6 h-6" />
          <span className="text-sm">Frens</span>
        </a>
      </nav>
    </footer>
  );
};

export default NavMenu;
