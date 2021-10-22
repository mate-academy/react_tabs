import React from 'react';
import Tabs from './components/Tabs';
import './App.scss';

type State = {
  selectedTabId: string;
};

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component<{}, State> {
  state: State = {
    selectedTabId: tabs[0].id,
  };

  onTabSelected = (id: string) => {
    this.setState({ selectedTabId: id });
  };

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is
          {this.state.selectedTabId}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTabId}
          onSaveId={this.onTabSelected}
        />
      </div>
    );
  }
}
export default App;
