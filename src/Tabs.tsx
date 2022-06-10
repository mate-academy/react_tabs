import React from 'react';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (id: string) => void,
}

export const Tabs: React.FC<Props>
= ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTab = tabs.find(tab => selectedTabId === tab.id);

  return (
    <div className="content">
      <div className="buttons">
        {tabs.map(tab => (
          <span
            key={tab.id}
            className="item"
          >
            <button
              className="button is-primary is-outlined"
              type="button"
              onClick={() => {
                if (selectedTabId !== tab.id) {
                  onTabSelected(tab.id);
                }
              }}
            >
              {tab.title}
            </button>
          </span>
        ))}
      </div>
      <div className="input is-success">
        {currentTab?.content}
      </div>
    </div>
  );
};
