import { AdjustmentsIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';

type Props = {
  sendCurrentFilterToParent: (arg: string) => void;
};

export default function Filters({ sendCurrentFilterToParent }: Props) {
  const [toggleFilters, setToggleFilters] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('');

  const checkboxes = [
    { label: 'Cobro por datafono', value: 'dataphone' },
    { label: 'Cobros con link de pago', value: 'paymentLink' },
    { label: 'Ver todos', value: 'all' },
  ];

  const handleSubmit = () => {
    setToggleFilters(false);
    setCurrentFilter('');
  };

  return (
    <div
      className={[
        'mt-4 md:right-8 bg-white rounded-md shadow-md transition-all duration-300 ease-in-out overflow-hidden absolute',
        toggleFilters ? 'h-48 w-64 ' : 'w-36 h-8',
      ].join(' ')}
    >
      <div
        className="text-center text-blue font-light uppercase text-xs leading-8 relative cursor-pointer"
        onClick={() => setToggleFilters(!toggleFilters)}
      >
        <span>Filtrar</span>
        {toggleFilters ? (
          <XIcon className="absolute w-4 top-2 right-3" />
        ) : (
          <AdjustmentsIcon className="absolute w-4 top-2 right-3" />
        )}
      </div>

      <div className="px-3 pt-3 pb-2 space-y-1">
        {checkboxes.map((item, index) => (
          <div className="flex items-start" key={index}>
            <div className="flex items-center h-5">
              <input
                id={item.value}
                value={item.value}
                checked={currentFilter === item.value}
                onClick={() => setCurrentFilter(item.value)}
                name="filter"
                type="radio"
                className="focus:ring-blue h-4 w-4"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor={item.value} className="font-bold text-blue ">
                {item.label}
              </label>
            </div>
          </div>
        ))}
        <div className="pt-5 px-6">
          <button
            type="submit"
            className={[
              'w-full h-10 rounded-3xl font-bold text-white bg-red transition-opacity ease-in-out duration-150',
              currentFilter === '' && 'opacity-20 cursor-not-allowed',
            ].join(' ')}
            onClick={() => {
              sendCurrentFilterToParent(currentFilter);
              handleSubmit();
            }}
            disabled={currentFilter === ''}
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
}
