import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import { Content } from './components/Content/Content';

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

  chooseTab = (tab) => {
    this.setState({ selectedTab: tab });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is ${selectedTab.content}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          chooseTab={this.chooseTab}
        />
        <Content tab={selectedTab} />
      </div>
    );
  }
}

export default App;
