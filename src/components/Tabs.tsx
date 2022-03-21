import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

const handleClick = (tabId: string, tab: Tab, onTabSelected: (tab:Tab) => void) => {
  if (tab.id !== tabId) {
    onTabSelected(tab);
  }
};

const getTab = (tabId: string, tabs: Tab[]) => {
  const currentTab = tabs.find(tab => tab.id === tabId);

  return currentTab === undefined ? tabs[0] : currentTab;
};

export const Tabs: React.FC<Props> = ({ selectedTabId, tabs, onTabSelected }) => {
  return (
    <>
      <div className="tab">
        {tabs.map(tab => (
          <button
            className="tablinks"
            key={tab.id}
            type="button"
            onClick={() => handleClick(selectedTabId, tab, onTabSelected)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tabcontent">
        <p>
          {getTab(selectedTabId, tabs).content}
        </p>
      </div>
    </>
  );
};
