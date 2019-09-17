import React from 'react';
import Tabs from './components/Tabs/Tabs';
import './App.css';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Tab text 1' },
      { title: 'Tab 2', content: 'Tab text 2' },
      { title: 'Tab 3', content: 'Tab text 3' },
      { title: 'Tab 4', content: 'Tab text 4' },
      { title: 'Tab 5', content: 'Tab text 5' },
      { title: 'Tab 6', content: 'Tab text 6' },
      { title: 'Tab 7', content: 'Tab text 7' },
    ],
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
          Tabs
        </h1>
        <Tabs clickTab={this.clickTab} tabs={tabs} activeTab={activeTab} />
      </div>
    );
  }
}
export default App;
