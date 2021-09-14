import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatum dolor consequatur vero atque perferendis eius fuga iste! Totam, reprehenderit!' },
  { id: 'tab-2', title: 'Tab 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum nulla beatae blanditiis voluptatum. Quos consequatur exercitationem accusantium, quaerat minus repellat perferendis, vero illum voluptatum sapiente non cumque dolores earum!' },
  { id: 'tab-3', title: 'Tab 3', content: 'Totam, reprehenderit!' },
];

type State = {
  selectedTab: Tab;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  changeTab = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App container w-50">
        <h1 className="display-1">
          {'Selected tab is '}
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          changeTab={this.changeTab}
        />
      </div>
    );
  }
}

export default App;
