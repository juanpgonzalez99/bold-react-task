import { QuestionMarkCircleIcon } from '@heroicons/react/outline';

import BrandIcon from '../brand-icon/BrandIcon';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="flex sticky justify-between items-center h-fit w-full p-7 bg-gradient-to-r from-blue via-blue to-red text-white text-base">
      <div>
        <BrandIcon height={30} />
      </div>
      <div className="flex space-x-6">
        <a href="/">Mi negocio</a>
        <a href="/">
          Ayuda
          <QuestionMarkCircleIcon className="inline w-4 ml-1" />
        </a>
      </div>
    </div>
  );
}
