import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTabId: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedTabId: 'tab-1',
  };

  hangeTable = (id: string) => {
    this.setState({ selectedTabId: id });
  };

  render() {
    const { selectedTabId } = this.state;
    const { hangeTable } = this;
    const selectedTab = tabs.find(tab => tab.id === this.state.selectedTabId) || tabs[0];

    return (
      <div>
        <div className="App">
          <h1>
            {' '}
            {selectedTab.title}
          </h1>
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTabId}
            hangeTable={hangeTable}
          />
        </div>
        <div>
          {selectedTab.content}
        </div>
      </div>
    );
  }
}
