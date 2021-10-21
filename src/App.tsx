import React from 'react';

import './App.scss';
import Tabs from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Lorem ipsum dolor sit amet, consect' },
];

type State = {
  selectedTab: Tab ;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <div className="p-8">
          <h1 className="text-4xl font-extrabold">
            {'Selected tab is '}
            {selectedTab.title}
          </h1>
          <Tabs tabs={tabs} onTabSelected={this.onTabSelected} selectedTabId={selectedTab.id} />
          <div className="content">
            <div id="tabs1">
              <p>{selectedTab.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
