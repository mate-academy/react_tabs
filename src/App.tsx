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
    const tab = tabs.find(item => item.id === id) || tabs[0];

    this.setState({
      selectedTab: tab,
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.id}
        </h1>
        <Button
          tabs={tabs}
          selectedTab={selectedTab}
          handleSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default App;
