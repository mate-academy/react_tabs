import React from 'react';
import classNames from 'classnames';

import { Tab } from '../../types/Tabs';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isCurrentSelected = id === selectedTab.id;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames({
                  'is-active': isCurrentSelected,
                })}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isCurrentSelected) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="block" data-cy="TabContent">
        {selectedTab.content}
      </p>
    </div>
  );
};
