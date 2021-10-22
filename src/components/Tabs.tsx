import React from 'react';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type TabsPropsType = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<TabsPropsType> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      <ul className="Tabslist">
        {tabs.map(tab => (
          <li key={tab.id} className="Tabslist__item">
            <button
              type="button"
              className={classNames('Tabslist__button', { 'Tabslist__button--active': tab.id === selectedTabId })}
              onClick={() => {
                if (tab.id !== selectedTabId) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      {(tabs.find(({ id }) => id === selectedTabId))?.content}
    </>
  );
};
