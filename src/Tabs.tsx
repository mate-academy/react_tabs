// implement a component here
import React from 'react';
import classNames from 'classnames';
import { Tab } from './Tab';

type TabsType = {
  tabs: Tab[],
  tabChanger(tab: Tab): void,
  currentTab: string,
};

export const Tabs: React.FC<TabsType> = ({ tabs, tabChanger, currentTab }) => {
  return (
    <div>
      {tabs.map((tab) => {
        const active = classNames({
          'App__button--active': currentTab === tab.id,
          App__button: true,
        });

        return (
          <button
            key={tab.id}
            type="button"
            className={active}
            onClick={() => tabChanger(tab)}
          >
            {tab.title}
          </button>
        );
      })}
    </div>
  );
};
