import React from 'react';
import cn from 'classnames';
import { Tab } from './Types/Tab';

type Propslist = {
  tabs: Tab[];
  findTab: (tab: Tab) => void;
  selectedTab: Tab;
};

export const Tabs: React.FC<Propslist> = ({ tabs, findTab, selectedTab }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': selectedTab.id === tab.id })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== selectedTab.id) {
                      findTab(tab);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
