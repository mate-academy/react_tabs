import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: string;
  contentOfSelectedTab: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: 'Tab 1',
    contentOfSelectedTab: 'Some text 1',
  };

  handleTabChange = (tab: Tab) => {
    this.setState({
      selectedTab: `${tab.title}`,
      contentOfSelectedTab: `${tab.content}`,
    });
  };

  render() {
    const { selectedTab, contentOfSelectedTab } = this.state;

    return (
      <div className="App">
        <h1 className="selected-tab">
          {`Selected tab is ${selectedTab}`}
        </h1>
        <Tabs
          copyTabs={[...tabs]}
          handleTabChange={this.handleTabChange}
          content={contentOfSelectedTab}
        />
      </div>
    );
  }
}

export default App;
