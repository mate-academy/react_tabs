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
const preparedTabs = tabs.map((tab, index) => ({
  ...tab,
  id: index,
}));

class App extends React.Component {
  state={
    content: '',
  }

  onTabSelected = (id) => {
    this.setState(() => ({
      content: preparedTabs.find(tab => (tab.id === id)).content,
    }));
  }

  render() {
    return (
      <>
        <Tabs
          preparedTabs={preparedTabs}
          onTabSelected={this.onTabSelected}
        />
        <p>
          {this.state.content}
        </p>
      </>
    );
  }
}

export default App;
