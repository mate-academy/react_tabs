import React from 'react';

import Tabs from './components/Tabs/Tabs';
import Tab from './components/Tab/Tab';
import './App.css';

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
    tabIndex: 0,
  }

  changeTabIndex = (index) => {
    this.setState({ tabIndex: index });
  }

  render() {
    return (
      <>
        <h1>React tabs</h1>
        <Tabs>
          {tabs.map((tab, index) => (
            <Tab
              onTabSelected={() => this.changeTabIndex(index)}
              title={tab.title}
              activeIndex={this.state.tabIndex === index}
              key={tab.title}
            >
              {tab.content}
            </Tab>
          ))}
        </Tabs>
        <p>{tabs[this.state.tabIndex].content}</p>
      </>
    );
  }
}

export default App;
