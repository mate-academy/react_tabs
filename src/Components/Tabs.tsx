import React from 'react';

type SelectTab = (id: string) => void;

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  select: SelectTab,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, select }) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => {
        return (
          <button
            type="button"
            className={
              selectedTabId === tab.id
                ? 'tabs__button tabs__button--active'
                : 'tabs__button'
            }
            onClick={() => {
              select(tab.id);
            }}
          >
            {tab.title}
          </button>
        );
      })}
    </div>
  );
};
