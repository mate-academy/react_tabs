import React from 'react';

import { Tabs } from './components/Tabs/Tabs';

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
    currentIndex: 0,
  };

  selectedTab = (index) => {
    this.setState({
      currentIndex: index,
    });
  }

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="App">
        <h1>React tabs {currentIndex}</h1>
        <Tabs
          tabs={tabs}
          currentIndex={currentIndex}
          selectedTab={this.selectedTab}
        />

        <p className="content">{tabs[currentIndex].content}</p>
      </div>
    );
  }
}

export default App;
