import React, { useState } from 'react';
import { tabs } from '../tabs';

export const Tab: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs.find(x => x.id === 'tab-1'));

  return (
    <div>
      <h1>
        Selected tab is
        {selectedTab && (` ${selectedTab.title}`)}
      </h1>
      <div className="column">
        <div className="text">
          {selectedTab && (selectedTab.content)}
        </div>
        <ul>
          {tabs.map(tab => (
            <li
              className="row"
              key={tab.id}
            >
              <button
                type="button"
                className={selectedTab && (selectedTab.id === tab.id ? 'button active' : 'button')}
                onClick={() => (setSelectedTab(tabs.find(x => x.id === tab.id)))}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
