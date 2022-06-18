import React from 'react';

type Props = {
  tabs: Tab[],
  onTabSelected: (arg0: string) => void,
  selectedTabId: string,
};

const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => {
  return (
    <>
      {tabs.map((tab:Tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => {
            if (selectedTabId !== tab.id) {
              onTabSelected(tab.id);
            }
          }}
        >
          {tab.title}
        </button>
      ))}
      <div data-cy="tab-content">
        {tabs.find(el => el.id === selectedTabId)?.content}
      </div>
    </>
  );
};

export default Tabs;
