import React from 'react';

interface Props {
  tabs: Tab[];
  selectedTabId: string | null;
  onTabSelected: (tab: string) => void;
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {tabs.map(tab => (
            <button
              className={`nav-link ${tab.id === selectedTabId && 'active'}`}
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
