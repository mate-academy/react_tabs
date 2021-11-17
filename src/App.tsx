import React from 'react';

import './App.scss';
import { Tabs } from './Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {};

interface Tab {
  id: string,
  title: string,
  content:string
}

interface State {
  selectedTab: Tab | undefined,
}

export class App extends React.Component<Props, State> {
  state = {
    selectedTab: tabs[0],
  };

  chooseContent = (tabId:string) => {
    this.setState({
      selectedTab: tabs.find(tab => tab.id === tabId),
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          {' '}
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          onContent={this.chooseContent}
          selectedId={selectedTab.id}
        />
        <div />
      </div>
    );
  }
}
