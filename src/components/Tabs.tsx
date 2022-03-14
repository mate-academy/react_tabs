import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTab: Tab | undefined;
  setSelectedTabId: (value: string) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  setSelectedTabId,
  selectedTab,
}) => {
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
      <div>
        {selectedTab?.content}
      </div>
    </>
  );
};
