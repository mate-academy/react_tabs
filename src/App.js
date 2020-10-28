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
  {
    title: 'JSX here',
    content: (
      <div>
        <h1>Checking JSX children</h1>
        <button type="button" className="btn btn-dark">I guess working</button>
      </div>
    ),
  },
];

const preparedTabs = tabs.map((tab, index) => ({
  ...tab,
  id: index,
}));

class App extends React.PureComponent {
  state = {
    tabs: preparedTabs,
  }

  render() {
    return (
      <div className="App">
        <Tabs tabs={this.state.tabs} index={1} />
      </div>
    );
  }
}

export default App;
