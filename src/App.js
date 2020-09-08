import React from 'react';
import { Tabs } from './Tabs';

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
    index: 0,
  }

  onTabSelected = (index) => {
    this.setState({
      index,
    });
  }

  render() {
    const { index } = this.state;

    return (
      <div>
        <Tabs
          tabs={tabs}
          tabIndex={index}
          onChange={this.onTabSelected}
        />
        <div className="content">
          {tabs[index].content}
        </div>
      </div>
    );
  }
}

export default App;
