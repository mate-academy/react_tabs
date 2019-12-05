import React from 'react';
import './App.css';
import tabsContent from './tabContent';
import Tabs from './Tabs';

class App extends React.Component {
  state = {
    tabs: tabsContent,
    selectedTab: 0,
  };

  handleSelected = (index) => {
    this.setState({ selectedTab: index });
  };

  render() {
    const { tabs, selectedTab } = this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1>{tabs.length} tabs</h1>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          handleSelected={this.handleSelected}
        />
      </div>
    );
  }
}

export default App;
