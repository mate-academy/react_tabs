import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
<<<<<<< HEAD
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
=======
  const [selectedTab, setselectedTab] = useState(tabs[0]);
>>>>>>> 25163d1aef2584aa56b7e23996e6a278586af816

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
<<<<<<< HEAD
        setSelectedTab={setSelectedTab}
=======
        setselectedTab={setselectedTab}
>>>>>>> 25163d1aef2584aa56b7e23996e6a278586af816
        selectedTab={selectedTab}
      />

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>

    </div>
  );
};
