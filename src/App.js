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
    activeClass: 'tabs__tab--active',
  };

  onTabSelected = (i) => {
    this.setState({
      tabIndex: i,
    });
  }

  render() {
    const { tabs, tabIndex, activeClass } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          onTabSelected={this.onTabSelected}
          tabIndex={tabIndex}
          activeClass={activeClass}
        />
      </div>
    );
  }
}

export default App;
