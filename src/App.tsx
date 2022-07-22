import React, { useState } from 'react';
import classNames from 'classnames';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './types/tab';

import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onTabSelected = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      setSelectedTab(tab);
    }
  };

  return (
    <div className="App">
      <div className="section">
        <h1 className="title">
          {`Selected tab is ${selectedTab.title}`}
        </h1>

        <div>
          <Tabs
            data-cy="tab-content"
            tabs={tabs}
            selectedTabId={selectedTab}
            onTabSelected={onTabSelected}
          />
        </div>

        <div
          className={classNames('block', {
            blockOne: selectedTab.id === String('tab-1'),
            blockTwo: selectedTab.id === String('tab-2'),
            blockThree: selectedTab.id === String('tab-3'),
          })}
          data-cy="tab-content"
        >
          {`${selectedTab.content}`}
        </div>
      </div>
    </div>
  );
};
