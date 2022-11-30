import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab)=>void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  const selectedTab = (tabs.find(tab => tab.id === selectedTabId) || tabs[0]);

  const handleClickTab = (newTab: Tab) => {
    if (newTab.id !== selectedTabId) {
      onTabSelected(newTab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul data-cy="tab-content">
          { tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames(
                {
                  'is-active': tab.id === selectedTab.id,
                },
              )}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClickTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
