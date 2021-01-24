import React from 'react';
import { Tabs } from './components/Tabs/Tabs';

import './App.css';

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

class App extends React.Component {
  state = {
    tabsCopy: [...tabs].map(tab => ({ ...tab })),
    activeTab: 0,
  }

  onTabSelected = (toggler) => {
    const togglerIndex = tabs.findIndex(tab => tab.title === toggler.title);

    this.setState({
      activeTab: togglerIndex,
    });
  }

  render() {
    const { activeTab, tabsCopy } = this.state;

    return (
      <Tabs
        tabs={tabsCopy}
        activeTab={activeTab}
        onTabSelected={this.onTabSelected}
      />
    );
  }
}

export default App;
