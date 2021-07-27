import React from 'react';
import './App.scss';
import { Tab } from './components/Tab/Tabs';

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

  changeTab = (id) => {
    this.setState({
      selectedTab: tabs.find(tab => tab.id === id),
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          { selectedTab.title }
        </h1>

        <Tab
          tabs={tabs}
          changeTab={this.changeTab}
          content={this.state.selectedTab.content}
        />

      </div>
    );
  }
}

export default App;
