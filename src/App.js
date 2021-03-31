import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'Profile', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contact', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    tabsCopy: tabs.map(tab => ({ ...tab })),
    selectedTabIndex: 0,
  }

  onTabSelected = (tab) => {
    const { tabsCopy } = this.state;
    const findSelectedTabIndex = tabsCopy
      .findIndex(el => el.title === tab.title);

    this.setState({
      selectedTabIndex: findSelectedTabIndex,
    });
  }

  render() {
    const { tabsCopy, selectedTabIndex } = this.state;

    return (
      <section className="app">
        <h1 className="title">React tabs</h1>
        <Tabs
          tabsCopy={tabsCopy}
          selectedTabIndex={selectedTabIndex}
          onTabSelected={this.onTabSelected}
        />
      </section>
    );
  }
}

export default App;
