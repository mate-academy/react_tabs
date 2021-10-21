import React from 'react';
import { Tabs } from './Components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTabId: string;
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
      <div className="App">
        <h1 className="App__title">
          Selected tab is
          {' '}
          {selectedTab.title}
        </h1>
        <div className="tabs">
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTabId}
            onTabClick={this.onTabClick}
          />
          <div className="tabs__content">
            {selectedTab.content}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
