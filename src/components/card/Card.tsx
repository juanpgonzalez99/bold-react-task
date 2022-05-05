import { InformationCircleIcon } from '@heroicons/react/outline';
import { numberToCurrency } from '../../services/format/currency';
import { getMonthAndYear } from '../../services/format/date';

type Props = {
  date: string;
  amount: number;
  currentLabel: string;
};

export default function Card({ date, amount, currentLabel }: Props) {
  return (
    <div className="h-fit w-full bg-white shadow-md rounded-xl">
      <div className="w-full h-12 px-7 flex justify-between items-center bg-gradient-to-r from-blue via-red to to-red rounded-t-xl ">
        <h1 className="text-white font-semibold">
          {`Total de ventas de ${currentLabel.toLowerCase()}`}
        </h1>
        <InformationCircleIcon className="h-5 w-5 text-white" />
      </div>
      <div className="p-6  text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue via-red to to-red bg-clip-text text-transparent">
          {numberToCurrency(amount)}
        </h2>
        {date && <h3 className="text-blue">{getMonthAndYear(date)}</h3>}
      </div>
    </div>
  );
}
