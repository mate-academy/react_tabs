import React from 'react';

import './App.scss';

import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  allTabs: Tab[],
  selectedTab: Tab,
};

class App extends React.Component<{}, State> {
  state: State = {
    allTabs: [...tabs],
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({
      selectedTab: tab,
    });
  };

  render() {
    const { allTabs, selectedTab } = this.state;

    return (
      <div className="App">
        <div className="ui segment">
          <h1>
            Selected tad is&nbsp;
            {selectedTab.title}
          </h1>
          <Tabs
            tabs={allTabs}
            onTabSelected={this.onTabSelected}
            selectedTab={selectedTab}
          />
          <div
            className="ui bottom attached tab segment active"
            data-tab={selectedTab.id}
          >
            <p>
              {selectedTab.content}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
