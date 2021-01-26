import React from 'react';
import './App.css';

import Tabs from './components/Tabs';

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
    selectedTab: 0,
  }

  onTabSelected = (e) => {
    this.setState({
      selectedTab: tabs
        .findIndex(tab => tab.title === e.target.textContent),
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div>
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          onTabSelected={this.onTabSelected}
          selectedTab={selectedTab}
        />
        <article className="tab_content">
          { tabs[selectedTab].content }
        </article>
      </div>
    );
  }
}

export default App;
