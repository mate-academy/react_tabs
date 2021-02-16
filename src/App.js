import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTabIndex: 0,
  };

  selectTab = (tabIndex) => {
    this.setState({
      selectedTabIndex: tabIndex,
    });
  }

  render() {
    const { selectedTabIndex } = this.state;

    return (
      <>
        <h1 className="title">
          Selected tab is
          {' '}
          {tabs[selectedTabIndex].title}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabIndex}
          onTabSelected={this.selectTab}
        />
      </>
    );
  }
}

export default App;
