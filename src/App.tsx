import React from 'react';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './react-app-env';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  selectTab = (id: Tab) => {
    this.setState({ selectedTab: id });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div>
        <h1>
          {'Selected Tab is '}
          {selectedTab.title}
        </h1>
        <Tabs
          selectedTab={selectedTab.id}
          selectTab={this.selectTab}
          tabs={tabs}
        />
      </div>
    );
  }
}
