import React from 'react';
import { Tabs } from './Tabs';

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
    currentTab: tabs[0],
  };

  onTabSelect = event => (
    this.setState({
      currentTab: tabs.find(tab => tab.id === event.target.id),
    })
  );

  render() {
    const { currentTab } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected tab is ${currentTab.title}`}
        </h1>
        {tabs.map(tab => (
          <Tabs
            key={tab.id}
            id={tab.id}
            name={tab.title}
            onClick={this.onTabSelect}
          />
        ))}
        <p>{currentTab.content}</p>
      </div>
    );
  }
}

export default App;
