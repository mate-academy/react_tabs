import React from 'react';
import { Tabs } from './components/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: Tab,
}

export class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  selectTab = (currentTab:Tab) => {
    this.setState({ selectedTab: currentTab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is ${selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          selectTab={this.selectTab}
        />
      </div>
    );
  }
}
