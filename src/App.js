import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './App.scss';

/* eslint-disable */
const tabsFromServer  = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'Profile', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contact', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    tabs: tabsFromServer.map(tab => ({ ...tab })),
    selectedTabId: 0,
  }

  onTabSelected = (tab) => {
    const { tabs } = this.state;
    const findSelectedId = tabs
      .findIndex(el => el.id === tab.id);

    this.setState({
      selectedTabId: findSelectedId,
    });
  }

  render() {
    const {
      tabs,
      selectedTabId,
    } = this.state;

    return (
      <section className="app">
        <h1 className="title">
          {`Selected tab is: ${tabs[selectedTabId].id}`}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabIndex={selectedTabId}
          onTabSelected={this.onTabSelected}
        />
      </section>
    );
  }
}

export default App;
