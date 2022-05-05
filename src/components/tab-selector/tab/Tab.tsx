import { MouseEventHandler } from 'react';

export type Tab = {
  name: string;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function TabElement({ name, isSelected, onClick }: Tab) {
  return (
    <button
      type="button"
      className={[
        'rounded-3xl h-fit w-full py-[2px] text-blue bg-white text-center cursor-pointer',
        isSelected && 'bg-lightgray bg-opacity-30 font-bold',
      ].join(' ')}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
