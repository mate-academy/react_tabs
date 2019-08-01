import React from 'react';
import './App.css';
import Tabs from './Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    activeTabIndex: 0,
  };

  onTabSelected = (index) => {
    this.setState({ activeTabIndex: index });
  }

  render() {
    const { tabs, activeTabIndex } = this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1>{tabs.length} tabs</h1>
        <Tabs activeTabIndex={activeTabIndex}>
          {tabs.map((tab, tabIndex) => (
            <Tabs.Tab
              key={tab.title}
              title={tab.title}
              onTabSelected={this.onTabSelected}
              activeTabIndex={activeTabIndex}
              tabIndex={tabIndex}
            >
              {tab.content}
            </Tabs.Tab>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default App;
