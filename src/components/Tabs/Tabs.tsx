import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabs: Tab) => void;

};

export const Tabs:React.FC<Props> = (
  { tabs, selectedTabId, onTabSelected },
) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={classNames(
            { 'is-active': tab.id === selectedTabId },
          )}
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            onClick={() => {
              if (tab.id !== selectedTabId) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>

  );
};
