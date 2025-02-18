import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { useState } from 'react';

export type Tab = {
  id: string;
  title: string;
  content: string;
};

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const setTab = (id: string) => {
    setSelectedTabId(id);
  };

  const title = tabs.filter(tab => tab.id === selectedTabId)[0].title;

  const content = tabs.filter(tab => tab.id === selectedTabId)[0].content;

  return (
    <div className="section">
      <h1 className="title">Selected tab is {title}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs tabs={tabs} selectedTab={selectedTabId} setTab={setTab} />

          {/* <li className="is-active" data-cy="Tab">
              <a href="#tab-1" data-cy="TabLink">
                Tab 1
              </a>
            </li>

            <li data-cy="Tab">
              <a href="#tab-2" data-cy="TabLink">
                Tab 2
              </a>
            </li>

            <li data-cy="Tab">
              <a href="#tab-3" data-cy="TabLink">
                Tab 3
              </a>
            </li> */}
        </div>

        <div className="block" data-cy="TabContent">
          {content}
        </div>
      </div>
    </div>
  );
};
