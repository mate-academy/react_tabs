import React from 'react';
import { Tabs } from './components/tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab | null;
  selectedTabId: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
    selectedTabId: tabs[0].id,
  };

  onTabSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;

    const currentTab = tabs.find(tab => tab.id === id) || null;

    this.setState({
      selectedTab: currentTab,
      selectedTabId: id,
    });
  };

  render() {
    const { selectedTab, selectedTabId } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedTab && (`${selectedTab.title} is selected`)}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={this.onTabSelected}
        />

        <p>{selectedTab && selectedTab.content}</p>
      </div>
    );
  }
}

export default App;
