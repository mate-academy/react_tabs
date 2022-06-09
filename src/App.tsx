import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [content, setContent] = useState(tabs[0].content);

  const selectedTab = () => {
    const choseTab = tabs.find(tab => tab.content === content);

    return choseTab?.title;
  };

  return (
    <div className="App">
      <h1>
        {`Select tab is ${selectedTab()}`}
      </h1>
      <Tabs
        tabs={tabs}
        content={content}
        setContent={setContent}
      />
    </div>
  );
};

export default App;
