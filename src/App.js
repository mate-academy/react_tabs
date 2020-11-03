import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';

const tabs = [
  {
    title: 'Tab 1',
    content: 'Content 1',
  },
  {
    title: 'Tab 2',
    content: 'Content 2',
  },
  {
    title: 'Tab 3',
    content: 'Content 3',
  },
];

class App extends React.PureComponent {
  state = {
    currentIndex: 0,
  }

  onSelect = (index) => {
    this.setState({
      currentIndex: index,
    });
  }

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="app">
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          index={currentIndex}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default App;
