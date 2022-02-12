import React from 'react';
import classNames from 'classnames';
import { Tab } from '../types/Tab';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (tab: Tab) => void;
};

const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <>
    <ul className="TabList">
      {
        tabs.map(tab => (
          <li
            className="Tab"
            key={`${tab.id}`}
          >
            <button
              className={
                classNames('Tab__button',
                  {
                    active: tab.id === selectedTab.id,
                  })
              }
              type="button"
              value={tab.id}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))
      }
    </ul>
    <p className="TabList__content">
      {selectedTab.content}
    </p>
  </>
);

export default React.memo(Tabs);
