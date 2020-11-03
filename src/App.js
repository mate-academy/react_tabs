import React, { PureComponent } from 'react';
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

const preparedTabsData = tabs.map((tab, index) => ({
  ...tab,
  index,
}));

class App extends PureComponent {
  render() {
    return (
      <div>
        <h1 className="title" style={{ textAlign: 'center' }}>React Tabs</h1>
        <Tabs
          tabs={preparedTabsData}
          index={0}
        />
      </div>
    );
  }
}

export default App;
