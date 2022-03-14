import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTab: Tab | undefined;
  setSelectedTab: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  setSelectedTab,
  selectedTab,
}) => {
  return (
    <>
      {tabs.map((tab: Tab) => (
        <button
          type="button"
          key={tab.id}
          onClick={() => {
            setSelectedTab(tab);
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
