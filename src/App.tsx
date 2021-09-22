import React from 'react';

import './App.scss';
import { Tabs } from './components/Tab/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'interesting facts' },
  { id: 'tab-2', title: 'Tab 2', content: 'are waiting us ...' },
  { id: 'tab-3', title: 'Tab 3', content: 'Just put the button' },
];

type State = {
  selectedTab: Tab;
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onSelected = (id: string) => {
    const newTab = tabs.find(tab => tab.id === id) || tabs[0];

    this.setState({ selectedTab: newTab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab}
          onTableSelected={this.onSelected}
        />
      </div>
    );
  }
}

export default App;
