import React from 'react';
import { Tab } from './components/Tab';
import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  }

  switchTabs = (tabId) => {
    this.setState({
      selectedTab: tabs.find(tab => tab.id === tabId),
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected tab is ${selectedTab.title}`}
        </h1>
        <Tab
          tabs={tabs}
          selectedTab={selectedTab}
          switchTabs={this.switchTabs}
        />
      </div>
    );
  }
}

export default App;
