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
    selectedId: '',
  }

  selectedTab = (id) => {
    this.setState({
      selectedId: id,
    });
  }

  render() {
    const { selectedId } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected tab is ${selectedId}`}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTab={this.selectedTab}
          selectedId={selectedId}
        />
        <TabsContent
          tabs={tabs}
          selectedId={selectedId}
        />
      </div>
    );
  }
}

export default App;
