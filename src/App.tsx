import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Tab = {
  id: string,
  title: string,
  content: string,
};

export const App: React.FC = () => {
  const [selectTab, setSelectTab] = React.useState(tabs[0]);

  const onTabSelect = (tab: Tab) => {
    setSelectTab(tab);
  };

  const { id, title, content } = selectTab;

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${title}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <Tabs key={tab.id} id={id} tab={tab} onTabSelect={onTabSelect} />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {content}
        </div>
      </div>
    </div>
  );
};
