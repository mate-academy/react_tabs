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
    selectedTab: tabs[0],
  }

  changeTab = (newTab) => {
    this.setState({ selectedTab: newTab });
  }

  render() {
    const { id, title, content } = this.state.selectedTab;
    const { changeTab } = this;

    return (
      <div className="App">
        <h1 className="App__title">
          Selected tab is&nbsp;
          {title}
        </h1>
        <Tabs
          tabs={tabs}
          onClick={changeTab}
          selectedTabId={id}
          selectedTabContent={content}
        />
      </div>
    );
  }
}

export default App;
