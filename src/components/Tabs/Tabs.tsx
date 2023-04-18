import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabId: Tab) => void,
};

export const Tabs: React.FC<Props> = (
  { tabs, selectedTabId, onTabSelected },
) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);
  let id = selectedTabId;

  if (!selectedTab) {
    id = tabs[0].id;
  }

  const selectTab = (tab: Tab) => {
    if (id !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li
                className={classNames({
                  'is-active': id === tab.id,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => selectTab(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {
          selectedTab?.content
        }
      </div>
    </div>
  );
};
