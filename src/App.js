import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.PureComponent {
  state = {
    selectedTab: tabs[0],
  }

  selectTab = (tab) => {
    this.setState({
      selectedTab: tab,
    });
  }

  render() {
    const { selectedTab } = this.state;
    const { selectTab } = this;

    return (
      <div className="App card">
        <h1 className="title is-primary">
          {`Selected tab is ${selectedTab.title}`}
        </h1>
        <p className="subtitle">
          {`${selectedTab.title} is selected`}
        </p>
        <Tabs
          appTabs={tabs}
          onTabSelected={selectTab}
          selectedTabId={selectedTab.id}
        />
      </div>
    );
  }
}

export default App;
