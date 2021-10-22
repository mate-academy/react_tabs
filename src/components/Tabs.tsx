import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  selectTab: (tab: Tab) => void,
};

const Tabs: React.FC<Props> = ({ tabs, selectedTab, selectTab }) => {
  return (
    <>
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          value={tab.title}
          onClick={() => {
            if (selectedTab.id !== tab.id) {
              selectTab(tab);
            }
          }}
        >
          {tab.title}
        </button>
      ))}

      <p>
        {selectedTab.content}
      </p>
    </>
  );
};

export default Tabs;
