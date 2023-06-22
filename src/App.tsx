import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface TabType {
  id: string;
  title: string;
  content: string;
}

type TabListProps = {
  tab: TabType[],
};

export const App: React.FC<TabListProps> = () => {
  const [activeTab, seActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: TabType) => {
    seActiveTab(tab);
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {` ${activeTab.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tabItem) => (
              <li
                key={tabItem.id}
                className={tabItem === activeTab ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tabItem.id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabClick(tabItem)}
                >
                  {tabItem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      </div>
    </div>
  );
};
