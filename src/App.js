import React from 'react';
import Tab from './Components/Tab/Tab';

import './App.css';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    activeTab: tabs[0],
  }

  handlerEvent = (id) => {
    this.setState(() => ({
      activeTab: tabs.find(tab => tab.id === id),
    }));
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is
          {activeTab.title}
        </h1>
        <Tab tabs={tabs} onclick={this.handlerEvent} activeTab={activeTab} />
        <p>
          {activeTab.content}
        </p>
      </div>
    );
  }
}

export default App;
