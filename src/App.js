import React from 'react';
import './App.css';

import Tabs from './components/Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],

    selectedTab: 0,
  };

  HandleSelect = (id) => {
    this.setState({ selectedTab: id });
  };

  render() {
    const { tabs, selectedTab } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          onTabSelected={this.HandleSelect}
          selectedTab={selectedTab}
        />
      </div>
    );
  }
}

export default App;
