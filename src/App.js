import React from 'react';
import './App.css';
import tabsContent from './TabsContent';
import Tabs from './Tabs';

class App extends React.Component {
  state = {
    tabs: tabsContent,
    activeTab: 0,
  };

  handleChangeTab = (index) => {
    this.setState({ activeTab: index });
  };

  render() {
    const { tabs, activeTab } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          handleChangeTab={this.handleChangeTab}
        />
      </div>
    );
  }
}

export default App;
