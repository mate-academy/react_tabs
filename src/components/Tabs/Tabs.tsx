import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (currentlySelectedTab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs, selectedTabId, onTabSelected,
}) => {
  return (
    <div className="App__buttons">
      {tabs.map((tab) => {
        return (
          <button
            onClick={(event) => {
              event.preventDefault();
              onTabSelected(tab);
            }}
            type="submit"
            key={tab.id}
            className={selectedTabId === tab.id
              ? 'App__buttons-item App__buttons-item--selected'
              : 'App__buttons-item'}
          >
            {tab.title}
          </button>
        );
      })}
    </div>
  );
};
