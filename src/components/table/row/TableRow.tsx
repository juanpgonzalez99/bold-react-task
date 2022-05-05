import {
  CalculatorIcon,
  CreditCardIcon,
  LinkIcon,
} from '@heroicons/react/outline';

type Props = {
  transaction: BoldTransaction;
};

export default function TableRow({ transaction }: Props) {
  return (
    <tr className="border-t-2 border-background leading-4">
      <td
        className={[
          'px-3 py-2 md:px-6 md:py-3  border-l-8 text-blue h-full align-top',
          transaction.isSuccessful ? 'border-blue' : 'border-lightgray',
        ].join(' ')}
      >
        <div className="flex">
          {transaction.isDataphone ? (
            <CalculatorIcon className="w-4 h-4 mr-2" />
          ) : (
            <LinkIcon className="w-4 h-4 mr-2" />
          )}
          {transaction.isSuccessful ? 'Cobro exitoso' : 'Cobro no realizado'}
        </div>
      </td>
      <td className="px-3 py-2 md:px-6 md:py-3  align-top">
        {transaction.date}
      </td>
      <td className="px-3 py-2 md:px-6 md:py-3  flex items-start align-top">
        <CreditCardIcon className="w-4 h-4 mr-2" />
        {transaction.cardNumber}
      </td>
      <td className="px-3 py-2 md:px-6 md:py-3  align-top">{transaction.id}</td>
      <td className="px-3 py-2 md:px-6 md:py-3  flex flex-col space-y-2 align-top">
        <span className="text-blue">{transaction.amount}</span>
        {transaction.isSuccessful && (
          <div className="flex flex-col text-xs">
            <span className="text-lightgray">Deduccion Bold</span>
            <span className="text-red">- $5</span>
          </div>
        )}
      </td>
    </tr>
  );
}
