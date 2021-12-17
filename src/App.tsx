import React from 'react';

import { Tab } from './types/Tab/Tab';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab,
};

class App extends React.PureComponent<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({
      selectedTab: tab,
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <>
        <div className="App">
          <h1>
            {`Select tab is ${selectedTab.title}`}
          </h1>
          <Tabs tabs={tabs} selectedTabId={selectedTab.id} onTabSelected={this.onTabSelected} />
          <p className="tab-content">{selectedTab.content}</p>
        </div>
      </>
    );
  }
}

export default App;
