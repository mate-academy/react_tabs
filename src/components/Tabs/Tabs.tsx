import React from 'react';
import classNames from 'classnames';

import { Tab } from '../../types/tab';

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
  const selectedPage = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedPage.id) {
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
                data-cy="Tab"
                key={tab.id}
                className={
                  classNames({ 'is-active': selectedPage.id === tab.id })
                }
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(tab)}
                >
                  {tab.title}
                </a>
              </li>

            ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedPage.content}
      </div>
    </div>
  );
};
