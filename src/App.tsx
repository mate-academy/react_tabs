import React from 'react';
import Button from './Button';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: Tab;
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  handleSelect = (id: string) => {
    const idx = tabs.findIndex(tab => tab.id === id);

    this.setState({
      selectedTab: tabs[idx],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {this.state.selectedTab.id}
        </h1>
        <Button
          tabs={tabs}
          selectedTab={this.state.selectedTab}
          handleSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default App;
