import React from 'react';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: React.Dispatch<React.SetStateAction<string>>,
  onTitleSelected: React.Dispatch<React.SetStateAction<string>>
}

export const Tabs: React.FC<Props>
= ({
  tabs,
  selectedTabId,
  onTabSelected,
  onTitleSelected,
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
                onTabSelected(tab.id);
                onTitleSelected(tab.title);
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
