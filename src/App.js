import React from 'react';
import './App.css';
import Tab from './Tab';

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
    currentTabIndex: 0,
    content: tabs[0].content,
  }

  onTabSelected = (index) => {
    this.setState({
      content: tabs[index].content,
      currentTabIndex: index,
    });
  }

  render() {
    const { content, currentTabIndex } = this.state;

    return (
      <div>
        <h1>React tabs</h1>

        <Tab
          tabs={tabs}
          onSelected={this.onTabSelected}
          content={content}
          activeNumber={currentTabIndex}
        />
      </div>
    );
  }
}

export default App;
