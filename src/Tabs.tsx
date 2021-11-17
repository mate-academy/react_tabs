import React from 'react';

type Props = {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => {
  return (
    <>
      {tabs.map(tab => (
        <div
          key={tab.id}
          className="tabs__item"
        >
          <button
            type="button"
            onClick={() => onTabSelected(tab)}
            className={selectedTabId === tab.id
              ? 'tabs__button--active'
              : 'tabs__button'}
          >
            {tab.title}
          </button>
        </div>
      ))}
    </>
  );
};
