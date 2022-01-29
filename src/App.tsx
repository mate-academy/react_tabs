import React from 'react';
import { Tabs } from './component/Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTabId: string
};

class App extends React.PureComponent<{}, State> {
  state = {
    selectedTabId: 'tab-1',
  };

  handleSelectTab = (tabId: string) => {
    this.setState({
      selectedTabId: tabId,
    });
  };

  render() {
    const { selectedTabId } = this.state;
    const selectedTab = tabs.find((tab) => tab.id === selectedTabId);

    return (
      <div className="App">
        <h1 className="title">
          Selected tab is&nbsp;
          {selectedTab?.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.handleSelectTab}
        />
      </div>
    );
  }
}

export default App;
