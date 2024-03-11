import React from 'react';
import cn from 'classnames';
import { Tab } from './Types/Tab';

type Propslist = {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
  selectedTabId: Tab;
};

export const Tabs: React.FC<Propslist> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': selectedTabId.id === tab.id })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== selectedTabId.id) {
                      onTabSelected(tab);
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
        {selectedTabId.content}
      </div>
    </div>
  );
};
