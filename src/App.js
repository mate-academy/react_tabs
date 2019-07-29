/* eslint-disable */
import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

const initialTtabs = [
  { title: 'Tab 1', content: 'Some text 1' },
  { title: 'Tab 2', content: 'Some text 2' },
  { title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component {
  state = {
    tabs: initialTtabs.map((tab, i) => ({
      ...tab,
      id: i,
    })),
    selectedTabId: undefined,
    selectedTabText: '',
  };

  selectTab = (tabId) => {
    const selectedTab = this.state.tabs
      .filter(tab => Number(tab.id) === Number(tabId))[0];

    this.setState({
      selectedTabText: selectedTab.content,
      selectedTabId: Number(tabId),
    });
  };

  render() {
    const { tabs, selectedTabText, selectedTabId } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          id={selectedTabId}
          selectTab={this.selectTab}
        />
        <div className="tabs__body">
          <p>{selectedTabText}</p>
        </div>
      </div>
    );
  }
}

export default App;
