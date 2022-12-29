import { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface Tab {
  id: string,
  title: string,
  content: string,
}

export const App = () => {
  const [selected, setSelected] = useState(tabs[0]);

  const onTabSelected = (tab: Tab) => {
    if (selected !== tab) {
      setSelected(tab);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selected.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            selectedTab={selected}
            tabs={tabs}
            onTabSelected={onTabSelected}
          />
        </div>

        <div className="block" data-cy="TabConten">
          {selected.content}
        </div>
      </div>
    </div>
  );
};
