/* eslint-disable max-len */
import React from 'react';

import './App.scss';
import { TabContent } from './Components/TabContent';
import { Tabs } from './Components/Tabs';

const tabsFromServer: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  { id: 'tab-4', title: 'Tab 4', content: 'Some text 4' },
];

type State = {
  tabs: Tab[];
  selectedTab: string,
};

export class App extends React.Component<{}, State> {
  state = {
    tabs: tabsFromServer,
    selectedTab: tabsFromServer[0].id,
  };

  selectTab = (id: string) => {
    this.setState({ selectedTab: id });
  };

  render(): React.ReactNode {
    const { tabs, selectedTab } = this.state;
    const selected: Tab | undefined = tabs.find(tab => tab.id === selectedTab);

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selected
            ? selected.title
            : 'None'}
        </h1>
        <Tabs tabs={tabs} selectedTabId={selectedTab} select={this.selectTab} />
        <TabContent tab={selected} />
      </div>
    );
  }
}

export default App;
