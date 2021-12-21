import React from 'react';
import './App.scss';
import Tabs from './components/Tabs/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: Tab,
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tabId: Tab) => {
    this.setState({ selectedTab: tabId });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <>
        <h1>
          {`Selected tab is ${selectedTab.title}`}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.onTabSelected}
        />
      </>
    );
  }
}

export default App;
