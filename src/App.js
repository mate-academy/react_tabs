import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Home',
    content: 'Some text 1',
  },
  {
    title: 'Rrofile',
    content: 'Some text 2',
  },
  {
    title: 'Contact',
    content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    selectedTabIndex: 0,
  }

  onTabSelected = (index) => {
    this.setState({ selectedTabIndex: index });
  }

  render() {
    const { selectedTabIndex } = this.state;

    return (
      <>
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          onChange={this.onTabSelected}
          selectedTabIndex={selectedTabIndex}
        />
        <p className="content">{tabs[selectedTabIndex].content}</p>
      </>
    );
  }
}

export default App;
