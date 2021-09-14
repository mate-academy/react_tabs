import React from 'react';
import { Tabs } from './components/Tabs';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {};
type State = {
  selectedTab: Tab;
};

class App extends React.Component<Props, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (id: string) => {
    const chooseTab = tabs.findIndex(tab => tab.id === id);

    this.setState({
      selectedTab: tabs[chooseTab],
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1 className="d-flex justify-content-center">
          Selected tab is
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
