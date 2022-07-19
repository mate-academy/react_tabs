// implement a component here
import React from 'react';
import classNames from 'classnames';
import { Tab } from './Tab';

type TabsType = {
  tabs: Tab[],
  tabChanger(tab: Tab): void,
  currentTab: Tab,
};

export const Tabs: React.FC<TabsType> = ({ tabs, tabChanger, currentTab }) => {
  return (
    <div className="App__container">
      {tabs.map((tab) => {
        const selectTab = currentTab.id === tab.id;
        const active = classNames({
          'App__button--active': selectTab,
        });

        return (
          <button
            key={tab.id}
            type="button"
            className={`App__button ${active}`}
            onClick={() => tabChanger(tab)}
          >
            {tab.title}
          </button>
        );
      })}

      <p className="App__main-content">
        {currentTab.content}
      </p>
    </div>
  );
};
