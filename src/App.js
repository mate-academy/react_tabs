import React from 'react';
import './App.css';

import { Tabs } from './components/Tabs';
import { Tab } from './components/Tab';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    activeTab: 'Tab 1',
  }

  onTabSelected = (title) => {
    this.setState(state => ({
      activeTab: state.title,
    }));
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div className="container">
        <h1>React tabs</h1>

        {/* <Tabs tabs={tabs} /> */}

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
