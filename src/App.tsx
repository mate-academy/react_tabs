import { useState } from 'react';
import type { FC } from 'react';
import { Tabs } from './components/Tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const selectTab = (tabId: string) => {
    if (tabs.find((tab) => tab.id === tabId)) {
      setSelectedTab(tabId);
    } else {
      setSelectedTab(tabs[0].id);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${tabs.find((tab) => tab.id === selectedTab)?.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <Tabs
                key={tab.id}
                tab={tab}
                onSelect={selectTab}
                isActive={tab.id === selectedTab}
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs.find((tab) => tab.id === selectedTab)?.content}
        </div>
      </div>
    </div>
  );
};
