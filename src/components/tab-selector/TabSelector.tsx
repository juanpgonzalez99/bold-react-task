import { useEffect, useState } from 'react';
import TabElement from './tab/Tab';

type TabSelectorProps = {
  tabs: string[];
  sendSelectedTabToParent: (arg: number) => void;
};

export default function TabSelector({
  tabs,
  sendSelectedTabToParent,
}: TabSelectorProps) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  useEffect(() => {
    sendSelectedTabToParent(selectedTabIndex);
  }, [selectedTabIndex]);

  return (
    <div className="grid grid-cols-3 gap-6 bg-white px-2 py-1 w-full">
      {tabs.map((tab, index) => (
        <TabElement
          name={tab}
          isSelected={selectedTabIndex === index}
          onClick={() => setSelectedTabIndex(index)}
          key={index}
        />
      ))}
    </div>
  );
}
