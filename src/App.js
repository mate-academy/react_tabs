import React from 'react';
import { Tabs } from './components/Tabs/Tabs';

import './App.css';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

const preparedTabs = tabs.map((tab, index) => ({
  ...tab,
  id: index,
}));

class App extends React.Component {
  state = {
    currentIndex: 0,
  };

  onTabSelected = (index) => {
    this.setState({
      currentIndex: index,
    });
  }

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="app">
        <h1>
          Selected tab:&nbsp;
          {tabs[currentIndex].title}
        </h1>
        <Tabs
          tabs={preparedTabs}
          index={currentIndex}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
