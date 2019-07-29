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
    index: 0,
  };

  onTabSelected = (index) => {
    this.setState({ index });
  }

  render() {
    const { tabs, index } = this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 App__title>{tabs.length} tabs</h1>
        <Tabs index={index}>
          {tabs.map((tab, i) => (
            <Tabs.Tab
              key={new Date()}
              title={tab.title}
              onTabSelected={this.onTabSelected}
              index={index}
              i={i}
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
