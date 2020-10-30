import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';

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

class App extends React.PureComponent {
  state = {
    index: 2,
  }

  onTabSelect = (index) => {
    this.setState({
      index,
    });
  }

  render() {
    return (
      <div className="w-25">
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          index={this.state.index}
          onSelect={this.onTabSelect}
        />
      </div>
    );
  }
}

export default App;
