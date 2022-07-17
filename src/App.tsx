import React, { useState } from 'react';

import './App.scss';
import Tabs from './Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectContent, setSelectContent] = useState(tabs[0].content);
  const [selectTab, setSelectTab] = useState(tabs[0].id);

  const setContent = (content: string, tabId: string) => {
    setSelectContent(content);
    setSelectTab(tabId);
  };

  return (
    <div className="App">
      <ul className="list">
        {tabs.map(tab => (
          <Tabs
            tab={tab}
            onSet={setContent}
            selectCheck={selectContent}
          />
        ))}
      </ul>
      <h1>
        Selected tab is
        &nbsp;
        {selectTab}
        &nbsp;
        {selectContent}
      </h1>
    </div>
  );
};

export default App;
