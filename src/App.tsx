import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs, getTabById } from './components/Tabs';
// import { Tab } from './types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const onTabSelect = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const { target } = event;

    const { attributes } = target as HTMLAnchorElement;

    const href = attributes[0].value;

    const id = getTabById(href.slice(1), tabs).id || tabs[0].id;

    if (!(href.slice(1) === selectedTabId)) {
      setSelectedTabId(id);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        {'Selected tab is '}
        {getTabById(selectedTabId, tabs).title}
      </h1>

      <Tabs
        tabs={tabs}
        selected={getTabById(selectedTabId, tabs)}
        onTabSelect={onTabSelect}
        selectedTabId={selectedTabId}
        setSelectedTabId={setSelectedTabId}
      />
    </div>
  );
};
