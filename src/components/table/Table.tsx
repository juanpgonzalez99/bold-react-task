import TableHeader from './header/TableHeader';
import TableRow from './row/TableRow';

type Props = { transactions: BoldTransaction[] };

export default function Table({ transactions }: Props) {
  return (
    <div className="relative overflow-auto rounded-b-xl">
      <table className="w-full text-xs md:text-sm text-left text-lightgray">
        <thead className="text-darkgray">
          <tr>
            <TableHeader label="Transacción"></TableHeader>
            <TableHeader label="Fecha y hora"></TableHeader>
            <TableHeader label="Método de pago"></TableHeader>
            <TableHeader label="ID transacción Bold"></TableHeader>
            <TableHeader label="Monto"></TableHeader>
          </tr>
        </thead>
        <tbody>
          {transactions[0] ? (
            transactions.map((transaction: BoldTransaction, index: number) => (
              <TableRow transaction={transaction} key={index} />
            ))
          ) : (
            <tr>
              <td className="px-3 py-2 md:px-6 md:py-3 ">
                No hemos encontrado transacciones
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
