import { FC, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './Types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);

  const handleTabSelect = (nextTab: Tab) => {
    if (nextTab.id !== selectedTab.id) {
      setSelectedTab(nextTab);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab ${selectedTab.title}`}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onTabSelected={handleTabSelect}
      />
    </div>
  );
};

export default App;
