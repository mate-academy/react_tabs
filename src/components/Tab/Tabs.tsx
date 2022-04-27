import React from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (target: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => (
  <>
    <nav className="nav">
      {tabs.map(tab => (
        <button
          key={tab.id}
          type="button"
          onClick={() => {
            if (tab.id !== selectedTab.id) {
              onTabSelected(tab);
            }
          }}
          className={selectedTab
            ? 'nav__item nav__item--active'
            : 'nav__item'}
        >
          {tab.title}
        </button>
      ))}
    </nav>

    <div className="nav__content">
      {selectedTab.content ? selectedTab.content : 'No data'}
    </div>
  </>
);
