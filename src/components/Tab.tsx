import React, { useState } from 'react';
import { tabs } from '../tabs';

export const Tab: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div>
      <h1>
        Selected tab is
        {` ${selectedTab.title}`}
      </h1>
      <div className="column">
        <div className="text">
          {selectedTab.content}
        </div>
        <ul>
          {tabs.map(tab => (
            <li
              className="row"
              key={tab.id}
            >
              <button
                type="button"
                className="button"
                onClick={() => (setSelectedTab(tabs[+tab.id.slice(-1) - 1]))}
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
