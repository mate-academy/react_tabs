import React from 'react';

import './App.scss';
import { TabsList } from './components/TabsList';

const sourceTabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  tabs: Tab[];
  selectedTab: Tab | undefined;
}

class App extends React.Component<{}, State> {
  state = {
    tabs: [...sourceTabs],
    selectedTab: sourceTabs[0],
  };

  changeSelect = (tabId: string) => {
    this.setState(state => ({
      selectedTab: state.tabs.find(tab => tab.id === tabId),
    }));
  };

  render() {
    const { tabs, selectedTab } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is ${selectedTab.title}`}</h1>
        <div>
          <TabsList
            tabs={tabs}
            selectedTab={selectedTab}
            onChange={this.changeSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
