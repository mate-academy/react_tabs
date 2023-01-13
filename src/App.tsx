import React, { useState } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './components/Tabs/types/Tab';

export const tabs: Tab[] = [
  {
    id: 'tab-1',
    title: 'Tab 1',
    content: 'First week with React. BTW the second too.',
    cat: 1,
  },
  {
    id: 'tab-2',
    title: 'Tab 2',
    content: 'Ihor said he was upset. OMG whats wrong with us, dudes.',
    cat: 2,
  },
  {
    id: 'tab-3',
    title: 'Tab 3',
    content: 'But we are sweet bulochki and can do it! Move your bulochki!',
    cat: 3,
  },
];

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className={cn(
      'section',
      {
        'dark-mode': darkMode,
        'light-mode': !darkMode,
      },
    )}
    >
      <div className="container">
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
      </div>

      <h1
        className={cn(
          'title',
          {
            'dark-mode--title': darkMode,
          },
        )}
      >
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        selectedOnTab={setSelectedTab}
      />

      <img
        src=""
        alt=""
        className={`cat${selectedTab.cat}`}
      />
    </div>
  );
};
