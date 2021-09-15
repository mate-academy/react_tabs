import React from 'react';

interface Props {
  tabs: Tab[];
  onTabSelected: (tab: string) => void;
  selectedTab: Tab | undefined;
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, onTabSelected, selectedTab } = props;

  return (
    <>
      <nav>
        <div
          className="nav nav-tabs"
          id="nav-tab"
          role="tablist"
        >
          {tabs.map(tab => (
            <button
              className={`nav-link ${selectedTab && tab.id === selectedTab.id && 'active'}`}
              data-bs-toggle="tab"
              type="submit"
              onClick={() => onTabSelected(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </nav>
      <div className="tab-content">
        {selectedTab && selectedTab.content}
      </div>
    </>

  );
};
