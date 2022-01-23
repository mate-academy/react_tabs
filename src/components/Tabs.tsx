import React from 'react';
import { Tab } from '../types/tab';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onChangeTab: (tab: Tab) => void,
};

const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onChangeTab }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              className={`tab ${(tab === selectedTab ? 'tab--active' : '')}`}
              onClick={() => {
                if (tab !== selectedTab) {
                  onChangeTab(tab);
                }
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
