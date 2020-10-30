import React from 'react';
import './App.css';

import { Tabs } from './components/Tabs';

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
  index,
}));

class App extends React.PureComponent {
  state = {
    defaultTabIndex: 0,
  }

  render() {
    const { defaultTabIndex } = this.state;

    return (
      <div className="app">
        <h1>React tabs</h1>
        <Tabs
          tabs={preparedTabs}
          defaultTabIndex={defaultTabIndex}
        />
      </div>
    );
  }
}

export default App;
