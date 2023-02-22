import classNames from 'classnames';
import React from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <ul>
    {tabs.map(tab => (
      <li
        className={classNames({
          'is-active': selectedTabId === tab.id
        })}
        data-cy="Tab"
        key={tab.id}
      >
        <a
          href={`#${tab.id}`}
          data-cy="TabLink"
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
