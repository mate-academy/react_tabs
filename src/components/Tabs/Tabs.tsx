import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/tabType';

type Props = {
  selectedTabId: string,
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  selectedTabId,
  tabs,
  onTabSelected,
}) => {
  // eslint-disable-next-line max-len
  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': selectedTabId === tab.id,
              })}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={() => tab.id !== selectedTabId && onTabSelected(tab)}
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
