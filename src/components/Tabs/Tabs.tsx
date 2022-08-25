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
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={classNames(
            {
              'is-active': tab.id === selectedTabId,
            },
          )}
        >
          <a
            href={`#${tab.id}`}
            onClick={() => {
              onTabSelected(tab);
            }}
          >
            {tab.title}
          </a>
        </li>

      ))}
    </ul>

  );
};
