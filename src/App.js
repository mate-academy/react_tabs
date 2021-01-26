import React from 'react';
import List from './components/List';
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
    tabs: [...tabs],
    index: 0,
  };

  selectTabIndex = (i) => {
    this.setState({
      index: i,
    });
  };

  render() {
    const { index } = this.state;
    const tabsForRender = this.state.tabs.map((tab, i) => ({
      ...tab,
      index: i,
    }));

    return (
      <div className="Tab">
        <h1 className="Tab__header">React tabs</h1>
        <List tabs={tabsForRender} onTabSelected={this.selectTabIndex} />
        <div className="Tab__main-content">{tabs[index].content}</div>
      </div>
    );
  }
}

export default App;
