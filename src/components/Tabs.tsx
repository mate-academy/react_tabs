import React from 'react';
import classNames from 'classnames';

import { Tab } from '../react-app-env';

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
            className="Tabs__tab-link text-decoration-none"
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
