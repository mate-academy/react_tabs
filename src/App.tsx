import React, { useState } from 'react';
import Tabs from './Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Content of the first Tab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corrupti corporis suscipit fugiat accusamus doloribus expedita vitae distinctio eum? Quis consequuntur voluptatibus nostrum minus enim fuga assumenda animi voluptatem doloribus!' },
  { id: 'tab-2', title: 'Tab 2', content: 'Content of the second Tab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ratione debitis tempora iure eius esse.' },
  { id: 'tab-3', title: 'Tab 3', content: 'Content of the third Tab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus beatae amet necessitatibus impedit! Nihil, eos! Ab eaque laborum enim. Iste!' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="App">
      <h1>
        Selected tab is
        {' '}
        {selectedTab.title}
      </h1>

      <Tabs
        tabs={tabs}
        onTabSelected={setSelectedTab}
      />

      <div>{selectedTab.content}</div>
    </div>
  );
};

export default App;
