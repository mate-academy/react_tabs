import React from 'react';
import classNames from 'classnames';
import { Tab } from '../types/Tab';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id);

  return (
    <>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            className={classNames(
              'tabs__item',
              { 'tabs__item--selected': selectedTabId === tab.id },
            )}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <p>{selectedTab?.content}</p>
    </>
  );
};
