// import { render } from 'node-sass';
import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aliquam.' },
  { id: 'tab-2', title: 'Tab 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  { id: 'tab-3', title: 'Tab 3', content: 'Lorem ipsum dolor sit amet consectetur ' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    activeTabId: tabs[0].id,
  }

  chooseTab = (selectedTabId) => {
    this.setState({
      activeTabId: selectedTabId,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {tabs.find(tab => tab.id === this.state.activeTabId).title}

        </h1>
        <Tabs
          tabs={tabs}
          activeTabId={this.state.activeTabId}
          chooseTab={this.chooseTab}
        />
      </div>
    );
  }
}

export default App;
