import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs/Tabs';

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
    activeIndex: 0,
  }

  onTabSelected = (index) => {
    this.setState({ activeIndex: index });
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <div className=" App section">
        <h1 className="title">React tabs</h1>
        <Tabs
          tabs={tabs}
          selectedIndex={activeIndex}
          onClick={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
