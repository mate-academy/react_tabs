import React from 'react';
import './App.css';

import { Tabs } from './components/Tabs';
import { Tab } from './components/Tab';

class App extends React.Component {
  state = {
    activeTab: 'Tab 1',
  }

  onTabSelected = (title) => {
    this.setState({
      activeTab: title,
    });
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div className="container">
        <h1>React tabs</h1>

        <Tabs>
          <Tab
            title="Tab 2"
            activeTab={activeTab}
            onTabSelected={this.onTabSelected}
          >
            It could be a text
          </Tab>

          <Tab
            title="Tab 3"
            activeTab={activeTab}
            onTabSelected={this.onTabSelected}
          >
            <div>1</div>
            <div>2</div>
          </Tab>

          <Tab
            title="Tab 1"
            activeTab={activeTab}
            onTabSelected={this.onTabSelected}
          >
            Or even any JSX
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
