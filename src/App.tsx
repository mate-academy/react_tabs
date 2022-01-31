import React from 'react';
import { Tabs } from './component/Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTabId: Tab,
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedTabId: tabs[0],
  };

  onTabSelected = (tabId: Tab) => {
    this.setState({
      selectedTabId: tabId,
    });
  };

  render() {
    const { selectedTabId } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">{`Selected tab is: ${selectedTabId.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
