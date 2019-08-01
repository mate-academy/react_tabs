import React from 'react';
import './App.css';
import Tabs from './Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    tabId: 1,
  };

  selectTab = (index) => {
    this.setState({
      tabId: index,
    });
  }

  render() {
    const { tabs, tabId } = this.state;

    return (
      <div>
        <Tabs
          tabs={tabs}
          selectTab={this.selectTab}
          tabId={tabId}
        />
      </div>

    );
  }
}

export default App;
