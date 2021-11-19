import React from 'react';
import { Tabs } from './components/Tabs';
import './App.scss';
import { Tab } from './types/types';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  activeTab: string,
}

class App extends React.Component <{}, State> {
  state = {
    activeTab: tabs[0].id,
  };

  changeTab = (tabId: string) => {
    this.setState({ activeTab: tabId });
  };

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {this.state.activeTab}
        </h1>
        <Tabs
          tabs={tabs}
          onChangeTab={this.changeTab}
        />
      </div>
    );
  }
}

export default App;
