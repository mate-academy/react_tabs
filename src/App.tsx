import React, { useState } from 'react';
import { Tabs } from './Tabs';

import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [arrayTabs] = useState([...tabs]);
  const [selectedTabId, setSelectedTabId] = useState('tab-1');
  const [selectedContent, setSelectedContent] = useState('Some text 1');

  return (
    <div className="App">
      <Tabs
        arrTabs={arrayTabs}
        selTabId={selectedTabId}
        selContent={selectedContent}
        onChangeButton={setSelectedTabId}
        onChangeContent={setSelectedContent}
      />
    </div>
  );
};

export default App;
