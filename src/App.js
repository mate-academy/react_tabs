import React from 'react';
import './App.css';
import Tabs from './Tabs';

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
    count: 0,
  }

  render() {
    return (
      <>
        <h1>React tabs</h1>
        <Tabs
          items={tabs}
          onTabSelected={(index) => {
            this.setState({ count: index });
          }}
        />
        <div>{tabs[this.state.count].content}</div>
      </>
    );
  }
}

export default App;
