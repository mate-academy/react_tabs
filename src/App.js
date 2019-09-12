import React from 'react';
import Tabs from './Tabs';
import './tabs.scss';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="tabbed">
        {/* eslint-disable-next-line */}
        <h1>{tabs.length} tabs</h1>
        <Tabs tabs={tabs} />
      </div>
    );
  }
}

export default App;
