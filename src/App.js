import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Tabs } from './components/Tabs/Tabs';

// eslint-disable-next-line no-unused-vars
const tabsFromServer = [
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
  tabs = tabsFromServer.map((tab, index) => ({
    ...tab,
    id: index,
  }));

  render() {
    return (
      <div className="App">
        <Tabs tabs={this.tabs} />
      </div>
    );
  }
}

export default App;
