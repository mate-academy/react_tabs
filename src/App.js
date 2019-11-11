import React from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Content from './components/Content';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    currentTabIndex: 0,
  };

  selected = (tab) => {
    this.setState(state => ({
      ...state,
      currentTabIndex: tab,
    }));
  }

  render() {
    const { tabs } = this.state;

    return (
      <div className="container">
        <Tabs
          tabs={tabs}
          onTabSelected={this.selected}
        />
        <Content state={this.state} />
      </div>
    );
  }
}

export default App;
