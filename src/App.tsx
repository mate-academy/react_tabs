import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTabId: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedTabId: 'tab-1',
  };

  onTabClick = (id: string) => {
    this.setState({
      selectedTabId: id,
    });
  };

  render() {
    const { selectedTabId } = this.state;
    const selectedTab = tabs.find(tab => tab.id === this.state.selectedTabId) || tabs[0];

    return (
      <>
        <div className="App">
          <h1>
            {selectedTab.title}
          </h1>
          <div>
            <Tabs
              tabs={tabs}
              selectedTabId={selectedTabId}
              onTabClick={this.onTabClick}
            />
          </div>
          <div>
            {selectedTab.content}
          </div>
        </div>
      </>
    );
  }
}

export default App;
