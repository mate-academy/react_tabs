import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

class App extends React.PureComponent {
  state = {
    selectedTabId: 'tab-1',
  }

  onTabSelected = (id) => {
    this.setState({ selectedTabId: id });
  }

  render() {
    const { selectedTabId } = this.state;
    const { title, content } = tabs.find(tab => tab.id === selectedTabId);

    return (
      <div className="App">
        <h1>
          {`Selected tab is ${title}`}
        </h1>
        <Tabs
          tabs={tabs}
          onTabSelected={
            this.onTabSelected
          }
          selectedTabId={selectedTabId}
        />
        <div className="content">
          <p>{content}</p>
        </div>
      </div>
    );
  }
}

export default App;
