import React from 'react';
import classNames from 'classnames';

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
            onClick={() => {
              onTabSelected(tab);
            }}
            type="submit"
            key={tab.id}
            className={classNames('App__buttons-item', {
              'App__buttons-item--selected': selectedTabId === tab.id,
            })}
          >
            {tab.title}
          </button>
        );
      })}
    </div>
  );
};
