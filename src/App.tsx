import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTabId: string,
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedTabId: tabs[0].id,
  };

  onSelectedTabId = (tab: Tab) => {
    this.setState({ selectedTabId: tab.id });
  };

  render() {
    const { selectedTabId } = this.state;
    const index = tabs.findIndex(tab => tab.id === selectedTabId);

    return (
      <div className="app">
        <h1 className="app__title">{`Selected tab is ${selectedTabId}`}</h1>
        <div className="app__tabs">
          <Tabs
            selectedTabId={selectedTabId}
            tabsAll={tabs}
            onSelectedTabId={this.onSelectedTabId}
          />
          <div className="app__content">
            {tabs[index].content}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
