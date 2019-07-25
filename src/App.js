import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

const tabsOrigin = [
  { title: 'Tab 1', content: 'Some text 1' },
  { title: 'Tab 2', content: 'Some text 2' },
  { title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component {
  state = {
    tabs: tabsOrigin,
  };

  changeTabOrder = (event) => {
    const { name } = event.target;
    const { tabs } = this.state;

    if (name === 'next') {
      this.setState({
        tabs: [...tabs.slice(1), ...tabs.slice(0, 1)],
      });
    }

    if (name === 'back') {
      this.setState({
        tabs: [...tabs.slice(-1), ...tabs.slice(0, -1)],
      });
    }
  }

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1>{tabs.length} tabs</h1>

        <Tabs
          tabs={tabs}
          changeTabOrder={this.changeTabOrder}
        />
      </div>
    );
  }
}

export default App;
