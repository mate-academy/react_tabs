import React from 'react';
import { Tabs } from './component/Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTabId: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedTabId: tabs[0].id,
  };

  onTabSelected = (tabId: string) => {
    this.setState({
      selectedTabId: tabId,
    });
  };

  findTab = (tabId: string) => {
    return tabs.find(tab => tab.id === tabId) || tabs[0];
  };

  render() {
    const { selectedTabId } = this.state;
    const selectedTab = this.findTab(selectedTabId);

    return (
      <div className="App">
        <h1 className="App__title">
          {'Selected tab is: '}
          <span className="currentTabs">
            {selectedTab.title}
          </span>
        </h1>

        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
