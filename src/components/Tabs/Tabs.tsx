import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../react-app-env';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};
type OnSelectTab = (id: string, tab: Tab) => void;

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const onSelectTab: OnSelectTab = (id, tab) => {
    if (selectedTabId !== id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': selectedTab.id === tab.id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onSelectTab(tab.id, tab)}
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
