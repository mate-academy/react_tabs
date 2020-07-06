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
    content: tabs[0].content,
  }

  changeTabIndex = (index, content) => {
    this.setState({
      tabIndex: index,
      content,
    });
  }

  render() {
    return (
      <>
        <h1 className="App__header">React tabs</h1>
        <Tabs>
          {tabs.map((tab, index) => (
            <Tab
              title={tab.title}
              activeIndex={this.state.tabIndex}
              index={index}
              onTabSelected={this.changeTabIndex}
              key={tab.title}
            >
              {tab.content}
            </Tab>
          ))}
        </Tabs>
        <p className="App__text">{this.state.content}</p>
      </>
    );
  }
}

export default App;
