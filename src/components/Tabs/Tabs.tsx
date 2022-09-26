import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  onTabSelected: (tabs: Tab) => void,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const selectedTab = tabs
    .find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {(tabs.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === selectedTab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  return ((tab.id !== selectedTab.id)
                    && (onTabSelected(tab)));
                }}
              >
                {tab.title}
              </a>
            </li>
          )))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {(selectedTab.content)}
      </div>
    </div>
  );
};
