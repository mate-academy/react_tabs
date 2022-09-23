import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleTabSelected = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      return onTabSelected(tab);
    }

    return null;
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={classNames({
                  'is-active': selectedTab?.id === tab.id,
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() => handleTabSelected(tab)}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        data-cy="TabContent"
        className="block"
      >
        {selectedTab.content}
      </div>
    </div>
  );
};
