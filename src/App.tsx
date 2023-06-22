import { FC, useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tab } from './types';
import { Tabs } from './components/Tabs/Tabs';

export const allTabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: FC = () => {
  const [tabs] = useState<Tab[]>(allTabs);
  const [selectedTabId, setSelectedTabId] = useState<string>('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!selectedTabId) {
      setSelectedTabId('tab-1');
    }

    const tab = tabs.find(tabItem => tabItem.id === selectedTabId) || tabs[0];

    setTitle(tab?.title);
    setContent(tab?.content);
  }, [selectedTabId]);

  const onTabSelected = (id: string): void => {
    setSelectedTabId(id);
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {title}
      </h1>

      <div data-cy="TabsComponent">
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={onTabSelected}
        />
        {/* <div className="tabs is-boxed">
          <ul>
            <li className="is-active" data-cy="Tab">
              <a href="#tab-1" data-cy="TabLink">Tab 1</a>
            </li>

            <li data-cy="Tab">
              <a href="#tab-2" data-cy="TabLink">Tab 2</a>
            </li>

            <li data-cy="Tab">
              <a href="#tab-3" data-cy="TabLink">Tab 3</a>
            </li>
          </ul>
        </div> */}

        <div className="block" data-cy="TabContent">
          {content}
        </div>
      </div>
    </div>
  );
};
