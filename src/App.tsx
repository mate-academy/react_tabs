import { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is&nbsp;
        {tabs.find(el => el.id === selectedTabId)?.title}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        setSelectedTabId={setSelectedTabId}
      />
    </div>
  );
};

export default App;
