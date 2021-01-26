import React from 'react';
import { Tabs } from './components/Tabs/Tabs';

import './App.css';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    id: 0,
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    id: 1,
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    id: 2,
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    activeTabIndex: 0,
  }

  onTabSelected = (selectedTabId) => {
    this.setState({ activeTabIndex: selectedTabId });
  }

  render() {
    const { activeTabIndex } = this.state;

    return (
      <>
        <Tabs
          tabs={tabs}
          activeTabIndex={activeTabIndex}
          onTabSelected={this.onTabSelected}
        />

        {tabs
          .filter((tab, index) => activeTabIndex === index)
          .map(tab => (
            <p key={tab.title}>
              {tab.content}
            </p>
          ))
        }
      </>
    );
  }
}

export default App;
