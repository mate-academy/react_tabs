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
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
          >
            {selectedTab.title === tab.title && (selectedTab.content)}
            <button
              type="button"
              onClick={() => (setSelectedTab(tabs[+tab.id.slice(-1) - 1]))}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
