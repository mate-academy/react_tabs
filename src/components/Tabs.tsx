import React from 'react';

type Props = {
  tabs: Tab[];
  setSelectedTabId: (value: string) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, setSelectedTabId }) => {
  return (
    <>
      {tabs.map((tab: Tab) => (
        <button
          type="button"
          key={tab.id}
          onClick={() => {
            setSelectedTabId(tab.id);
          }}
        >
          {tab.title}
        </button>
      ))}
    </>
  );
};
