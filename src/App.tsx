import React from 'react';

import { Tabs } from './components/Tabs/Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: Tab,
}

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({
      selectedTab: tab,
    });
  };

  render() {
    const { title, id } = this.state.selectedTab;
    const { onTabSelected } = this;

    return (
      <div className="App">
        <h1>
          {`Selected tab is ${title}`}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={id}
          onSelect={onTabSelected}
        />
      </div>
    );
  }
}

export default App;
