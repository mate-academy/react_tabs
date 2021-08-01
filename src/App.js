import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Home', content: 'Some text home' },
  { id: 'tab-2', title: 'Profile', content: 'Some text profile' },
  { id: 'tab-3', title: 'Contact', content: 'Some text contact' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  }

  selectTab = (tab) => {
    this.setState({
      selectedTab: tab,
    });
  }

  render() {
    const { selectedTab } = this.state;
    const { selectTab } = this;

    return (
      <div className="App box">
        <h1>
          Selected tab is:&nbsp;
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          onSelect={selectTab}
        />
        <p className="tabs__tab-content">
          {selectedTab.content}
        </p>
      </div>
    );
  }
}

export default App;
