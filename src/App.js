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

  changeActiveTab = (index) => {
    this.setState(() => ({ activeTab: index }));
  };

  render() {
    const { tabs, activeTab } = this.state;
    const text = tabs.find(tab => tab.title === activeTab).content;

    return (
      <div className="app">
        <Tabs
          tabs={tabs}
          tabsFunc={this.changeActiveTab}
          activeTabIndex={activeTab}
        />
        <p className="app__content">{text}</p>
      </div>
    );
  }
}

export default App;
