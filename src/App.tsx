import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './components/Tabs/Tab';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  );

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${activeTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        onActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </div>
  );
};

export default App;
