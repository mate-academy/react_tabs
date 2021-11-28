import React from 'react';
import classNames from 'classnames';

import { Tab } from '../../types/Tab';

import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (newSelectedTab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <section className="Tabs">
      <ul className="Tabs__nav">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={classNames('Tabs__tab-title', {
              'Tabs__tab-title--active': tab.id === selectedTab.id,
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
      {selectedTab.content}
    </section>
  );
};
