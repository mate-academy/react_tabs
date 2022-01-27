import React from 'react';

import './App.scss';
import { Tabs } from './Components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: string,
  selectedTabId: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: 'Tab 1',
    selectedTabId: 'tab-1',
  };

  getContent = () => {
    const content = tabs.find(tab => tab.id === this.state.selectedTabId)?.content || null;

    return content;
  };

  handleTabChange = (tab: Tab) => {
    this.setState({
      selectedTab: tab.title,
      selectedTabId: tab.id,
    });
  };

  render() {
    const { selectedTab, selectedTabId } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          onTabSelected={(tab) => {
            this.handleTabChange(tab);
          }}
          selectedTabId={selectedTabId}
          content={this.getContent()}
        />
        <h1>
          Selected tab is&nbsp;
          {selectedTab}
        </h1>
      </div>
    );
  }
}

export default App;
