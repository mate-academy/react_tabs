import React from 'react';

import { Tabs } from './components/Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTabId: string;
};

class App extends React.PureComponent<{}, State> {
  state: State = {
    selectedTabId: 'tab-1',
  };

  selectTabHandler = (tabId: string) => {
    this.setState({
      selectedTabId: tabId,
    });
  };

  render() {
    const { selectedTabId } = this.state;
    const selectedTab = tabs.find(tab => tab.id === selectedTabId);

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab?.title}

        </h1>
        <Tabs tabs={tabs} selectedTabId={selectedTabId} selectTabHandler={this.selectTabHandler} />
      </div>
    );
  }
}

export default App;
