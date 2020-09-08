import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

// eslint-disable-next-line no-unused-vars
const tabsFromServer = [
  {
    id: 0,
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    id: 1,
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    id: 2,
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    tabs: tabsFromServer,
    active: 0,
  }

  setTab = (id) => {
    this.setState({
      active: id,
    });
  }

  render() {
    const { tabs, active } = this.state;

    return (
      <div>
        <h1>React tabs</h1>
        <Tabs
          active={active}
          tabs={tabs}
          setTab={this.setTab}
        />
        <div className="content">
          {this.state.tabs[this.state.active].content}
        </div>
      </div>
    );
  }
}
export default App;
