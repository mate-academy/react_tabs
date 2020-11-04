import React from 'react';
import './App.css';

import { Tabs } from './components/Tabs';

const sourceTabs = [
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

const preparedTabs = sourceTabs.map((tab, index) => ({
  ...tab,
  index,
}));

class App extends React.Component {
  state = {
    tabs: preparedTabs,
  }

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        <Tabs tabs={tabs} index={0} />
      </div>
    );
  }
}

export default App;
