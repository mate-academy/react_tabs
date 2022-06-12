import './App.scss';
import { useState } from 'react';
import { Tab } from './react-app-env';
import { Tabs } from './components/Tabs/Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [titleId, setTitleId] = useState(tabs[0].id);

  const selectedTabId = (tabId: string) => (
    setTitleId(tabId)
  );

  return (
    <div className="tab">
      <h1 className="tab__title title m-6">{`Selected tab is ${(tabs.filter(tab => tab.id === titleId))[0].title}`}</h1>
      <Tabs tabs={tabs} selectedTabId={selectedTabId} />
    </div>
  );
};

export default App;
