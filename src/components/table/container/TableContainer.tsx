import { ReactElement } from 'react';

type Props = { children: ReactElement; currentLabel: string };

export default function TableContainer({ children, currentLabel }: Props) {
  return (
    <div className="h-fit w-full bg-white shadow-md rounded-xl">
      <div className="h-table">
        <div className="w-full h-10 px-8 flex justify-between items-center bg-gradient-to-r from-blue via-blue to to-red rounded-t-xl ">
          <h1 className="text-white text-lg ">{`Tus ventas de ${currentLabel.toLowerCase()}`}</h1>
        </div>
        <div className="h-tablecontent overflow-auto">{children}</div>
      </div>
    </div>
  );
}
