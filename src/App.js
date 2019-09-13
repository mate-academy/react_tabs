import React, { Component } from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';

class App extends Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
      { title: 'Tab 4', content: 'Some text 4' },
    ],
    tabIndex: 0,
  };

  onTabSelected = (index) => {
    this.setState({
      tabIndex: index,
    });
  }

  render() {
    const { tabs, tabIndex } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          onTabSelected={this.onTabSelected}
          tabIndex={tabIndex}
        />
      </div>
    );
  }
}

export default App;
