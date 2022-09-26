import { useState } from 'react';
import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [tab, setTab] = useState(tabs[0]);

  const {
    id,
    title,
  } = tab;

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleTab = (tab: Tab) => {
    setTab(tab);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${title}`}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={id}
        onTabSelected={handleTab}
      />
    </div>
  );
};
