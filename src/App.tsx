import React from 'react';
import { Tabs } from './components/Tabs';
import { Tab } from './react-app-env';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Home sweet home' },
  { id: 'tab-2', title: 'Profile', content: 'Profile info' },
  { id: 'tab-3', title: 'Contact', content: 'Phone number' },
];

type State = {
  selectedTab: Tab;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  selectTab = (newSelectedTab: Tab) => {
    this.setState({
      selectedTab: newSelectedTab,
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h3 className="selected-title mb-5">
          {`Selected tab: ${selectedTab.title}`}
        </h3>

        <section className="App__tabs">
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTab.id}
            onTabSelected={this.selectTab}
          />
          {selectedTab.content}
        </section>
      </div>
    );
  }
}

export default App;
