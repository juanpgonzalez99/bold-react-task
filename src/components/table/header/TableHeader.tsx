type Props = {
  label: string;
};

export default function TableHeader({ label }: Props) {
  return (
    <th scope="col" className="px-3 py-2 md:px-6 md:py-3 font-semibold">
      {label}
    </th>
  );
}
