import React from 'react';
import classNames from 'classnames';
import { Tab } from './Tab';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: React.Dispatch<React.SetStateAction<Tab>>;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  let selectedTab = tabs[0];

  const handleTabSelect = (isTabSelected: boolean, tab: Tab) => {
    if (!isTabSelected) {
      onTabSelected(tab);
    }
  };

  return (
    <div className="tabs">
      {tabs.map(tab => {
        const isTabSelected = selectedTabId === tab.id;

        if (isTabSelected) {
          selectedTab = tab;
        }

        return (
          <button
            key={tab.id}
            type="button"
            className={classNames(
              'tabs__button',
              { 'tabs__button--active': isTabSelected },
            )}
            onClick={() => handleTabSelect(isTabSelected, tab)}
          >
            {tab.title}
          </button>
        );
      })}
      <hr className="tabs__divider" />
      <p data-cy="tab-content">
        {selectedTab.content}
      </p>
    </div>
  );
};
