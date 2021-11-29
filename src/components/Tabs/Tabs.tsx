import React from 'react';
import classNames from 'classnames';

import { Tab } from '../../types/Tab';

import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: Tab['id'];
  onTabSelected: (newSelectedTab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <ul className="Tabs">
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className={classNames('Tabs__tab-title', {
            'Tabs__tab-title--active': tab.id === selectedTabId,
          })}
        >
          <a
            href="/#"
            className="Tabs__tab-link"
            onClick={(event) => {
              onTabSelected(tab);
              event.preventDefault();
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
