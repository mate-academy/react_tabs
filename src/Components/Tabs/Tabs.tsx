import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
};

const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <>
    <ul className="tabs">
      {tabs.map(tab => (
        <li key={tab.id}>
          <button
            type="button"
            className={classNames(
              'tabs__tab',
              { 'tabs__tab-selected': tab.id === selectedTab.id },
            )}
            onClick={() => {
              if (tab.id !== selectedTab.id) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    <div className="content">
      {selectedTab.content}
    </div>
  </>
);

export default Tabs;
