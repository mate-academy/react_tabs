import { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setselectedTabId] = useState(tabs[0].id);
  const [selectedTabTitle, setSelectedTabTitle] = useState(tabs[0].title);
  const [selectedTabContent, setSelectedTabContent] = useState(tabs[0].content);

  const onTabSelected = (tab: Tab): void => {
    setselectedTabId(tab.id);
    setSelectedTabTitle(tab.title);
    setSelectedTabContent(tab.content);
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {' '}
        {selectedTabTitle}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        selectedTabContent={selectedTabContent}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
