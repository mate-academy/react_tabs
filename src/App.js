import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';
import { TabsContent } from './components/TabsContent';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTabId: tabs[0].id,
  }

  handleSelectedTab = (id) => {
    this.setState({
      selectedTabId: id,
    });
  }

  render() {
    const { selectedTabId } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected tab is ${selectedTabId}`}
        </h1>
        <Tabs
          tabs={tabs}
          handleSelectedTab={this.handleSelectedTab}
          selectedTabId={selectedTabId}
        />
        <TabsContent
          tabs={tabs}
          selectedTabId={selectedTabId}
        />
      </div>
    );
  }
}

export default App;
