import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (chosenTab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs, selectedTabId, onTabSelected,
}) => {
  return (
    <div className="tab">
      {tabs.map((tab) => {
        return (
          <button
            key={tab.id}
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              onTabSelected(tab);
            }}
            className={selectedTabId === tab.id
              ? 'tab__button button--selected'
              : 'tab__button'}
          >
            {tab.title}
          </button>
        );
      })}
    </div>
  );
};
