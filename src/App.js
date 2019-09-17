import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';

class App extends React.Component {
  state = {
    activeTab: 0,
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
  };

  getActiveTab = (index) => {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const { tabs, activeTab } = this.state;

    return (
      <>
        <div className="App">
          <h1 className="title">React Tabs</h1>
        </div>
        <Tabs
          tabs={tabs}
          getActiveTab={this.getActiveTab}
          activeTab={activeTab}
        />
      </>
    );
  }
}

export default App;
