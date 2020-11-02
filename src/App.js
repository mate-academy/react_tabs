import React from 'react';
import uuid from 'uuid-random';
import './App.css';

import { Tabs } from './components/Tabs';
import { Tab } from './components/Tab';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

export class App extends React.Component {
  state = {
    tabs: [...tabs],
    index: 0,
    tabSelected: 'Tab 1',
  }

  handleTabSelected = (value, index) => {
    this.setState({
      tabSelected: value,
      index,
    });
  }

  render() {
    return (
      <div className="App">
        <Tabs
          indexTab={this.state.index}
          tabSelected={this.state.tabSelected}
          onTabSelected={this.handleTabSelected}
        >
          {this.state.tabs.map(tab => (
            <Tab
              key={uuid()}
              title={tab.title}
            >
              {tab.content}
            </Tab>
          ))}
        </Tabs>
      </div>
    );
  }
}
