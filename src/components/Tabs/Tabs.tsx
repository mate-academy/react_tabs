import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTabId: string,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const updateSelectedTab = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  const selectedTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': selectedTab?.id === tab.id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => updateSelectedTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content}
      </div>
    </div>
  );
};
