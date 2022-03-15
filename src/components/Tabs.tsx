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
}) => (
  <>
    {tabs.map((tab: Tab) => (
      <button
        type="button"
        key={tab.id}
        onClick={() => {
          if (tab.id !== selectedTab?.id) {
            setSelectedTab(tab);
          }
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
