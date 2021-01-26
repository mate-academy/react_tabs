import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';
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
    currentIndex: 0,
  }

  selectTab = (index) => {
    this.setState({
      currentIndex: index,
    });
  }

  render() {
    const { currentIndex } = this.state;

    return (
      <div>
        <h1>React tabs</h1>

        <Tabs
          tabs={tabs}
          currentIndex={currentIndex}
          selectTab={this.selectTab}
        />

        <p className="content">{tabs[currentIndex].content}</p>
      </div>
    );
  }
}

export default App;
