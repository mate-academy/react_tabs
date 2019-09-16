import React from 'react';
import Tabs from './components/Tabs/Tabs';
import './App.css';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    activeTab: 'Tab 1',
  };

  clickTab = (title) => {
    this.setState({
      activeTab: title,
    });
  }

  render() {
    const { tabs, activeTab } = this.state;

    return (
      <div className="app">
        <h1>
          {tabs.length}
          tabs
        </h1>
        <Tabs clickTab={this.clickTab} tabs={tabs} activeTab={activeTab} />
      </div>
    );
  }
}

export default App;
